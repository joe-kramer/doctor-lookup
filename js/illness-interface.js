var Illness = require('./../js/illness.js').illnessModule;

$(document).ready(function() {
  $("#illness-form").submit(function(event) {
    event.preventDefault();
    var illness = $("#illness").val();
    var newIllness = new Illness(illness);
    newIllness.getDoctors(illness);
  });
});
