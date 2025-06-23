

let str = "w3resource";

for (let i = 0; i < 10; i++) {

    let lastChar = str[str.length -1];

    let rest = str.slice(0, -1);

    str = lastChar + rest;
    
    console.log(str);
}