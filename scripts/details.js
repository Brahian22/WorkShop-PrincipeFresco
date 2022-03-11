const container = document.getElementById('container')

const detallePrenda = JSON.parse(localStorage.getItem('detallePrenda'))
detallePrenda = detallePrenda !== null ? detallePrenda : "";

const getDetalle = () => {
    const {name, price, image1, image2, image3} = detallePrenda
    container.innerHTML += `
    
    `
    
}
