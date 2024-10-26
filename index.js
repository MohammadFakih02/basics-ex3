var n = prompt("Please enter size of tree");
var i;
var j;
var tree="";
tree+= " ".repeat(n)+ " *"+"\n";
for(i=0;i<=n;i++){
    tree+=" ".repeat(n-i)+"*"+"|".repeat((i*2)+1)+"*"+ "\n";
    console.log(" ".repeat(n-i)+"*"+"|".repeat((i*2)+1)+"*")
}

const para = document.createElement("pre");
para.innerText = tree;
document.body.appendChild(para);