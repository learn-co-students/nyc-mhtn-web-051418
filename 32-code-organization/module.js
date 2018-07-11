function generateBar() {
    let servedEspresso = 0
    let servedCapuccino = 0

    const prepareEspresso = () => { coffee: "Espresso" }
    const prepareCapuccino = () => { coffee: "Capuccino" }

    const publicApi = {
        espresso: () => { servedEspresso++; return prepareEspresso()},
        capuccino: () => { servedCapuccino++; return prepareCapuccino()},
        sales: () => (servedEspresso * 1) + (servedCapuccino*2)
    }

    return publicApi
}

// var s = (function() {
//     class Single {

//     }

//     return new Single
// })()