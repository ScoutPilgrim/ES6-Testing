import { FormAge } from './../src/ageCalc.js';

//Const Variables. The Years used for testing.
const testYear = 1995;
const testYear_Old = 1920;

//Tests
describe('FormAge', function(){

  it('Correctly gets the current Year', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.currYear === 2019);
  });
  it('Correctly finds the users age based on their entered birth year', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.age === 24);
  });
  it('Correctly converts years into Mercury Years', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.mercuryYears === 5.76);
  });
  it('Correctly converts into Venus Years', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.venusYears === 14.88);
  });
  it('Correctly converts into Mars Years', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.marsYears === 45.12);
  });
  it('Correctly converts into Jupiter Years', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.jupiterYears === 284.64);
  });
  it('Correctly generates Life Expectancy for mercury', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.mercuryLifeExpectancy === 19.2);
  });
  it('Correctly generates Life Expectancy for venus', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.venusLifeExpectancy === 49.6);
  });
  it('Correctly generates Life Expectancy for mars', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.marsLifeExpectancy === 150.4);
  });
  it('Correctly generates Life Expectancy for jupiter', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.jupiterLifeExpectancy === 948.8);
  });
  it('Correctly generates a 0 if too young for earth Life Expectancy', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.earthExceed === 0);
  });
  it('Correctly generates life over Expectancy for earth if old enough', function(){
    var testFormAgeObj = new FormAge(testYear_Old);
    expect(testFormAgeObj.earthExceed === 19);
  });
  it('Correctly generates a 0 if too young for mercury Life Expectancy', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.mercuryExceed === 0);
  });
  it('Correctly generates life over Expectancy for mercury if old enough', function(){
    var testFormAgeObj = new FormAge(testYear_Old);
    expect(testFormAgeObj.mercuryExceed === 4.56);
  });
  it('Correctly generates a 0 if too young for venus Life Expectancy', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.venusExceed === 0);
  });
  it('Correctly generates life over Expectancy for venus if old enough', function(){
    var testFormAgeObj = new FormAge(testYear_Old);
    expect(testFormAgeObj.venusExceed === 11.78);
  });
  it('Correctly generates a 0 if too young for mars Life Expectancy', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.marsExceed === 0);
  });
  it('Correctly generates life over Expectancy for mars if old enough', function(){
    var testFormAgeObj = new FormAge(testYear_Old);
    expect(testFormAgeObj.marsExceed === 35.72);
  });
  it('Correctly generates a 0 if too young for jupiter Life Expectancy', function(){
    var testFormAgeObj = new FormAge(testYear);
    expect(testFormAgeObj.jupiterExceed === 0);
  });
  it('Correctly generates life over Expectancy for jupiter if old enough', function(){
    var testFormAgeObj = new FormAge(testYear_Old);
    expect(testFormAgeObj.jupiterExceed === 225.34);
  });
});
