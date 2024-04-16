module.exports = app => {
    const env = process.env.NODE_ENV;
    if(Boolean(env)) {
        return require("./config.test.js");
    }
    return require("./config.development.js");
}