function firstChar(text) {
  // your code here
	let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for(let letter of text){
		if(alphabets.indexOf(letter) >= 0)
			return letter;
	}

	return "";
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
