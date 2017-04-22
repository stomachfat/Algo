//[1,2,1,2,1,4,6]
//strictly increasing

let testCases = {
	array1: [],
	array2: [1,2,1,4,6],
	array3: [1,2,1,2,1,4,6],
	array4: [2,1,1,1,1,1,2]
};

let determineLongestIncreasingSequence = (array) => {
	let currentStreak = 0;
	let maxStreak = 0;
	let currentIndices = [];
	let maxIndices = [];

	if (array.length === 0) {
		return {
			maxStreak,
			maxIndices
		};
	};

	for (let i = 0; i < array.length; i++) {
		if (currentIndices.length === 0) {
			currentIndices.push(i);
			continue;
		}

		if (array[i] > array[i-1]) {
			if (i === array.length - 1) {
				currentIndices.push(i);
				currentStreak = currentIndices[1] - currentIndices[0] + 1;

				if (currentStreak > maxStreak) {
					maxStreak = currentStreak;
					maxIndices = currentIndices;
				}
			}

			continue;
		}

		currentIndices.push(i-1);
		currentStreak = currentIndices[1] - currentIndices[0];

		if (currentStreak > maxStreak) {
			maxStreak = currentStreak;
			maxIndices = currentIndices;
		}

		currentIndices = [i];
		currentStreak = 0;


	}

	return {
		maxStreak,
		maxIndices
	}
}

for (let key in testCases) {
	console.log('input:', testCases[key]);
	console.log('output:', determineLongestIncreasingSequence(testCases[key]));
	console.log('\n')
}
