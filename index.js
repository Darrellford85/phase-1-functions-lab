// Code your solution in this file!
/* Remember to check ReadME.md and test notes, also to use debugger */


/* distanceFromHqInBlocks() section*/

function distanceFromHqInBlocks(streetNumber) {
    const inBlocks = 42;
    if (streetNumber > inBlocks) {
      return streetNumber - inBlocks;
    } else {
      return inBlocks - streetNumber;
    }
  }
  
const streetNumber = [50]
function distanceFromHqInBlocks(streetNumber){
 return Math.abs(42 - streetNumber)
}
/* distanceFromHqInFeet() section*/
function distanceFromHqInFeet(streetNumber) {
    const oneStreet = 264;
    return distanceFromHqInBlocks(streetNumber)* oneStreet;

}
/* distanceTravelledInFeet() section*/
function distanceTravelledInFeet(sBlock, aBlock) {
    const oneBlock = 264;
    return Math.abs(sBlock - aBlock) * oneBlock;
  }
/*  calculatesFarePrice(start, destination)*/

function calculatesFarePrice(sBlock, aBlock) {
    const limitedFree = distanceTravelledInFeet(sBlock, aBlock);
        if (limitedFree > 400 && limitedFree <= 2000) {
          return (limitedFree - 400) * 0.02;
        } else if (limitedFree > 2000 && limitedFree <= 2500) {
          const fare = 25;
          return fare;
        } else if (limitedFree > 2500) {
          return "cannot travel that far";
        } else {
          return 0;
    }
}
/* Always remember to focus on correct placement and positioning./*
