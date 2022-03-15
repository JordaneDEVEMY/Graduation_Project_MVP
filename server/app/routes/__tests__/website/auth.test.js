// Using SuperTest for local HTTP request management.
const request = require('supertest');
const app = require('../../..');

// const mockRes = () => {
//   const res = {};
//   res.json = jest.fn();
//   return res;
// };

// describe('Website authentification', () => {
//   // const validUser = {
//   //   email: 'olleks.planning@gmail.com',
//   //   password: 'test',
//   // };

//   test('Status 200 - Connexion works', async (done) => {
//     await request(app)
//       .post('/login')
//       .send({ email: 'olleks.planning@gmail.com', password: 'test' })
//       .set({ Accept: 'Application/json' }) // ? .set('Accept', 'application/json')
//       .expect((res) => {
//         console.log('file: auth.test.js ~ line 23 ~ .expect ~ res', res);
//       })
//       .expect(200, {}, done);

//     // const response = await request(app)
//     //   .post('/login')
//     //   .send({ email: 'olleks.planning@gmail.com', password: 'test' });

//     // expect(response.statusCode).toBe(200);
//     // expect(response.status).toMatchObject({});
//   });
// });
describe('POST /login', () => {
  it('login.name should be an case-insensitive match for "john"', (done) => {
    request(app)
      .post('/login')
      .send('name=john') // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.id = 'some fixed id';
        res.body.name = res.body.name.toLowerCase();
      })
      .expect(200, {
        id: 'some fixed id',
        name: 'john',
      }, done);
  });
});
