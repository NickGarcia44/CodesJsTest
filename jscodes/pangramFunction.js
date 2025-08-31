function isPangram(string){
    string = string.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let letra of alphabet){
        if(!string.includes(letra)){
            return false;
        }
    }
    return true;
}