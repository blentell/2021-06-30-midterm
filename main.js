// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function ageToAbilities(age) {
	if (age >= 25) {
		return "You can do pretty much anything.";
	} else if (age >= 18) {
		return "You can vote but not rent a car.";
	} else if (age >= 16) {
		return "You can drive but not vote.";
	} else {
		return "You can't drive.";
	}
}

function evenLengthedStrings(strings) {
	let newStrings = [];
	for (let i = 0; i < strings.length; i++) {
		if (strings[i].length % 2 === 0) {
			newStrings.push(strings[i]);
		}
	}
	return newStrings;
}

function countBs(numbers) {
	let newNumbers = [];
	let count = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] >= 80 && numbers[i] <= 89) {
			newNumbers.push(numbers[i]);
			count++;
		}
	}
	return count;
}


function lastIndexOfPunctuation(string) {
    if (string.lastIndexOf("?") !== -1) {
			return string.lastIndexOf("?");
		} else if (string.lastIndexOf("!") !== -1) {
			return string.lastIndexOf("!");
		} else if (string.lastIndexOf(".") !== -1) {
			return string.lastIndexOf(".");
    }
    return -1;
}

function divisbles(numbers1, numbers2) {
	let newNumbers = [];
	for (let i = 0; i < numbers1.length; i++) {
		if (numbers1[i] % numbers2[i] === 0) {
			newNumbers.push(true);
		} else {
			newNumbers.push(false);
		}
	}
	return newNumbers;
}

function getLetters(strings, index) {
    let letters = "";
    for (let i = 0; i < strings.length; i++){
        letters += strings[i].charAt(index);        
       if (strings[i].charAt(index) === "") {
            letters += "-";
        }
    }
    return letters;
}

function getCenturies(array) {
	let century = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] <= 100) {
			century.push("1st");
		} else if (array[i] <= 200) {
			century.push("2nd");
		} else if (array[i] <= 300) {
			century.push("3rd");
		} else if (array[i] <= 400) {
			century.push("4th");
		} else if (array[i] <= 500) {
			century.push("5th");
		} else if (array[i] <= 600) {
			century.push("6th");
		} else if (array[i] <= 700) {
			century.push("7th");
		} else if (array[i] <= 800) {
			century.push("8th");
		} else if (array[i] <= 900) {
			century.push("9th");
		} else if (array[i] <= 1000) {
			century.push("10th");
		} else if (array[i] <= 1100) {
			century.push("11th");
		} else if (array[i] <= 1200) {
			century.push("12th");
		} else if (array[i] <= 1300) {
			century.push("13th");
		} else if (array[i] <= 1400) {
			century.push("14th");
		} else if (array[i] <= 1500) {
			century.push("15th");
		} else if (array[i] <= 1600) {
			century.push("16th");
		} else if (array[i] <= 1700) {
			century.push("17th");
		} else if (array[i] <= 1800) {
			century.push("18th");
		} else if (array[i] <= 1900) {
			century.push("19th");
		} else if (array[i] <= 2000) {
			century.push("20th");
		} else if (array[i] <= 2100) {
			century.push("21st");
		}
	}
	return century;
}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │
// │                                                                         │
const isDef = (arg) => arg === "function";
const pass = () => undefined;
// │                                                                         │
module.exports = {
	ageToAbilities: isDef(typeof ageToAbilities) ? ageToAbilities : pass,
	evenLengthedStrings: isDef(typeof evenLengthedStrings)
		? evenLengthedStrings
		: pass,
	countBs: isDef(typeof countBs) ? countBs : pass,
	lastIndexOfPunctuation: isDef(typeof lastIndexOfPunctuation)
		? lastIndexOfPunctuation
		: pass,
	divisbles: isDef(typeof divisbles) ? divisbles : pass,
	getLetters: isDef(typeof getLetters) ? getLetters : pass,
	getCenturies: isDef(typeof getCenturies) ? getCenturies : pass,
	gridSum: isDef(typeof gridSum) ? gridSum : pass,
};
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
