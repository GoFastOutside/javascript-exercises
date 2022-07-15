const sumAll = function(num1, num2) {
    //console.log("num1.typeof is "+num1.typeof+'/n num2.typeof is '+num2.typeof);
    //console.log(Number.isInteger(num1)+"    "+Number.isInteger(num2));
    if (num1<0 || num2<0){
        return "ERROR";
    }else if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    } else if(num1>num2){
        let holdNum = num1;
        num1=num2;
        num2=holdNum;
    }

    let output=0;
    //console.log("adding from "+num1+" to "+num2+'/n total='+output);
    for (let i=num1; i<=num2;i++){
        output+=i;
        //console.log("adding "+i+" total="+output);
    }
    return output;

};

// Do not edit below this line
module.exports = sumAll;
