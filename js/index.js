
async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const jsonArr = products.map(elemento => Object.entries(elemento));
    const jsonSliced = jsonArr.slice(0,4);
    products.forEach(element => {
        const randInt = randonData(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i < jsonSliced.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
            <div class="image">
                <img src="${jsonArr[randIndex][5][1]}" alt="">
            </div>
            <div class="text">
                <h2>Web Design & Dev</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="webdev.html" class="btn button-1">learn more</a>
            </div>
                    
                    `)
                    const features_row = document.querySelector('.features-row');
                    features_row.append(card)
            }
        }
        function randonData(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    });
 
}

getData()

async function getData2(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const products = await result.json();
    const jsonArr = products.results.map(elemento => Object.entries(elemento));
    const jsonSliced = jsonArr.slice(0,4);
    products.results.forEach(element => {
        const randInt = randonData(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i < jsonSliced.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                
                <div class="text">
                        <h2>Web Design & Dev</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="webdev.html" class="btn button-1">learn more</a>
                </div>
                <div class="image">
                <img src="${jsonArr[randIndex][8][1]}" alt="">
                </div>
                    
                    `)
                    const features_row = document.querySelector('.features-row2');
                    features_row.append(card)
            }
        }
        function randonData(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    });
 
}

getData2()

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        
 swal({
    title: `El campo ${messageArr[1]} no tiene el formato correcto`,
    icon: "error",
     })
     return false;
    }
    
 swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = "";
     mensaje.value = "";
    return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

 
// function backg(){
//     for(i = 0; i < 5; i++){
//         const boxx = document.createRange().createContextualFragment(`
            
//             <div class="box box-1">
//             <h2>Ready to start</h2>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, cum!</p>
//             <hr>
//             </div>
            
//             `)
//             box.style.backgroundImage = "url(img/features-1-web-dev.jpg)"
//         const webdev_row = document.querySelector('.webdev-row');
//         webdev_row.append(boxx);
//     }
// }



const box = document.getElementById('webdev');
box.style.backgroundImage = "url(img/features-1-web-dev.jpg)"

//btn_validar.addEventListener("click", validar);
