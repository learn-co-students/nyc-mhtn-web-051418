document.addEventListener('DOMContentLoaded',function(event) {
    container = document.getElementById("container");

    // get all the messages
    // describe request
    // verb: GET
    // url: 'http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages'
    // response: ?????????
    const url = 'http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages'

    function displayMessages( messagesObjs ) {
        const messagesHTMLArray = messagesObjs.map( displayMessage );
        container.innerHTML = messagesHTMLArray.join('')
    }

    function displayMessage(messageObj) {
        //debugger
        return `<li> ${messageObj.real_name} says ${messageObj.message} </li>`;
    }

    fetch(url).then(response => response.json()).then( displayMessages )

    // iterate over message and display on screen
})