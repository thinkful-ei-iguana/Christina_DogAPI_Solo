



function getDogImage(numbInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numbInput}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let arrayOfImage = responseJson.message;
  let displayDogs = getImages(arrayOfImage);
  $('.results-container').html(displayDogs);
  $('#imagesReturned').removeClass('hidden');

}

function getImages(arrayOfImage) {
  let valueToReturn = '';
  for(let i = 0; i < arrayOfImage.length; i++){
    valueToReturn += `<img src="${arrayOfImage[i]}" class="results-img">`;
  }
  return valueToReturn;
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numbInput = $('.quantity').val();
    getDogImage(numbInput);
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});