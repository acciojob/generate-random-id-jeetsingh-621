function makeid(l) {

	let res = '';
	let charlist='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for(i=0; i<l;i++){
		res+= charlist.charAt(Math.floor(
			Math.random()*charlist.length;)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
