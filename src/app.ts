import { CreateHeaderListItems } from "./types";
import updateHeader from "./utils/UpdateHeader";

const headerBar = document.getElementById("header-bar") as HTMLElement;

const list: CreateHeaderListItems = [
    {
        id: 1,
        name: 'drag-drop',
        link: "#"
    },
    {
        id: 2,
        name: 'custom-task',
        link: "#"
    }
];

updateHeader(headerBar, list);
