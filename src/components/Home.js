import "../styles/main.scss";

export const Home = () => {

    const app = document.querySelector("#app");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    
    const imagesContainer = document.createElement("ul");
    imagesContainer.classList.add("image-container");

    const scrollToTopButton = document.createElement("a");
    scrollToTopButton.classList.add("scroll-to-top");
    scrollToTopButton.innerText = "↑";
    
    homeContainer.append(imagesContainer, scrollToTopButton);
    app.append(homeContainer);

    scrollToTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        const scrollContainer = document.querySelector(".image-container");
        scrollContainer.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

