//이름 없이 exports
//이것만 return 되서 나가게 됨
module.exports = function() {
    console.log('function01');
}

//function02 이름으로 exports
exports.function02 = function() {
    console.log('function02');
}