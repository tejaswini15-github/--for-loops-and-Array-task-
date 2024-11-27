for (var i=1; i<=10; i++) {
    console.log("Hello World")
}

for (var teja=1; teja<=5; teja++){
    console.log("skipping -$ {teja}")
}

for (i=1; i<=100; i++) {
    console.log(i)
}

for (var index=1; index<=10; index++) {
    console.log(index)
}

for (var i=1; i<5; i++) {
    console.log(i)    
}

for (var i=5; i>=0; i--) {
    console.log(i)
}

// Array
arr =[1,2,3,4,5,6];
arr[4] =arr[1]+ arr[3]
console.log(arr);


arr =[1,2,3,4,5,6];
arr[4] =arr[1]+ arr[3]
console.log(arr[4]);


arr =[1,2,3,4,5,6];
console.log(arr);
console.table(arr)
console.log(arr.length);
console.log(arr[0]) //check
arr[0]=10;
console.log(arr[0])
console.log(arr)
console.log(arr[0])
console.log(arr[5])
console.log(arr.length)
console.log(arr[arr.length])
console.log(arr[arr.length-1])

arr =['surender','lalitha','bhargavi','rajesh','teja'];
console.log(arr[0],arr[1],arr[2],arr[3],arr[4])
for (var i=0; i<=4; i++){
    console.log(i)
}
    
arr =['surender','lalitha','bhargavi','rajesh','teja',12,false,true,3.0,3.22222222,NaN,undefined,{},[],function () {}];
console.log(arr)

for (var i=0; i<=arr.length; i++){
    console.log(i)
}

for (var i=0; i<=arr.length; i++){
    console.log(arr[i])
}


// 1.	Write a for loop to print the numbers from 1 to 20.
for (var i=1; i<=20; i++) {
    console.log(i)

}

// 2.	Create a for loop to print the squares of numbers from 1 to 10.
for (var i=1; i<=10; i++) {
    console.log(i*i)
}


// 3.	Use a for loop to print the first 10 multiples of 5.
for (var i=1; i<=10; i++) {
    console.log(5*i)
}

for (var i=1; i<=10; i++) {
    console.log(i*5)
} 


for (var i=1; i<=10; i++) {
    console.log("5 x",i,"=",5*i)
}

// 4.	Write a for loop to print numbers from 20 to 1 in reverse order.
for (var i=20; i>=1; i--) {
    console.log(i)
}


// 5.	Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
for (var i=10; i>=1; i--) {
    console.log(i*2)
}

for (var i=20; i>=2; i-=2) {
    console.log(i)
}


// Array
// 6.	Print each element of the array
// –	Input: [10, 20, 30, 40, 50]

// –	Expected Output:
//  	10  
// 20  
// 30  
// 40  
// 50  

arr= [10, 20, 30, 40, 50];
for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// 7.	Print the index of each element along with its value
// –	Input: ['apple', 'banana', 'cherry']

// –	Expected Output:
//  	Index 0: apple  
// Index 1: banana  
// Index 2: cherry 

arr=["apple","banana","cherry"];
for (var i=0; i<arr.length; i++ ){
    console.log("Index " + i + " :"+arr[i])
}



arr= [10, 20, 30, 40, 50]
console.log(arr.length);




































































