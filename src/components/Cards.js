import "../styles/main.scss";


export const Cards = (imageData) => {
    const cardContainer = document.createElement("li");
    cardContainer.classList.add("card-container");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = imageData.urls.small;

    const imageOwner = document.createElement("p");
    imageOwner.classList.add("image-owner");
    imageOwner.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const likes = document.createElement("p");
    likes.classList.add("likes");
    likes.textContent = `♥️ \n ${imageData.likes}`;
    likes.style.whiteSpace = "pre-line";

    const photosCount = document.createElement("p");
    photosCount.classList.add("photos-count");
    photosCount.textContent = `📷 \n ${imageData.user.total_promoted_photos}`;
    photosCount.style.whiteSpace = "pre-line";

    const visitButton = document.createElement("button");
    visitButton.classList.add("visit-button");
    visitButton.textContent = "Explore";

    cardContainer.append(image, imageOwner, likes, photosCount, visitButton);

    return cardContainer;

}