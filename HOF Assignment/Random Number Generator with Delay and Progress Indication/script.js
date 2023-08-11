let delay = 3000; //milliseconds
let countdown = delay / 1000; //countdown in seconds

const intervalId = setInterval(() => {
    console.log(`${countdown} seconds until random number is generated...`);
    countdown--;
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number generated: ${randomNum}`);
}, delay);