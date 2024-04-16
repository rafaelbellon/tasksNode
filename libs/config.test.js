module.exports = {
      database: "ntask_test",
      username: "",
      password: "",
      params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: false,
        define: {
          underscored: true
        }
    },
    jwtSecret: "Nta$K_AP1_T35t",
    jwtSession: {session: false}
}