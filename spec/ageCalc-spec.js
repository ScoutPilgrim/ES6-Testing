import { FormAge } from './../src/ageCalc.js';

describe('FormAge', function(){

  it('Correctly gets the current Year', function(){
    var testFormAgeObj = new FormAge(24);
    expect(testFormAgeObj.currYear === 2019);
  });
});
