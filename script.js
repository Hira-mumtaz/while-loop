
console.log("Binary number")


let p = document.getElementsByClassName("p")[0]
p.innerText = "Binary numbers:\n";
let a=2;
while(a<=10){
    console.log(a)
    a=a+2;
    p.innerText+=a+ "\n";
}
console.log("Integer number")

let box = document.getElementsByClassName("box")[0]
box.innerText="Integer number: \n";
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    box.innerText+=i + "\n";
}

let  fruit = document.getElementsByClassName("fruit")[0];
fruit.innerText="Fruits Name: \n";
let fruits = ["mango" , "Apple" , "Grapes"]
let arr = 0
while(arr<=2){
    console.log(`${fruits[arr]}`);
    fruit.innerText += fruits[arr] + "\n";
    arr=arr+1;

}