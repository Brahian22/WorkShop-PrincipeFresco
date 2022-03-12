export const showProducts = (data, contenedor) => {
    data.forEach(element => {
        const {id, name, price, image1} = element
        contenedor.innerHTML += `
        <div class="card carta" style="width: 18rem;">
            <img src="${image1}" class="card-img-top" id="${id}" alt="...">
            <div class="card-body">
                <h5 class="card-title"><b>${name}</b></h5>
                <p class="card-text card-title">$${price}.00</p>
            </div>
        </div>
        `
    });
}