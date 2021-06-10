async function X() {
    console.log(new Date(), "saida 2");
    setTimeout(() => X(), 1000);
}

setTimeout(() => X(), 1000)