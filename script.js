// Generate a random number between 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${randomNum}`);

// Shuffle an array
const arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(`Shuffled array: ${arr}`);


// Random string generator
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomStr = '';
for (let i = 0; i < 10; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log("I was modified");
console.log(`Random string: ${randomStr}`);
console.log("change done bye me ");
console.log("change done bye me2 ");
console.log("change bys anshu");
console.log("change bys anshu2");
console.log("change bys sidd");
console.log("change bys sidd2");
