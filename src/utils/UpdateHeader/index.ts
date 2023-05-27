import { CreateHeaderListItems, ListItem } from "../../types";

function createListElement(title: string, link: string): HTMLLIElement {
    const newElement = document.createElement("li");
    const newLinkElement = document.createElement("a");

    newLinkElement.setAttribute("href", link);

    const text = document.createTextNode(title);

    newLinkElement.appendChild(text);

    newElement.appendChild(newLinkElement);
    
    return newElement;
}

function createULElement(): HTMLUListElement {
    const newElement = document.createElement("ul");
    
    return newElement;
}

function updateHeader(element: HTMLElement, list: CreateHeaderListItems) {
    const headerUL = createULElement();

    list.forEach((val: ListItem) => {
        const child = createListElement(val.name, val.link);

        headerUL.appendChild(child);
    });

    element.appendChild(headerUL);
}

export default updateHeader;
