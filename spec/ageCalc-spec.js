import { FormAge } from './../src/ageCalc.js';

describe('FormAge', function(){

  it('Correctly gets the current Year', function(){
    var testFormAgeObj = new FormAge(1995);
    expect(testFormAgeObj.currYear === 2019);
  });
  it('Correctly finds the users age based on their entered birth year', function(){
    var testFormAgeObj = new FormAge(1995);
    expect(testFormAgeObj.age === 24);
  });
  it('Correctly converts years into Mercury Years', function(){
    var testFormAgeObj = new FormAge(1995);
    expect(testFormAgeObj.mercuryYears === 5.76);
  });
  it('Correctly converts into Venus Years', function(){
    var testFormAgeObj = new FormAge(1995);
    expect(testFormAgeObj.venusYears === 14.88);
  });
  it('Correctly converts into Mars Years', function(){
    var testFormAgeObj = new FormAge(1995);
    expect(testFormAgeObj.marsYears === 45.12);
  });
  it('Correctly converts into Jupiter Years', function(){
    var testFormAgeObj = new FormAge(1995);
    expect(testFormAgeObj.jupiterYears === 284.64);
  });
});
