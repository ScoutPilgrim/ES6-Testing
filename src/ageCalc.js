export class FormAge
{
  constructor(birthYear)
  {
    this.mercuryConvert = .24;
    this.venusConvert = .62;
    this.marsConvert = 1.88;
    this.jupiterConvert = 11.86;
    this.earthLifeExpectancy = 80;
    this.currYear = new Date().getFullYear();
    this.age = this.YearDifference(birthYear);
    this.mercuryYears = this.AgeToMercury();
    this.venusYears = this.AgeToVenus();
    this.marsYears = this.AgeToMars();
    this.jupiterYears = this.AgeToJupiter();
    this.mercuryLifeExpectancy = this.GenerateMercuryLife();
    this.venusLifeExpectancy = this.GenerateVenusLife();
    this.marsLifeExpectancy = this.GenerateMarsLife();
    this.jupiterLifeExpectancy = this.GenerateJupiterLife();
    this.earthExceed = this.ExceedLife("EAR");
    this.mercuryExceed = this.ExceedLife("MER");
    this.venusExceed = this.ExceedLife("VEN");
    this.marsExceed = this.ExceedLife("MAR");
    this.jupiterExceed = this.ExceedLife("JUP");
  }
}

FormAge.prototype.YearDifference = function YearDifference(startDate){
  var differenceToAge = this.currYear - startDate;
  return differenceToAge;
}

FormAge.prototype.AgeToMercury = function AgeToMercury(){
  var localMercury = this.age * this.mercuryConvert;
  return localMercury;
}

FormAge.prototype.AgeToVenus = function AgeToVenus(){
  var localVenus = this.age * this.venusConvert;
  return localVenus;
}

FormAge.prototype.AgeToMars = function AgeToMars(){
  var localMars = this.age * this.marsConvert;
  return localMars;
}

FormAge.prototype.AgeToJupiter = function AgeToJupiter(){
  var localJupiter = this.age * this.jupiterConvert;
  return localJupiter;
}

FormAge.prototype.GenerateMercuryLife = function GenerateMercuryLife(){
  var merLife = this.earthLifeExpectancy * this.mercuryConvert;
  return merLife;
}

FormAge.prototype.GenerateVenusLife = function GenerateVenusLife(){
  var venLife = this.earthLifeExpectancy * this.venusConvert;
  return venLife;
}

FormAge.prototype.GenerateMarsLife = function GenerateMarsLife(){
  var marsLife = this.earthLifeExpectancy * this.marsConvert;
  return marsLife;
}

FormAge.prototype.GenerateJupiterLife = function GenerateJupiterLife(){
  var jupiterLife = this.earthLifeExpectancy * this.jupiterConvert;
  return jupiterLife;
}

FormAge.prototype.ExceedLife = function ExceedLife(myCase){
  switch(myCase){
    case "EAR":
      if(this.age > this.earthLifeExpectancy){
        return this.age - this.earthLifeExpectancy;
      }
      return 0;
    case "MER":
      if(this.mercuryYears > this.mercuryLifeExpectancy){
        return this.mercuryYears - this.mercuryLifeExpectancy;
      }
      return 0;
    case "VEN":
      if(this.venusYears > this.venusLifeExpectancy){
        return this.venusYears - this.venusLifeExpectancy;
      }
      return 0;
    case "MAR":
      if(this.marsYears > this.marsLifeExpectancy){
        return this.marsYears - this.marsLifeExpectancy;
      }
      return 0;
    case "JUP":
      if(this.jupiterYears > this.jupiterLifeExpectancy){
        return this.jupiterYears - this.jupiterLifeExpectancy;
      }
      return 0;
  }
  return 0;
}
