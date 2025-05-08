import "../styles/main.scss";


export const Cards = (imageData) => {
    const cardContainer = document.createElement("li");
    cardContainer.classList.add("card-container");

    const image = document.createElement("img");
    image.src = imageData.urls.small;

    const imageOwner = document.createElement("p");
    imageOwner.classList.add("image-owner");
    imageOwner.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const likes = document.createElement("p");
    likes.classList.add("likes");
    likes.textContent = `${imageData.likes} ♥️ `;

    cardContainer.append(image, imageOwner, likes);

    return cardContainer;

}