import "../styles/main.scss";
import { printImages } from "../utils/printImages";

export const Home = () => {

    const app = document.querySelector("#app");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    
    const imagesContainer = document.createElement("ul");
    imagesContainer.classList.add("image-container");
    
    homeContainer.append(imagesContainer);
    app.append(homeContainer);

    

}

