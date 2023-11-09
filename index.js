fetch('config.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        function_ciclo(json);
    })

function function_ciclo(dati){
    console.log(dati);
}

// let user = '{"name": "Jason", "age": 25, "friends": [0,1,2]}';
//
// user = JSON.parse(user);
//
// console.log(user.name);
// console.log(user.age);
// console.log(user.friends);