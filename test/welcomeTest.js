const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    //Assert tulisan sesuai ekspektasi
    it('app should return welcome message', function(){
        assert.equal(app(), "Welcome to QA Automation course at Sanbercode")
    })

    //Assert tipe data
    it('app data type is string', function(){
        let response = app();
        assert.typeOf(response,'string')
    })
})