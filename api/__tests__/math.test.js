function division(a, b){
    return a/b;
}

test('10 / 2 equal 5', ()=>{
    expect(division(10, 2)).toBe(5)
})

test('15 / 3 equal 5', ()=>{
    expect(division(15, 3)).toBe(5)
})