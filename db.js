var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

let db = null;

module.exports = app => {
    if (!db) {
      const config = app.libs.config;
      const sequelize = new Sequelize(
          config.database,
          config.username,
          config.password,
          config.params
        );
        db = {
             sequelize,
             Sequelize,
             models: {}
        };
        const dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => {
          const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes)
          db.models[model.name] = model;
        });        
        Object.keys(db.models).forEach(key => {
          db.models[key].options.classMethods.associate(db.models);
        });
    }
  return db;
}