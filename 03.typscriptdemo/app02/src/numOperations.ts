
const checkPrime = function(n:number) : [number[],string] {
    let factors : number[] = [1];

    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            factors.push(i);
        }
    }

    factors.push(n);

    return [factors,factors.length===2?"Prime":"Composite"];
}

export default checkPrime;