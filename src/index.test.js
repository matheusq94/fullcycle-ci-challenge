const request = require('supertest')
const server = require('./app')

describe('Get Endpoints', () => {
    it('Shoule GET the main route', async () => {
        const res = await request(server).get('/')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })
})