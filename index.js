// Code your solution here
const drivers = [];
//returns all drivers that match the passed in name
function findMatching(record,driverName){
    return record.filter((elements) => elements.toLowerCase() === driverName.toLowerCase()
    )
};
function fuzzyMatch(record,nameStart){
    return record.filter((elements) => elements[0] === nameStart[0]);
};
function matchName(record, driverName){
    return record.filter((record) => record.name === driverName)
};


