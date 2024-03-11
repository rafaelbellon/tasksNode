module.exports = app => {
    app.db.sequelize.sync({ force: true }) 
    app.listen(app.get("port"), () => {
        console.log('NTask API = porta ', app.get("port"));
    });
};