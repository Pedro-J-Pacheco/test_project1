const {getUserFromDatabase} = require ('../functions7getUser.js');
//mocking the entire database module 
jest.mock('../src/database');
//test suite
test('fecthing user from database', ()=>{
    getUserFromDatabase.mockReturnValue({
        id:1, name:'Pedro Pacheco'
    });
    const user =getUserFromDatabase(1);

    expect(user.name.tobe('Pedro Pacheco'))
});