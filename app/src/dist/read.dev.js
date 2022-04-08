"use strict";

var getData = function getData() {
  fetch('sample.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function (response) {
    console.log(response);
    return response.json();
  }).then(function (myJson) {
    console.log(myJson);
  });
};

useEffect(function () {
  getData();
}, []);