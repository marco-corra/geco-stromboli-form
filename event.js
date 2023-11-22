setTimeout(selectStation, 1000);
// Come fare per non mettere questo e per inserire questi addEventListener una volta che è stato letto il config.json ???

function selectStation() {
    // Commenta il console.log sotto una volta che tutto funziona
    console.log(document.querySelectorAll('.single-station-25'));

    document.querySelectorAll('.single-station-25').forEach(item => {
        item.addEventListener("click", function () {
            // Click su una stazione selezionata
            if (item.classList.contains("station-clicked")) {
                item.classList.remove("station-clicked");
                if (item.firstChild.title == "infrasonic") {
                    item.firstChild.setAttribute("src", "./img/infrasonic.svg");
                } else if (item.firstChild.title == "seismo-infrasonic") {
                    item.firstChild.setAttribute("src", "./img/seismo-infrasonic.svg");
                } else if (item.firstChild.title == "pressure") {
                    item.firstChild.setAttribute("src", "./img/pressure.svg");
                } else if (item.firstChild.title == "inclinometer") {
                    item.firstChild.setAttribute("src", "./img/inclinometer.svg");
                }
            }
            // Click su una stazione NON selezionata
            else {
                item.classList.add("station-clicked");
                if (item.firstChild.title == "infrasonic") {
                    item.firstChild.setAttribute("src", "./img/infrasonic-hover.svg");
                } else if (item.firstChild.title == "seismo-infrasonic") {
                    item.firstChild.setAttribute("src", "./img/seismo-infrasonic-hover.svg");
                } else if (item.firstChild.title == "pressure") {
                    item.firstChild.setAttribute("src", "./img/pressure-hover.svg");
                } else if (item.firstChild.title == "inclinometer") {
                    item.firstChild.setAttribute("src", "./img/inclinometer-hover.svg");
                }
            }
        });
    });

    document.querySelectorAll('.flex-channel').forEach(item => {
        item.lastChild.addEventListener("click", function () {
            if (item.classList.contains("flex-channel-checked")){
                item.classList.remove("flex-channel-checked");
            }
            else {
                item.classList.add("flex-channel-checked");
            }
        });
    });

};