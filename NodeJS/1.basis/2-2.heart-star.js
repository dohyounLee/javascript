const star = "*";
const blank = " ";
function heartStar(n){
    for(let i = 1; i <= n; i++){
        console.log(blank.repeat(n+1-i) + star.repeat(2*i-1) + blank.repeat(2*(n-i)+1) + star.repeat(2*i-1));
    }
    console.log(star.repeat(4*n+1));

    for(let i = 1; i <= n; i++){
        console.log(blank.repeat(2*i) + star.repeat(4*(n-i)+1) + blank.repeat(2*i));
    }
}
heartStar(5);

