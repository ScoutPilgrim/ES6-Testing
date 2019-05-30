import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormAge } from './ageCalc.js';
import $ from 'jquery';

let earthText = "Your age on Earth: ";
let mercuryText = "Your age on Mercury: ";
let venusText = "Your age on Venus ";
let marsText = "Your age on Mars: ";
let jupiterText = "Your age on Jupiter: ";
const earthOver = "You are older than earth's life expectancy by ";
const mercuryOver = "You are older than mercury's life expectancy by ";
const venusOver = "You are older than venus's life expectancy by ";
const marsOver = "You are older than mars's life expectancy by ";
const jupiterOver = "You are older than jupiter's life expectancy by ";

$(document).ready(function(){
  $("#myForm").submit(function(event){
    event.preventDefault();
    var startYear = $("#startYear").val();
    console.log("User entered "+startYear+" as their year of birth");
    var formBuildObj = new FormAge(parseInt(startYear));
    $("#earthAge").text(earthText + formBuildObj.age);
    $("#mercuryAge").text(mercuryText + formBuildObj.mercuryYears);
    $("#venusAge").text(venusText + formBuildObj.venusYears);
    $("#marsAge").text(marsText + formBuildObj.marsYears);
    $("#jupiterAge").text(jupiterText + formBuildObj.jupiterYears);
    checkIfOver(formBuildObj);
  });
  //Helper functions
  function checkIfOver(myObj){
    if(myObj.age > myObj.earthLifeExpectancy){
      $("#earthOver").text(earthOver + myObj.earthExceed);
      $("#mercuryOver").text(mercuryOver + myObj.mercuryExceed);
      $("#venusOver").text(venusOver + myObj.venusExceed);
      $("#marsOver").text(marsOver + myObj.marsExceed);
      $("#jupiterOver").text(jupiterOver + myObj.jupiterExceed);
    }
  }
});
