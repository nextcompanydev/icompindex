async function X() {
	let x = 10;
	x = -(-x);
    console.log(new Date(), "saida 2");
    setTimeout(() => X(), 1000);
}

setTimeout(() => X(), 1000)