function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
function Address(street, city, state) {
  this.streetName = street;
  this.cityName = city;
  this.stateName = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function() {
  return this.streetName + ", " + this.cityName + ", " + this.stateName;
}

$(document).ready(function() {
  // $("#button").click(function(event) {
    // event.preventDefault();
  //   $(".addition").append(".address");
  // });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();
  var inputtedStreet = $("input#new-street").val();
  var inputtedCity = $("input#new-city").val();
  var inputtedState = $("input#new-state").val();

  var newContact = new Contact(inputtedFirstName, inputtedLastName);

  var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

$(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.fullName());
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".address-name").text(newAddress.fullAddress())
});
  // $("input#new-first-name").val("");
  // $("input#new-last-name").val("");
});
});
