// Code your solution here
const drivers = [];

function findMatching(string, drivers){
    return string.filter(
        result => result.toLowerCase() === drivers.toLowerCase()
    )
};
function fuzzyMatch(string, drivers){
    return string.filter(result => result[0] === drivers[0]);
};
function matchName(string, drivers){
    return string.filter(record => record.name === drivers)
};


