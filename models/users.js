const bcrypt = require("bcrypt");

module.exports = (sequelize, DataType) => {  
    const Users = sequelize.define("Users", {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
          }
      }
    }, 
    {
      hooks: {
        beforeCreate: user => {
          //const saltRounds = 10
          //const salt = bcrypt.genSaltSync();
          user.password = user.password;//bcrypt.hashSync(user.password, salt);
        }
      },
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Tasks);
        },
        isPassword: (encodedPassword, password) => {
          return bcrypt.compareSync(password, encodedPassword);
        }
      }
    });
    return Users;
  };
  