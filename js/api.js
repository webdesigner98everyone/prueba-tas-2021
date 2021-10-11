const API_URL = 'https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        console.log(data);
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map((product)=>`<li>${product.name} <br> ${product.price}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}
xhr.addEventListener("load",onRequestHandler);
xhr.open("GET", `${API_URL}/products`);
xhr.send();