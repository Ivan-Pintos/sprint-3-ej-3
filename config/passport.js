const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
function passportConfig() {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        const user = await Author.findOne({ where: { email: email } });
        if (user) {
          const BDUserpassword = user.dataValues.password;
          if (await bcrypt.compare(password, BDUserpassword)) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Contraseña Incorrecta" });
          }
        } else {
          return done(null, false, { message: "No hay un usuario registrado con ese email" });
        }
      } catch (error) {
        return done(error);
      }
    }),
  );
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Author.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = {
  passportConfig,
  passport,
};
