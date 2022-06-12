// code your solution here
function saturdayFun(dActivity = "This Saturday, I want to roller-skate!") {
    console.log(dActivity);
    if (dActivity === "This Saturday, I want to roller-skate!"){
        return dActivity
      } else {
        return "This Saturday, I want to bathe my dog!"
      }     
}

function mondayWork(nActivity = "This Monday, I will go to the office.") {
    console.log(nActivity);
    if (nActivity === "This Monday, I will go to the office."){
        return nActivity
    } else {
        return "This Monday, I will work from home."
    }
}

function wrapAdjective(result = '*', emphatic = "a hard worker") {
    console.log();
    if (result === '*' && emphatic === "a hard worker"){
        return `You are ${result} ${emphatic} ${result}!`
    }else if (result === '||'){
        return `You are ${result} ${emphatic} ${result}!`
    }
}


   