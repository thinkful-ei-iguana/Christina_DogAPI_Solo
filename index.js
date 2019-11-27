



function getDogImage(numbInput) {
  // const numbInput = document.getElementById('numberOfDogs').val;
  console.log('Hello, I am here');
  fetch(`https://dog.ceo/api/breeds/image/random/${numbInput}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  console.log('Keep quiet!');
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
    console.log('Can you hear me?');
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});