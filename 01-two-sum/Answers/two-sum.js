/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// two sum function

const twoSum = (target, intArray) => {
    // loop over numbers in the array

    for (num of intArray) {
        // get index

        const numIndex = intArray.indexOf(num);

        // filter number by index
        const filteredArray = intArray.filter((num, index) => {
            return (num !== intArray[numIndex])
        })

        for (opNum of filteredArray) {
            const total = num + opNum

            if (total == target) {
                return `[${intArray.indexOf(num)}, ${intArray.indexOf(opNum)}]`
            }
            else continue;
        }
        
    }
}

console.log(twoSum(6, [ 3, 2, 4]))
