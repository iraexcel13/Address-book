function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(type, street, city, state) {
  this.typeAddress = type;
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function() {
  return this.typeAddress + ": " + this.street + ", " + this.city + " " + this.state;
}
function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("#address-type").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
  $(".new-address").not();
}

$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
    '<h5>Address type</h5>' +
    '<select class="form-control" id="address-type">' +
      '<option>Work</option>' +
      '<option>Home</option>' +
      '<option>Other</option>' +
    '</select>' +
    '<div class="form-group">' +
    '<label for="new-street">Street</label>' +
    '<input type="text" class="form-control new-street">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-state">State</label>' +
    '<input type="text" class="form-control new-state">' +
    '</div>' +
    '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    // var inputtedStreet = $("input#new-street").val();
    // var inputtedCity = $("input#new-city").val();
    // var inputtedState = $("input#new-state").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);


    $(".new-address").each(function() {
      var inputtedType = $(this).find('#address-type').val();
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress);
    })

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
    resetFields();
  });
});
