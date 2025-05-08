import "/src/styles/main.scss";
import { Header } from "./src/components/Header";
import { Cards } from "./src/components/Cards";
import { fetchApi } from "./src/utils/fetchApi";
import { Home } from "./src/components/Home";
import { printImages } from "./src/utils/printImages";

Header();
Home();

document.addEventListener("DOMContentLoaded", () => {
    printImages()
})

