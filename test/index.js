describe('Routes: Index', () => {
    it('returns the API status GET / request', (done) => {
        request.get('/')
               .expect(200)
               .end((err, res) => {
                if(err){
                    console.log(err);
                }
                done();
            });
    });
});