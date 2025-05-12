import "../styles/main.scss";

export const NavLink = ({path, text, id}) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.classList.add(`navlink${id}`);
    button.href = path;
    button.textContent = text;

    li.append(button);
    return li;
}

export const MenuNavLink = ({path, text, id}) => {
    const li = document.createElement("li");

    li.classList.add(`menu-navlink${id}`);
    li.href = path;
    li.textContent = text;



    return li;
}

