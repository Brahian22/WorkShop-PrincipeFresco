const urlCarrito = 'https://data-principefresco.herokuapp.com/productos1'

const getProductosCarrito = async () => {
    
    let mostrarProductos = document.querySelector('.info_carrito')
    mostrarProductos.innerHTML=''

    const resp = await fetch (urlCarrito)
    const data = await resp.json()
    data.forEach(producto => {
        const {name, price, image1} = producto
        
        mostrarProductos.innerHTML += `
        <div class="info_product">
            <img src="${image1}" width="80px" class="item-modal">
            <div>
                <h3 class="item-modal name-product">${name}</h3>
                <p class="item-modal">$${price}</p>
            </div>
            <div class="n-items">
                <p> 1 </p>
                <button class="btn-remove-modal">Remove</button>
            </div>
        </div>
        
        `
    })
}

document.addEventListener('click', () => {
    getProductosCarrito(urlCarrito)
})