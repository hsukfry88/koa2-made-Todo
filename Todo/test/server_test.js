const request = require('supertest');
const app = require('./../app');
let req=request(app);

    describe('GET /', () => {
        it('response is success', (done) => {
            req.get('/')
                .expect('Content-Type', /html/)
                .expect(200, done);
        })
    });

    describe('POST /getData',()=>{
        it('response Data sucess',(done)=>{
            req.post('/getData')
               .send({item:'这是测试数据'})
               .set('Accept', 'application/json')
               .expect(200, {
                    id:7,
                    content: '这是测试数据'
                }, done);
        });
        
    });
