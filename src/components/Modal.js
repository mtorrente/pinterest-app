import "../styles/main.scss";

export const Modal = (url) => {

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const button = document.createElement("button");
    button.textContent = "Close";
    button.addEventListener("click", () => lightbox.remove())
    
    const img = document.createElement("img");
    img.classList.add("modal-image");
    img.src = url;
    lightbox.append(img, button);
};