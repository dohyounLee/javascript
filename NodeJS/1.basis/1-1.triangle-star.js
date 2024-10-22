let n = 5;
const star = "*";
const blank = " ";

for(let i = 1; i <= n; i++){
    console.log(star.repeat(i));
}
console.log("");

for(let i = n; i >= 1 ; i--){
    console.log(star.repeat(i));
}

for(let i = 1; i <= n; i++){
    console.log(blank.repeat(n-i) + star.repeat(i));
}
console.log("");

for(let i = n; i >= 1; i--){
    console.log(blank.repeat(n-i) + star.repeat(i));
}
console.log("");

for(let i = 1; i <= n; i++){
    console.log(blank.repeat(n-i)+ star.repeat(i*2 - 1) + blank.repeat(n-i));
}
console.log("")

for(let i = n; i >= 1; i--){
    console.log(blank.repeat(n-i)+ star.repeat(i*2 - 1) + blank.repeat(n-i));
}