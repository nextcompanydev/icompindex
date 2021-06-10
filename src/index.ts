async function X() {
    console.log(new Date());
    setTimeout(() => X(), 1000);
}

setTimeout(() => X(), 1000)