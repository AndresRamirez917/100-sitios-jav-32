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
getData()
