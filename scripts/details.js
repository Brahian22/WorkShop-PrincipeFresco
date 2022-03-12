const container = document.getElementById('container')

const detallePrenda = JSON.parse(localStorage.getItem('detallePrenda'))
// detallePrenda = detallePrenda !== null ? detallePrenda : "";

const getDetalle = () => {
    const {name, price, image1, image2, image3} = detallePrenda
    container.innerHTML += `
    <div class="tira_peque">
            <img src="${image1}" alt="">
            <img src="${image2}" alt="">
            <img src="${image3}" alt="">
        </div>
        <div class="tira_grande">
            <img src="${image1}" alt="">
            <img src="${image2}" alt="">
            <img src="${image3}" alt="">
        </div>
        <div class="info">
            <div><h3>${name}</h3></div>
            <div><p>$ ${price}.00</p></div>
            
            <div>Size</div>
            <div>
                <button class="tallas">S</button>
                <button class="tallas">M</button>
                <button class="tallas">L</button>
                <button class="tallas">XL</button>
                <button class="tallas">XXL</button>
            </div>
            <div class="botones_compra">
                <button class="btn_añadir">ADD TO CAR</button>
                <button class="btn_comprar">BUY IT NOW</button>
            </div>
            <div>
                <p class="descripcion">Let them know you’re 90s royalty with this official The Fresh Prince crown pattern sweater. Throw vintage vibes that Uncle Phil would approve of. Featuring woven The Fresh Prince logo on chest. Navy crown print crew neck sweatshirt with white ribbed collar and waist band. Cotton/Poly blend.</p>
            </div>
        </div>
    `
}
document.addEventListener('DOMContentLoaded',getDetalle)
