// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let driversTwo = []
let lastDrivers = []

const returnFirstTwoDrivers = function () {
    return driversTwo = drivers.slice(0,2);
};

const returnLastTwoDrivers = function () {
    return lastDrivers = drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiply) {
    return function (fare) {
        return multiply * fare;
    }
}

function fareDoubler(double) {
    return  double + double;
}

function fareTripler(triple) {
    return triple * 3;
}

// const selectDifferentDrivers = function (paramOne, paramTwo) {
//     return returnFirstTwoDrivers(paramOne);
// }

function selectDifferentDrivers (arrayOfDrivers, returnDrivers) { 
    return returnDrivers(arrayOfDrivers)
}