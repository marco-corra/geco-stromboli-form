fetch('config.json')
    .then((response) => response.json())
    .then((json) => {
        createForm(json);
    })

function createForm(dati) {

    for (key in dati) {

        if (key == "stations") {

            let stations = dati[key];

            for (key in stations) {

                // Create a row for each station
                let stationPosition = document.getElementById("formConstructor");
                let div = document.createElement("div");
                div.classList.add("single-row");
                stationPosition.appendChild(div);

                // Create left column of the row
                let divLeft = document.createElement("div");
                divLeft.classList.add("left-25");
                div.appendChild(divLeft);

                // Create right column of the row
                let divRight = document.createElement("div");
                divRight.classList.add("right-75");
                div.appendChild(divRight);

                // Create Station Element of the Form
                let x = document.createElement("a");
                let createAText = document.createTextNode(stations[key].name);
                x.appendChild(createAText);
                divLeft.appendChild(x);

                let channelsContainer = document.createElement("div");
                    channelsContainer.classList.add("flex-container-channels");
                    divRight.appendChild(channelsContainer);

                // Create Channels Element of the Forms
                let channels = stations[key].channels;

                for (key in channels) {
                    

                    let item = document.createElement("div");
                    item.classList.add("flex-channel");
                    channelsContainer.appendChild(item);

                    let y = document.createElement("input");
                    y.setAttribute("type", "checkbox");
                    y.setAttribute("value", channels[key].code);
                    y.setAttribute("name", channels[key].code);
                    y.setAttribute("for", channels[key].code);
                    y.setAttribute("id", channels[key].code)
                    item.appendChild(y);
                    let label = document.createElement("label");
                    label.setAttribute("for", channels[key].code);
                    let createText = document.createTextNode(channels[key].name);
                    label.appendChild(createText);
                    item.appendChild(label);
                }
            }
        }
    }
}