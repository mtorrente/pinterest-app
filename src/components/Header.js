import "../styles/main.scss";
import { menuNavLinks, navLinks } from "../data/navLinks";
import { NavLink, MenuNavLink } from "./NavLink";
import { fetchApi } from "../utils/fetchApi";
import { printImages } from "../utils/printImages";

export const Header = () => {
    const header = document.createElement("header");
    const app = document.querySelector("#app");

    const logo = document.createElement("img");
    logo.src = "/src/assets/pinterest-logo.png";
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    
    navLinks.forEach((navLink) => ul.append(NavLink(navLink)));

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Search";

    const searchIcon = document.createElement("img");
    searchIcon.src = "/src/assets/search.png";
    searchIcon.alt = "Search";
    searchIcon.classList.add("search-icon");

    inputWrapper.append(searchIcon);
    inputWrapper.append(input);
    
    const bellIcon = document.createElement("i");
    bellIcon.className = "fa-solid fa-bell bell-icon";

    const chatIcon = document.createElement("i");
    chatIcon.className = "fa-solid fa-comment chat-icon";

    const profileIcon = document.createElement("button");
    profileIcon.className = "profile-button";
    profileIcon.innerText = "M";

    // const menuIcon = document.createElement("img");
    // menuIcon.src = "/src/assets/3-lines-menu.webp";
    // menuIcon.alt = "Menu";
    // menuIcon.classList.add("menu-icon");
    const menuIcon = document.createElement("div");
    menuIcon.classList.add("menu-icon");
    const menuLine1 = document.createElement("span");
    const menuLine2 = document.createElement("span");
    const menuLine3 = document.createElement("span");

    menuIcon.append(menuLine1, menuLine2, menuLine3);

    const screenMenu = document.createElement("div");
    screenMenu.classList.add("screen-menu");
    const screenMenuUl = document.createElement("ul");
    screenMenuUl.classList.add("menu-ul");
    
    menuNavLinks.forEach((menuNavLink) => screenMenuUl.append(MenuNavLink(menuNavLink)));
    screenMenu.append(screenMenuUl);

    header.append(logo, nav, inputWrapper, bellIcon, chatIcon, profileIcon, menuIcon, screenMenu);
    nav.append(ul);
    app.append(header);


    input.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            await printImages(e.target.value);
            e.target.value = "";
            
            
        }
    })

    logo.addEventListener("click", async () => {
        printImages();
    })

    const homeButton = document.querySelector(".navlink1");

    homeButton.addEventListener("click", async () => {
        printImages();
    })

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        screenMenu.classList.toggle("active");
    })

    // menuIcon.addEventListener("click", () => {
    //     const nav = document.querySelector("nav");
    //     nav.classList.toggle("hidden");
    // })

}