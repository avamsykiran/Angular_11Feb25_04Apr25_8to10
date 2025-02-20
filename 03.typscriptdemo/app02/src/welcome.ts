const greet = function(userName:string,salutation?:string) : string {
    return "Hello " + (salutation ? salutation : "") + userName;
}

export default greet;