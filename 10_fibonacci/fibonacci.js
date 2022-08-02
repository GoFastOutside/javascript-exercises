const fibonacci = function(position) {
    let fib=[1 , 1];

    if (position<1){return 'OOPS';}

    for (let i=2;i<=position;i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib[position-1];
};

// Do not edit below this line
module.exports = fibonacci;
