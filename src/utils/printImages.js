import { Cards } from "../components/Cards";
import { fetchApi } from "./fetchApi";


export const printImages = async (query) => {
    const images = document.querySelector(".image-container");

    if(images) {
        images.innerHTML = "";
    }

    try {

        const result = await fetchApi(query);
        result.forEach(image => {
            const newCard = Cards(image);

            images.appendChild(newCard);
        });
        
    } catch (error) {
        console.log(error);
        
        
    }
}