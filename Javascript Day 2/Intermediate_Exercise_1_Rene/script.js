function characters(str) {
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2; 
}

console.log(characters("forest"));