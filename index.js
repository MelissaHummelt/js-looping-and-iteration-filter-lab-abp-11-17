// Code your solution in this file
function findMatching (drivers, name) {
  let matchingDrivers = drivers.filter(function (driverName) {
    if (name.toLowerCase() === driverName.toLowerCase()){
      return true
    } else {
      return false
    }
  })
    
