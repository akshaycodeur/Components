document.addEventListener("DOMContentLoaded", function() {
    var addressInput = document.getElementById("address-input");
    addressInput.addEventListener("input", function() {
      var inputValue = addressInput.value;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.addresslookup.com/search?query=" + inputValue, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          var addresses = JSON.parse(xhr.responseText);
          // Do something with the addresses, for example populate a list
        }
      };
      xhr.send();
    });
  });
  