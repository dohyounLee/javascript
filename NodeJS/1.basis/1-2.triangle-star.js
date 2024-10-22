const star = "*";
const blank = " ";

function leftTriangle(n){
    for(let i = 1; i <= n; i++){
        console.log(star.repeat(i));
    }
}

function leftInvertTriangle(n){
    for(let i = n; i >= 1 ; i--){
        console.log(star.repeat(i));
    }
}

function rightTriangle(n){
    for(let i = 1; i <= n; i++){
        console.log(blank.repeat(n-i) + star.repeat(i));
    }
}

function rightInvertTriangle(n){
    for(let i = n; i >= 1; i--){
        console.log(blank.repeat(n-i) + star.repeat(i));
    }
}

function regularTriangle(n){
    for(let i = 1; i <= n; i++){
        console.log(blank.repeat(n-i)+ star.repeat(2*i - 1) + blank.repeat(n-i));
    }
}

function InvertRegularTriangle(n){
    for(let i = n; i >= 1; i--){
        console.log(blank.repeat(n-i)+ star.repeat(2*i - 1) + blank.repeat(n-i));
    }
}

leftTriangle(8);
console.log("");
leftInvertTriangle(8);
rightTriangle(8);
console.log("");
rightInvertTriangle(8);
onsole.log("");
regularTriangle(8);
console.log("");
InvertRegularTriangle(8);
