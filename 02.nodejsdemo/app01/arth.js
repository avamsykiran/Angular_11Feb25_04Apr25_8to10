export const sum = (a,b) => (a+b);
export const dif = (a,b) => (a-b);
export const prd = (a,b) => (a*b);
export const rem = (a,b) => (a/b);
export const qut = (a,b) => (a%b);

const getFactors = n => {
    var factors =[1];

    for(let i=2;i<n/2;i++){
        if(n%i===0){
            factors.push(i);
        }
    }

    return [...factors,n];
}

export default getFactors;