const url = 'http://localhost:3000/ramens'
getRamen();
listenForSubmit();


function handleImageClick(oneRamen) {
  const imageToUpdate = document.querySelector("#ramen-detail img.detail-image");
  imageToUpdate.src = oneRamen.image;
  imageToUpdate.alt = oneRamen.name;

  const name = document.querySelector("#ramen-detail h2");
  name.textContent = oneRamen.name;

  const restaurant = document.querySelector("#ramen-detail h3");
  restaurant.textContent = oneRamen.restaurant;

  const rating = document.getElementById("rating-display");
  rating.textContent = oneRamen.rating;

  const comment = document.getElementById("comment-display");
  comment.textContent = oneRamen.comment;
}

function createImageEventListener(img, ramen) {
  img.addEventListener("click", () => handleImageClick(ramen));
}

function displayOneRamen(oneRamen) {
  const ramenMenu = document.getElementById("ramen-menu");
  const image = document.createElement("img");
  image.src = oneRamen.image;
  ramenMenu.append(image);
  createImageEventListener(image, oneRamen);
}

function displayAllRamen(allRamen) {
  allRamen.forEach(displayOneRamen);
}

function getRamen() {
  fetch(url)
    .then((response) => response.json())
    .then(displayAllRamen);
}

function handleSubmit(event) {
  event.preventDefault();
  const newRamen = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target["new-comment"].value,
  };

  displayOneRamen(newRamen);
}

function listenForSubmit() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", handleSubmit);
}