const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get values from html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Create map
const map = L.map("mapid", options).setView([lat, lng], 14); //lat, long, zoom

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //icone
    iconSize: [58, 68],                         //tamanho [larg Alt]
    iconAnchor: [29, 68], //onde ficará o icone                     
    popupAnchor: [170,2] // onde ficará o popup
})


//Create and marker


L.marker([lat, lng], { icon })
.addTo(map)

/*Image Gallery*/
function selectImage(event) {
    const button = event.currentTarget

    //Remover todas as classe .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) //para cada button

    function removeActiveClass (button){ 
        button.classList.remove("active") // remove a classe .active
    }

    //Selecionar a image clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para o botao clicado
    button.classList.add('active')
}