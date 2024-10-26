var n = prompt("Please enter size of tree");
var i;
var j;
console.log(" ".repeat(n)+ " *");
for(i=0;i<=n;i++){
    console.log(" ".repeat(n-i)+"*"+"|".repeat((i*2)+1)+"*")
}
