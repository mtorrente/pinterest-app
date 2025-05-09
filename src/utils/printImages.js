import { Cards } from "../components/Cards";
import { fetchApi, fetchApiError } from "./fetchApi";


export const printImages = async (query) => {
    const images = document.querySelector(".image-container");

    if(images) {
        images.innerHTML = "";
    }

    try {

        const result = await fetchApi(query);
        const errorResult = await fetchApiError();

        if (!result || result.length === 0) {
            const noResults = document.createElement("div");
            const noResultsText = document.createElement("p");
            const noResultsImage = document.createElement("img");
            noResultsText.textContent = "Oops! That's sad... Try a different search!";
            noResultsImage.src = errorResult[0]?.urls?.small;
            noResults.classList.add("no-results");
            noResults.appendChild(noResultsText, noResultsImage);
            noResults.appendChild(noResultsImage);
            images.appendChild(noResults);
            return;
        }
        result.forEach(image => {
            const newCard = Cards(image);

            images.appendChild(newCard);
        });
        
    } catch (error) {
        console.log(error);
        
        
    }
}