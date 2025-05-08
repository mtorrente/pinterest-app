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