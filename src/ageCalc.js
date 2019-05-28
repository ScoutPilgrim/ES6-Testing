export class FormAge
{
  constructor(birthYear)
  {
    this.secondsPerYear = 31557600;
    this.mercuryConvert = .24;
    this.venusConvert = .62;
    this.marsConvert = 1.88;
    this.jupiterConvert = 11.86;
    this.lifeExpectancy = 80;
    this.currYear = new Date().getYear();
    this.age = this.YearDifference(birthYear);
    this.yearSeconds = this.YearDifferenceInSeconds(birthYear);
    this.ageSeconds = this.AgeToSeconds();
    this.mercuryYears = this.AgeToMercury();
    this.venusYears = this.AgeToVenus();
    this.marsYears = this.AgeToMars();
    this.jupiterYears = this.AgeToJupiter();
  }
}

FormAge.prototype.AgeToSeconds = function AgeToSeconds(){
  var ageToSeconds = this.age * this.secondsPerYear;
  return ageToSeconds;
}

FormAge.prototype.YearDifference = function YearDifference(startDate){
  var differenceToAge = this.currYear - startDate;
  return differenceToAge;
}

FormAge.prototype.YearDifferenceInSeconds = function YearDifferenceInSeconds(startDate){
  var yearDifferenceInSeconds = (this.currYear - startDate) * this.secondsPerYear;
  return yearDifferenceInSeconds;
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
