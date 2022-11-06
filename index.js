const prompt = require("prompt-sync")({ sigint: true });

let text='';
text= prompt("Text : ");
var k = parseInt(prompt("Key : "));
let en='';
i=0;
charCode=0;

for(i=0; i<text.length;i++)
{
    charCode = text[i].charCodeAt();
    if (charCode > 96 && charCode < 123){
        charCode = 96 + (charCode - 96 + k) % 26;
        //charCode += k % 26;
    }
    else if (charCode > 64 && charCode < 91){
        charCode = 64 + (charCode - 64 + k) % 26;
    }
    else if (charCode == 32)
    {
        continue;
    }

    en += String.fromCharCode(charCode);
}
    console.log(`Encrypted Text: ${en}`);

