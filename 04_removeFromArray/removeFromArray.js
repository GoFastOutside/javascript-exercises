const removeFromArray = function( array, item ) {
    console.log(array +"is array");
    console.log(Array.from(arguments) +" are raw args")
    const removeThese = Array.from(arguments);
    removeThese.shift();
    console.log(removeThese+" is remove these");

    let newArray=[];
    for (let item of array){
        let add=true;
        for(let remove of removeThese){
            console.log(item +' is item of array    '+remove +' is being checked')
            if (item===remove){
                add=false;
            }
        }
        if (add){
            newArray.push(item);
            console.log("adding "+item+" /n new array is "+newArray)
        }

    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
