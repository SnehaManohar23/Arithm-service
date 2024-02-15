const { add }=require("../arithmetica")

test('2+3 is equal to 5',()=>{
    expect(add(2,3)).toBe(5);
});

test('50+30 is equal to 80 ',()=>{
    expect(add(50,30)).toBe(80);
});

test('60+100 is equal to 160 ',()=>{
    expect(add(60,100)).toBe(160);
});