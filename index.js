// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// makes everything match by making it all lowercase
 function findMatching(drivers, name) {

     return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())

 }

function fuzzyMatch(drivers, init){
    return drivers.filter((driver) => driver.startsWith(init))
}

function matchName(drivers, names){
    return drivers.filter(driver => driver.name === names)
}

