//create map
const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng
 
    //stock lat and long in form input  
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    
    //check and remove if if it's true the marker 
    marker && map.removeLayer(marker)
    
    //create a add marker
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//adicionar campo de fotos
function addPhotoField() {
    
    //pegar o container de fotos de #images
    const container = document.querySelector('#images');
    
    //pegar o container para duplicar .new.images 
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //realizar o clone da ultima imagem adiciona
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo esta vazio, se sim, nao adicionar
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container des imagens
    input.value = ""

    //adicionar o clone de #images
    container.appendChild(newFieldContainer)
}
//funccao pra delete field
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return 
    }
    //deletar o campo
    span.parentNode.remove()
}
//funcao para incluir respostas dos buttons sim ou nao no form
function toggleSelect(event) {
   
    //pegar e alternaar a cor dos buttons atende fim de semana 'sim' e 'nao'
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))


    const button = event.currentTarget
    button.classList.add('active')

    //meter o dos bottuns sim ou nao no imput do form
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
