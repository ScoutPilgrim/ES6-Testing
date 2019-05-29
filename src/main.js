import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormAge } from './ageCalc.js';
import $ from 'jquery';

let earthText = "Your age on Earth: ";
let mercuryText = "Your age on Mercury: ";
let venusText = "Your age on Venus ";
let marsText = "Your age on Mars: ";
let jupiterText = "Your age on Jupiter: ";

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
  });
});
