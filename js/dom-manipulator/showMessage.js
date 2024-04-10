// Funzione per attivare la torta di compleanno e la candela una volta che i fuochi d'artificio finiscono
export const showBirthdayMessage = () => {
    const texElement = document.getElementById('text');
    const messageContainer = document.getElementById("message-container");

    texElement.style.fontSize = '40px';

    const finalPosition = 100;
    const cakeHeight = document.getElementById("cake").clientHeight;
    const initialPosition = parseInt(window.getComputedStyle(messageContainer).getPropertyValue('top').replace('px', '')) || 100;
    const distanceToMove = initialPosition - finalPosition - cakeHeight;

    messageContainer.style.top = `${finalPosition - distanceToMove}px`;

    texElement.style.opacity = '1';

    setTimeout(() => {
        texElement.style.fontSize = '40px';
    }, 1000);
}