import { getData } from './getData.js';
import { showProducts } from './showProducts.js';

const urlProducts = "https://data-principefresco.herokuapp.com/productos1"
const contenedor = document.getElementById('contenedor')


document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData(urlProducts);
    showProducts(data,contenedor)
})

contenedor.addEventListener('click', async (e) => {
    const btnDetalle = e.target.classList.contains('card-img-top')
    const id = e.target.id;

    if(btnDetalle){
        const lista = await getData(urlProducts);
        const objeto = lista.find(prenda => prenda.id === Number(id));
 
        localStorage.setItem("detallePrenda", JSON.stringify(objeto));
        window.location.href = 'home.html';
    }
})

