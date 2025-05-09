import "../styles/main.scss";

export const Modal = () => {
    // const home = document.querySelector(".home-container");

    // const modalComtainer = document.createElement("div");
    // modalComtainer.classList.add("modal-container", "hidden");
    
    // const modalContent = document.createElement("div");
    // modalContent.classList.add("modal-content");

    // const modalImage = document.createElement("img");
    // modalImage.classList.add("modal-image");
    // modalImage.src = "";
    // modalImage.alt = "Image";

    // const closeButton = document.createElement("button");
    // closeButton.classList.add("close-button");
    // closeButton.innerText = "X";
    
    // modalContent.append(modalImage, closeButton);
    // modalComtainer.append(modalContent);
    // home.append(modalComtainer);

    // closeButton.addEventListener("click", () => {
    //     modalComtainer.classList.toggle("hidden");
    // });

    // return {modalComtainer, modalImage};

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
    const images = document.querySelector(".visit-button");
    images.forEach((image) => {
        image.addEventListener("click", e => {
            lightbox.classList.add("active");
        })
    })

};