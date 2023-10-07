// code your solution here
function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun("study")

//mondayWork
const mondayWork = function work(activityForMonday="go to the office"){
    return (`This Monday, I will ${activityForMonday}.`)
}
mondayWork("sleep")
//wrap
function wrapAdjective(par="*"){
    return function (smth="special"){
        return `You are ${par}${smth}${par}!`
    }
}
wrapAdjective("%")("a dedicated programmer");