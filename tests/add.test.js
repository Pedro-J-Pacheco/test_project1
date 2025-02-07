const add = require('../functions/add.js');
test ('Add 1+2 to equal 3', ()=>{
    expect(add(0,0)).toBe(0);
});

test ('Adds negative numbers', ()=>{
    expect(add(-1,-2)).toBe(-3);
});

test ('Adds negative numbers', ()=>{
    expect(add(-1,-2)).toBe(-3);
});