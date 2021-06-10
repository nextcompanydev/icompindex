async function X() {
    console.log(new Date(), "saida");
    setTimeout(() => X(), 1000);
}

setTimeout(() => X(), 1000)