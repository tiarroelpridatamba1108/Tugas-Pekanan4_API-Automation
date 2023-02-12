const { expect } = require('chai')
const request = require('supertest')
const data = require('../data/dummyData');

const baseUrl = 'https://kasir-api.belajarqa.com';
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBhNWU2M2M1LTA3ZWItNGE2Mi1iZWYwLTBiMzA0ZTVkNTIyNCIsImNvbXBhbnlJZCI6IjQ4OGYxMWYwLTEyMzEtNGYzZC1hNTRiLTMzNTI1NzcwZjU3YiIsImlhdCI6MTY3NjE2MDY0Nn0.ZrXxuM5xFPdbAXo_zcUTGooQLepYCcShw6ELd1QPo1c"

describe('Post User', async () => {
    const response = request (baseUrl)
    .post('/users')
    .set('Authorization', `Bearer ${accessToken}`)
    .send(data.CREATE_USERS_DATA)

    it('response status equal to 201', async  () => {
        expect((await response).status).to.equal(201)
    })
    
    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty(`message`)
    })

    console.log("Add One User: ", (await response).body.data);
})

describe('Update User', async () => {
    const response = request (baseUrl)
    .put('/users/6064f4de-f2fd-436c-b316-3c65fef5be10')
    .send(data.UPDATE_USERS_DATA)
    .set('Authorization', `Bearer ${accessToken}`)

    it('response status equal to 200', async  () => {
        expect((await response).status).to.equal(200)
    })

    console.log("Update Data User: ", (await response).body.data);
})

describe('Get User List All', async () => {
    const response = request (baseUrl)
    .get('/users?q=&p=1')
    .set('Authorization', `Bearer ${accessToken}`)

    it('response status equal to 200', async  () => {
        expect((await response).status).to.equal(200)
    })

    console.log("Data User All: ", (await response).body.data.users);
})

describe('Get User Detail', async() => {
    const response = request(baseUrl)
    .get('/users/6064f4de-f2fd-436c-b316-3c65fef5be10')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${accessToken}`)
    
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body returns a string with user name', async () => { 
        expect((await response).body.data.user.name).to.be.a('string');
    })

    it('response body to have property', async () => {
        expect((await response).body.data.user).to.haveOwnProperty('id')
        expect((await response).body.data.user).to.haveOwnProperty('name')
        expect((await response).body.data.user).to.haveOwnProperty('email')
        expect((await response).body.data.user).to.haveOwnProperty('role')
    })

    console.log("User Data Detail By Id: ", (await response).body.data);
})