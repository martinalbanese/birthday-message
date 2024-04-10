// Arrow function per creare la torta di compleanno e la candela
export const createBirthdayCake = async () => {
    const cakeContainer = document.getElementById('cake-container');

    const plate = document.createElement("div");
    plate.className = 'plate'; //birthday-cake

    const cake = document.createElement("div");
    cake.className = 'cake';

    const middle = document.createElement("div");
    middle.className = 'middle';
    
    const chocolate = document.createElement("div");
    chocolate.className = 'chocs';

    const top = document.createElement("div");
    top.className = 'top';

    cakeContainer.appendChild(plate);
    cakeContainer.appendChild(cake);
    cakeContainer.appendChild(middle);
    cakeContainer.appendChild(chocolate);
    cakeContainer.appendChild(top);

    await createCandles();
};

const createCandles = async () => {
    const cakeContainer = document.getElementById('cake-container');

    // Creazione delle candele
    const candleContainer = document.createElement("div");
    candleContainer.className = 'candles';

    const firstFlame = document.createElement("div");
    firstFlame.className = 'flame';

    const secondFlame = document.createElement("div");
    secondFlame.className = 'flame2';

    const thirdFlame = document.createElement("div");
    thirdFlame.className = 'flame3';
    
    const shadows = document.createElement("div");
    shadows.className = 'shadows';

    candleContainer.appendChild(shadows);
    candleContainer.appendChild(thirdFlame);
    candleContainer.appendChild(secondFlame);
    candleContainer.appendChild(firstFlame);

    cakeContainer.appendChild(candleContainer);

}






document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) { 
        blowCandle();
    }
});