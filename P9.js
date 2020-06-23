const firstInarr = (arr, ele1, ele2) => {
	if (arr.indexOf(ele1) > arr.indexOf(ele2)) {
		console.log(ele2);
	} else {
		console.log(ele1);
	}
};

// let arra = [1, 2, 3, 4];

// firstInarr(arra, 2, 3);

const abbreviate = (sent) => {
	let abbr = [];
	let arr = sent.split(' ');

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 4) {
			abbr.push(abbrHelper(arr[i]));
		} else {
			abbr.push(arr[i]);
		}
	}
	console.log(abbr.join(' '));
};

const abbrHelper = (word) => {
	let arr = word.split('');
	let vowels = 'aeiou';
	let cut = [];
	for (let i = 0; i < arr.length; i++) {
		if (!vowels.includes(arr[i])) {
			cut.push(arr[i]);
		}
	}
	return cut.join('');
};

// let a = 'Forensic files is a serious addiction';

// abbreviate(a);

const formatName = (name) => {
	let arr = name.split(' ');
	let format = [];
	for (let i = 0; i < arr.length; i++) {
		format.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
	}
	console.log(format.join(' '));
};

// formatName('mIke jOnEs');

const isValidName = (name) => {
	let arr = name.split(' ');
	if (arr.length < 2) {
		return false;
	}

	let correct = [];

	for (let i = 0; i < arr.length; i++) {
		correct.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
	}

	if (correct.join(' ') == name) {
		return true;
	} else {
		return false;
	}
};

isValidName('Britt hAsel');

const validEmail = (email) => {
	let arr = email.split('');
	let filtered = arr.filter((ele) => ele === '@');
	let index = arr.indexOf('@');
	let after = arr.slice(index + 1);
	let before = arr.slice(0, index).join('');
	let periods = after.filter((ele) => ele === '.');
	if (filtered.length > 1) {
		return false;
	}
	if (before != before.toLowerCase()) {
		return false;
	}
	if (periods.length > 1) {
		return false;
	} else {
		return true;
	}
};

validEmail('Bhs@yahoo.com');
