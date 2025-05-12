import "../styles/main.scss";
import { Modal } from "./Modal";

export const Cards = (imageData) => {
    const cardContainer = document.createElement("li");
    cardContainer.classList.add("card-container");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = imageData.urls.small;

    const imageOwner = document.createElement("p");
    imageOwner.classList.add("image-owner");
    imageOwner.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const date = document.createElement("p");
    date.classList.add("date");
    const dateAndTime = `${imageData.user.updated_at}`;
    const dateOnly = dateAndTime.split("T")[0];
    date.textContent = dateOnly;

    const likes = document.createElement("p");
    likes.classList.add("likes");
    likes.innerHTML = `<img src="/src/assets/heart.png" alt="heart icon" style="width:17px"> ${imageData.likes}`;
    likes.style.whiteSpace = "pre-line";

    const photosCount = document.createElement("p");
    photosCount.classList.add("photos-count");
    photosCount.innerHTML = `<img src="/src/assets/photo-camera.png" alt="camera icon" style="width:17px"> ${imageData.user.total_photos}`;
    photosCount.style.whiteSpace = "pre-line";

    const visitButton = document.createElement("button");
    visitButton.classList.add("visit-button");
    visitButton.textContent = "Explore";

    cardContainer.append(image, imageOwner, date, likes, photosCount, visitButton);

    // visitButton.addEventListener("click", () => {
    //     const modalContainer = document.querySelector(".modal-container");
    //     const modalImage = document.querySelector(".modal-image");
    //     modalContainer.classList.remove("hidden");
    //     modalImage.src = imageData.urls.small;
    // })

    visitButton.addEventListener("click", (e) => {
        Modal(imageData.urls.regular);
    })

    

    return cardContainer;

}