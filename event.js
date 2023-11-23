setTimeout(setFormEvent, 1000);
// Come fare per non mettere questo e per inserire questi addEventListener una volta che è stato letto il config.json ???

function setFormEvent() {
    // Commenta il console.log sotto una volta che tutto funziona
    console.log(document.querySelectorAll('.single-station-25'));

    // Eventi sul click del single Station item
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

                item.parentElement.lastChild.firstChild.querySelectorAll('.flex-channel').forEach(item => {
                    item.classList.remove("flex-channel-checked");
                    item.lastChild.checked = false;
                });
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

                item.parentElement.lastChild.firstChild.querySelectorAll('.flex-channel').forEach(item => {
                    item.classList.add("flex-channel-checked");
                    item.lastChild.checked = true;
                });
            }
        });
    });

    // Eventi al click sui single Channel item
    document.querySelectorAll('.flex-channel').forEach(item => {
        item.lastChild.addEventListener("click", function () {
            if (item.classList.contains("flex-channel-checked")) {
                // Il channel viene DESELEZIONATO
                item.classList.remove("flex-channel-checked");
                let focusStation = false;
                item.parentElement.querySelectorAll('.flex-channel').forEach(item => {
                    if (item.lastChild.checked == true) {
                        focusStation = true;
                    }
                });
                if (focusStation == false) {
                    item.parentElement.parentElement.parentElement.querySelectorAll('.single-station-25').forEach(item => {
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
                    });
                }
            }

            else {
                // Evidenzia il Channel SELEZIONATO
                item.classList.add("flex-channel-checked");

                // Evidenzia la Stazione del Channel Selezionato
                item.parentElement.parentElement.parentElement.querySelectorAll('.single-station-25').forEach(item => {
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
                });
            }
        });
    });

    // Setta l'attributo MAX per il Time End
    const timeEnd = document.getElementById("time-end");
    console.log(timeEnd);

    // Eventi al Click sui Format
    const inputFormatRadio = document.querySelectorAll('.input-format-radio');
    inputFormatRadio.forEach(item => {
        item.addEventListener("click", function () {
            // console.log(item.parentElement.childNodes[1].checked);

            inputFormatRadio.forEach(item => {
                if (item.parentElement.classList.contains("format-radio-clicked")) {
                    item.parentElement.classList.remove("format-radio-clicked");
                    if (item.firstChild.title == "mat") {
                        item.firstChild.src = "./img/mat.svg";
                    }
                    else if (item.firstChild.title == "mseed") {
                        item.firstChild.src = "./img/mseed.svg"
                    }
                }
            });
            item.parentElement.classList.add("format-radio-clicked");
            if (item.firstChild.title == "mat") {
                item.firstChild.src = "./img/inclinometer.svg";
            } else if (item.firstChild.title == "mseed") {
                item.firstChild.src = "./img/inclinometer.svg";
            }
        });
    });

    // Eventi al Click sugli Elab
    const inputElabRadio = document.querySelectorAll('.input-elab-radio');
    inputElabRadio.forEach(item => {
        item.addEventListener("click", function () {
            // console.log(item.parentElement.childNodes[1].checked);

            inputElabRadio.forEach(item => {
                if (item.parentElement.classList.contains("elab-radio-clicked")) {
                    item.parentElement.classList.remove("elab-radio-clicked");
                }
            });
            item.parentElement.classList.add("elab-radio-clicked");
        });
    });

    // Eventi al Mouse Over / Mouse Out del pulsante display
    document.querySelector(".display-button").addEventListener("mouseover", function () {
        document.querySelector(".display-button").firstChild.src = "./img/inclinometer.svg";
    });
    document.querySelector(".display-button").addEventListener("mouseout", function () {
        document.querySelector(".display-button").firstChild.src = "./img/display.svg";
    });
};