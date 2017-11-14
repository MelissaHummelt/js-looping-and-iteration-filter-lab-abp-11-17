// Code your solution in this file
function findMatching (drivers, name) {
  let matchingDrivers = drivers.filter(function (driverName) {
    if (driverName.toLowerCase() === name.toLowerCase()){
      return true
    } else {
      return false
    }
  })
    