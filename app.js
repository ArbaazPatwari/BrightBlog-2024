document.addEventListener("DOMContentLoaded", () => {
  // Get every image tag and save it as a variable
  const images = document.querySelectorAll("img");

  // For loop to get images of dogs from the Dog API website
  for(const image of images){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      image.src = data.message
      image.width = 170;
      image.height = 265;
    })
  }

})