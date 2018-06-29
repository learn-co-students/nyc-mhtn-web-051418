// Find reference to container
const container = document.getElementById("container");
console.log(container)

// Create a header
const header = document.createElement('H1')
console.log(header);
header.innerText = "flatStaGram"

// Add header to container
container.appendChild(header);


// container.addEventListener("click", function (event) {
//     if (event.target.dataset.type) {
//         event.target.remove();
//     }
// });
let counter = 0
// I will think about this later
images.forEach( function(imgSrc) {
    // Create an img element
    // const img = document.createElement('img')
    const imgHTML = `<img data-data-id='${++counter}' data-data-type='instaImage' src='${imgSrc}'>`;
    //img.dataset.dataId = ++counter //data-data-id
    //img.dataset.type = 'instaImage'

//    img.addEventListener('click',function(event) {
//        //console.log('ciao...')
//        //this.remove()
//        event.target.remove()
//    })
    // Update img src attribute
    //img.src = imgSrc;
    //debugger

    // Append img element to container
    //container.appendChild(img)
    container.innerHTML += imgHTML;
    // const imgElement = document.querySelector(`[data-data-id="${counter}"]`);
    // imgElement.addEventListener('click',function(e) {this.remove()})

} )
const imgElements = document.querySelectorAll(`[data-data-type="instaImage"]`);
imgElements.forEach(e => e.addEventListener('click', function (e) { this.remove() }) )
