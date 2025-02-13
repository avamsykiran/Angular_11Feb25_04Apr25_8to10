
function demo(){
    a = 78; //Hoisting
    console.log(a);

    var b = 88; //Localizing
    console.log(b);

    if(true){
        var c = 100; //Localizing
        console.log(c);
        let d = 200; //block-scoped or sub-scoped
        console.log(d);
    }

    console.log(c);
    //console.log(d);
}

demo();

console.log(a);
//console.log(b);
//console.log(c);