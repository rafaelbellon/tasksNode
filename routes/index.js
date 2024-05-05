module.exports = app => {
  
  /**
   * @api {get} / API Status 
   * @apiGroup Status
   * @apiSuccess {String} status Mensagem de status API
   * @apiSuccessExample {json} sucesso
   *    HTTP/1.1 200 OK
   *    {"status": "NTask API"}
   */  

  app.get("/", (req, res) => {
    res.json({ status: "NTask API " });
  });
};