function makeid(l) {

	var res = '';
	var charlist='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for(var i=0; i<l;i++){
		res+= charlist.charAt(Math.floor(
			Math.random()*charlist.length)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
