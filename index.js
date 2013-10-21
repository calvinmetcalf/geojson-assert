var hint = require('geojsonhint').hint;

function GeoJSONError(info){
	if(Array.isArray(info)){
		info = info[0];
	}
    if(info.message){
        this.message = 'GeoJSON Error: '+info.message;
    }
    if(info.line){
        this.message = this.message + ' at line ' + info.line;
    }
}
GeoJSONError.prototype = Object.create(Error.prototype);
GeoJSONError.prototype.name = 'GeoJSONError';
GeoJSONError.prototype.constructor = GeoJSONError;
function assert(str,obj) {
    var key;
    if(obj){
        if(typeof str === 'string'){
            str = JSON.parse(str);
        }
        for(key in str){
            assert(str[key]);
        }
        return;
    }
    if(typeof str !== 'string'){
        str = JSON.stringify(str);
    }
    var response = hint(str);
    if (!Array.isArray(response) || response.length) {
        throw new GeoJSONError(response);
    }
}
module.exports = assert;