const { expect, assert } = require('chai')
const request = require('supertest')

const baseUrl = 'https://kasir-api.belajarqa.com';
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBhNWU2M2M1LTA3ZWItNGE2Mi1iZWYwLTBiMzA0ZTVkNTIyNCIsImNvbXBhbnlJZCI6IjQ4OGYxMWYwLTEyMzEtNGYzZC1hNTRiLTMzNTI1NzcwZjU3YiIsImlhdCI6MTY3NjE2MDY0Nn0.ZrXxuM5xFPdbAXo_zcUTGooQLepYCcShw6ELd1QPo1c"

describe('Chai Assert - Get User Detail', async() => {
    const response = request(baseUrl)
    .get('/users/6064f4de-f2fd-436c-b316-3c65fef5be10')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${accessToken}`)
    
    it('response user role equal to kasir', async () => {
        assert('Result Assert: ', (await response).body.data.user.role === 'kasir');
        console.log('Assert response user role equal to kasir: ', (await response).body.data.user);
    })

    it('response user status success', async () => {
        assert.isOk((await response).body.status === 'success');
        console.log('Assert response user status success: ', (await response).body.status);
    })
})