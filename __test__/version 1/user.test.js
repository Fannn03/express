const request = require('supertest')

const server = require('../../main')
const app = server.app
const Model = server.Model

describe('User Testing', () => {

    beforeAll(done => {
        Model.syncronize
        setTimeout(() => done(), 1500)
    })

    test('Should return 200 when insert data users', async () => {
        const data = {
            username: 'user123',
            firstname: 'John',
            lastname: 'Wick'
        }
        const response = await request(app).post('/api/v1/users/create')
            .send(data)
        
        expect(response.status).toBe(200)
        expect(response.body).toBeDefined()
    })

    test('Should return 400 when insert data failed', async () => {
        const data = {
            username: 'user123',
        }
        const response = await request(app).post('/api/v1/users/create')
            .send(data)
        
        expect(response.status).toBe(400)
    })

    test('Should return 200 when get details data user is found', async () => {
        const data = 'user123'
        const response = await request(app).get(`/api/v1/users/${data}`)

        expect(response.status).toBe(200)
        expect(response.body).toBeDefined()
    })

    test('Should return 404 when get details data user not found', async () => {
        const data = 'lol123'
        const response = await request(app).get(`/api/v1/users/${data}`)

        expect(response.status).toBe(404)
        expect(response.body.result).toBe("error")
    })

    test('Should be get all users data', async () => {
        const response = await request(app).get('/api/v1/users')

        expect(response.status).toBe(200)
        expect(response.body).toBeDefined()
        console.log('data user :', response.body.data);
    })

}) 