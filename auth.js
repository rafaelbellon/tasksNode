const passport = require("passport");
const { ExtractJwt } = require("passport-jwt");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;

module.exports = app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;

    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: cfg.jwtSecret
    }
    passport.use(new jwtStrategy(options, (payload, done) => {
        Users.findById(payload.id)
            .then(user => {
                if (user) {
                    return done (null, {
                        id: user.id,
                        email: user.email
                    });                    
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    }));
    passport.use(jwtStrategy);
        return {
            initialize: () => {
                return passport.initialize();
        },
    authenticate: () => {
        return passport.authenticate("jwt", cfg.jwtSession);
    }
};
}