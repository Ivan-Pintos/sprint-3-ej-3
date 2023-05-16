const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
function passportConfig() {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
          const BDUserpassword = user.dataValues.password;
          if (await bcrypt.compare(password, BDUserpassword)) {
            if (user.dataValues.isDeleted === true) {
              return done(null, false, { message: "Este usuario ha sido eliminado" });
            }
            return done(null, user);
          } else {
            return done(null, false, { message: "Contraseña Incorrecta :(" });
          }
        } else {
          return done(null, false, { message: "Correo Electronico Incorrecto :(" });
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
    const data = await User.findByPk(id, { include: { all: true } });
    const permissions = await data.role.getPermissions();
    const user = { data, permissions };
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = {
  passportConfig,
  passport,
};
