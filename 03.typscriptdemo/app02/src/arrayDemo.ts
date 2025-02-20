const arraydemoFunction = function() {

    let friends : string[];

    friends=[];
    friends.push("Vamsy");
    friends.push("Sagar");
    friends.push("Suseela");

    console.log(friends);

    let nums : number[] = [1,2,3,4,5,6,7,8,9,10];
    console.log(nums);

    let weeks : readonly string[] = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
    console.log(weeks);
}

export default arraydemoFunction;