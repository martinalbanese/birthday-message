// Funzione per avviare i fuochi d'artificio
export const startFireworks = () => {
    const fireDiv = document.querySelector('.fireworksDiv');
    const fireworks = new Fireworks.default(fireDiv); 
    fireworks.start(); 
}