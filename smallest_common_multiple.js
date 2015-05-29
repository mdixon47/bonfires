function smallestCommons(arr) {
    arr = arr.sort();
    var scm = 1; 
    
    for (var i = arr[0]; i<=arr[1]; i+=1) { 
        scm =  scd(scm, i); 
    }
    
    console.log(scm);
    return scm;
}


function scd (a,b) {
    return a*b/gcd(a,b);
}

function gcd(a, b) {
    if (b === 0) {  
        return a;
    } else {
        return gcd(b, a%b);
    }
}       

smallestCommons([1,13]);