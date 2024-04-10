// Funzione per avviare i fuochi d'artificio sulla nuova pagina
export const startFireworks = () => {
    const newWindow = window.open('', '_blank'); // Apre una nuova finestra vuota

    // Aggiunge il markup HTML per i fuochi d'artificio sulla nuova finestra
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Fuochi d'artificio</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background-color: black;
                    overflow: hidden;
                }
                .firework {
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    animation: explode 1s linear infinite;
                }
                @keyframes explode {
                    0% {
                        transform: scale(1);
                        background-color: white;
                    }
                    100% {
                        transform: scale(100);
                        background-color: transparent;
                    }
                }
            </style>
        </head>
        <body></body>
        </html>
    `);

    // Aggiunge i fuochi d'artificio alla nuova finestra
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * newWindow.innerWidth + 'px';
        firework.style.top = Math.random() * newWindow.innerHeight + 'px';
        newWindow.document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove(); // Rimuove il fuoco d'artificio dopo un certo intervallo
        }, 3000);
    }, 300);
};


/* // Funzione per avviare i fuochi d'artificio sulla nuova pagina
export const startFireworks = () => {
    const newWindow = window.open('', '_blank'); // Apre una nuova finestra vuota

    // Aggiunge il markup HTML per i fuochi d'artificio sulla nuova finestra
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Fuochi d'artificio</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background-color: black;
                    overflow: hidden;
                }
                .firework {
                    position: absolute;
                    width: 2px;
                    height: 50px;
                    background-color: rgba(255, 255, 255, 0.8);
                    animation: explode 1s linear infinite;
                }
                @keyframes explode {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    100% {
                        transform: translateY(-500px) rotate(360deg);
                    }
                }
            </style>
        </head>
        <body></body>
        </html>
    `);

    // Aggiunge i fuochi d'artificio alla nuova finestra
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * newWindow.innerWidth + 'px';
        firework.style.top = Math.random() * newWindow.innerHeight + 'px';
        newWindow.document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove(); // Rimuove il fuoco d'artificio dopo un certo intervallo
        }, 3000);
    }, 300);
}; */




/* //Funzione per avviare i fuochi d'artificio
export const startFireworks = () => {
    const fireworksContainer = document.getElementById("fireworks");

    //Crea un loop infinitiìo per generare fuochi d'artificio causali
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.backgroundColor = getRandomColor();
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 3000);
    }, 300);
};

//Funzione per ottenere un colore casuale
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}; */
