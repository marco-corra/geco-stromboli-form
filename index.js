fetch('simple-config.json')
    .then((response) => response.json())
    .then((json) => {
        createForm(json);
    })

function createForm(dati) {

    for (key in dati) {
        if (key == "channels") {
            let channels = dati[key];
            console.log(channels);
            for (key in channels) {
                let posizione = document.getElementById("formConstructor");
                let x = document.createElement("INPUT");
                x.setAttribute("type", "text");
                x.placeholder = channels[key].code;
                posizione.appendChild(x);
            }
        }
    }
}