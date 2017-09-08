
function numberGen ( mode ) {
    var randomNumber = Math.floor(Math.random() * mode) + 1;
    return randomNumber;
    }
    module.exports = numberGen;