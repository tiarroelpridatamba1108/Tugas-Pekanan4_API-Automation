const { expect } = require('chai')
const request = require('supertest')
const data = require('../data/dummyData');

const baseUrl = 'https://kasir-api.belajarqa.com';
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBhNWU2M2M1LTA3ZWItNGE2Mi1iZWYwLTBiMzA0ZTVkNTIyNCIsImNvbXBhbnlJZCI6IjQ4OGYxMWYwLTEyMzEtNGYzZC1hNTRiLTMzNTI1NzcwZjU3YiIsImlhdCI6MTY3NjE2MDY0Nn0.ZrXxuM5xFPdbAXo_zcUTGooQLepYCcShw6ELd1QPo1c"

describe('Post Category', async () => {
    const response = request (baseUrl)
    .post('/categories?')
    .set('Authorization', `Bearer ${accessToken}`)
    .send(data.CREATE_CATEGORIES_DATA)

    it('response status equal to 201', async  () => {
        expect((await response).status).to.equal(201)
    })
    
    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty(`message`)
    })

    console.log("Add One Category: ", (await response).body.data);
})

describe('Get Category List All', async () => {
    const response = request (baseUrl)
    .get('/categories?page=1&q=')
    .set('Authorization', `Bearer ${accessToken}`)

    it('response status equal to 200', async  () => {
        expect((await response).status).to.equal(200)
    })

    console.log("Data Category List All: ", (await response).body.data.categories   );
})