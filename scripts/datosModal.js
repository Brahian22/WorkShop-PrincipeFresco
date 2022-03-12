const urlCarrito = 'http://localhost:4006/productos/'

const getProductosCarrito = async () => {
    
    let mostrarProductos = document.querySelector('.info_carrito')
    mostrarProductos.innerHTML=''

    const resp = await fetch (urlCarrito)
    const data = await resp.json()
    data.forEach(producto => {
        const {name, price, image1} = producto
        
        mostrarProductos.innerHTML += `
        <div class="info_product">
            <div class="img-product">
                <img src="${image1}" width="80px"/>
            </div>
            <div>
                <h3 class="item-modal name-product">${name}</h3>
                <p class="item-modal">$${price}</p>
            </div>
            <div class="n-items">
                <p> 1 </p>
                <input type="submit" class="btn-remove-modal" value="Remove">
            </div>
        </div>
        
        `
    })
}

document.addEventListener('click', () => {
    getProductosCarrito(urlCarrito)
})

//-------Eliminar---------------//
const mostrarProductos = document.querySelector('.info_carrito')
mostrarProductos.addEventListener('click', async(e)=>{

    const botonDelete= e.target.classList.contains('btn-remove-modal')
    const id= e.target.id
    console.log(urlCarrito+id)

    if(botonDelete){
        await fetch(urlCarrito+id,{
            method: 'DELETE'
        })        
    }
})