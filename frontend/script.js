import {rail_paths} from "./constants/rail_paths";

rails = document.getElementsByClassName('rails');

function send_paths() {
    var edges = [];
    for (let rail of rails) {
        if (rail.style.backgroundColor != "#FFFFFF") edges.push(rail_paths[rail.id]);
    }

    console.log(edges);
}