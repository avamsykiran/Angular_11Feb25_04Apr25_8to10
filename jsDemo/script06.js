//Array prototype function

nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);

nums.push(100);
console.log(nums);

nums.pop();
console.log(nums);

nums.splice(5,3); //will delete 5th, 6th and 7th elements
console.log(nums);

//filter accepts a boolean function and returns a new array of elements that satisfy the boolean function
nums2 = nums.filter( x => x%2===0 ); 
console.log(nums2);

//map accepts a operator function and returns a new array all the results after executeing the operator on each element
nums3 = nums.map( x => x*x ) ;
console.log(nums3);