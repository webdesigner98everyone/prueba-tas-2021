const API_URL = 'https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        console.log(data);
        const HTMLResponse = document.querySelector("#app");

        // const tpl = data.map((product)=>`<h3>${product.id}. ${product.name}</h3> <img src=${product.img} alt="imagen del producto"> <p><b>Descripción: </b>${product.description}</p> <p><b>Precio: </b>$${product.price}</p> <button class="boton boton--primario" type="submit">Enviar A Carrito</button>`);
        
        const tpl = data.map((product) => `
        <h3>${product.id}. ${product.name}</h3>
        <div class="producto">
            <img class="producto__imagen" src=${product.img} alt="imagen del producto">
            <div class="producto__contenido">
                <p><b>Descripción: </b>${product.description}</p>
                <p><b>Precio: </b>$${product.price}</p>
                <form class="formulario"> 
                   <input class="formulario__submit" type="submit" value="Agregar al carrito">
                </form>
            </div>
        </div>`)
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}
xhr.addEventListener("load",onRequestHandler);
xhr.open("GET", `${API_URL}/products`);
xhr.send();