
const prompt = require("prompt-sync")({ sigint: true });

// const age = prompt("How old are you? ");
// console.log(`You are ${age} years old.`);node 

var text=[];
text= prompt("Text : ");
const key = prompt("Key : ");
var en=[]
i=0;

for(i=0; i<text.length;i++)
{
    var a=text[i];
    var b=a.charCodeAt(0) += key;
    //var c= b;
    en.push(b)
    

    
}
console.log(`ASCII VALUE: ${en}`)


