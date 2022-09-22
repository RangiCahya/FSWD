
function convert(){
    let deg = prompt("Enter value in degrees ");
    const pi = Math.PI; // BEWARE of small and capital Math.pi =/= Math.PI
    var rad = deg * (pi / 180);
    console.log(`${rad} radians`);
    document.write(`${rad} radians`);
}
convert();

