test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(dollars).toBe(expected); 
})

test("10 dollars have to give me 1462.6168224299065 YNS", function() {
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen(10);
     expect(Yen).toBe(1462.6168224299065);
})  

test("156.5 yens have to give me as result 0.87GBP", function() {
    const { fromYenToPound } = require('./app.js');
    const Pound = fromYenToPound(156.5);
     expect(Pound).toBe(0.87);
})  