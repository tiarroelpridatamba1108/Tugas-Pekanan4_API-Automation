const { expect } = require('chai')
const request = require('supertest')
const data = require('../data/dummyData');

const baseUrl = 'https://kasir-api.belajarqa.com';
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBhNWU2M2M1LTA3ZWItNGE2Mi1iZWYwLTBiMzA0ZTVkNTIyNCIsImNvbXBhbnlJZCI6IjQ4OGYxMWYwLTEyMzEtNGYzZC1hNTRiLTMzNTI1NzcwZjU3YiIsImlhdCI6MTY3NjE2MDY0Nn0.ZrXxuM5xFPdbAXo_zcUTGooQLepYCcShw6ELd1QPo1c"

describe('Post Products', async () => {
    const response = request (baseUrl)
    .post('/products')
    .set('Authorization', `Bearer ${accessToken}`)
    .send(data.CREATE_PRODUCTS_DATA)

    it('response status equal to 201', async  () => {
        expect((await response).status).to.equal(201)
    })
    
    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty(`message`)
    })

    console.log("Add One Products: ", (await response).body.data);
})

describe('Get Product Detail', async () => {
    const response = request (baseUrl)
    .get('/products/46b72113-d629-41c0-95e7-85e28db2063c')
    .set('Authorization', `Bearer ${accessToken}`)

    it('response status equal to 200', async  () => {
        expect((await response).status).to.equal(200)
    })

    console.log("Data Product Detail: ", (await response).body.data.product);
})

describe('Delete Products', async() => {
    const response = request(baseUrl)
    .delete('/products/0ae0c936-7664-4224-b5c1-8324960b19bf')
    .set('Authorization', `Bearer ${accessToken}`)
    
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty('status')
        expect((await response).body).to.haveOwnProperty('message')
    })

    console.log("Delete Data Product: ", (await response).body);
})