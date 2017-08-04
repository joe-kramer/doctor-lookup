var apiKey = require('./../.env').apiKey;

function Illness(illness) {
}

Illness.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      $.each(result.data, function(index) {
        $("#result").append('<li><h4>' + result.data[index].profile.first_name + '</h4><p>' + result.data[index].profile.bio + '</p><img src="' + result.data[index].profile.image_url + '"></li>');
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.illnessModule = Illness;
