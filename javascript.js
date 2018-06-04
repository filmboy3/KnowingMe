function magic_number(int) {
	let magicArray = []
	let individualArray
	let counter = 0
	let firstMagicNum = 1
	let miniAdd = 0

	while (counter < int) {
		miniAdd = 0
		individualArray = firstMagicNum.toString().split('')
		for (let j = 0; j < individualArray.length; j++){
			miniAdd += parseInt(individualArray[j])
		}
		if (miniAdd === 7) {
			magicArray.push(firstMagicNum)
		}
		firstMagicNum++
	}
	return magicArray
}

console.log(magic_number(7))