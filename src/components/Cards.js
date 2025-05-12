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
    const dateOnly = new Date(dateAndTime.split("T")[0]);
    const day = dateOnly.getDate();
    const month = dateOnly.getMonth() + 1;
    const year = dateOnly.getFullYear();
    date.textContent = `${day}/${month}/${year}`;

    const downloadIcon = document.createElement("img");
    downloadIcon.classList.add("download-icon");
    downloadIcon.src = "/src/assets/download.png";
    downloadIcon.alt = "download icon";
    downloadIcon.style.width = "25px";

    const profilePicture = document.createElement("img");
    profilePicture.classList.add("profile-picture");
    profilePicture.src = imageData.user.profile_image.medium;
    profilePicture.alt = "profile picture";
    profilePicture.style.width = "70px";

    

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

    cardContainer.append(image, imageOwner, date, downloadIcon, profilePicture, likes, photosCount, visitButton);

    visitButton.addEventListener("click", (e) => {
        Modal(imageData.urls.regular);
    })

    downloadIcon.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = imageData.urls.regular;
        document.body.appendChild(link);
        window.open(link.href, "_blank");
        document.body.removeChild(link);
    })

    return cardContainer;

}