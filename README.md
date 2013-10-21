geojson-assert
==============
thin wrapper around [geojsonhint](https://github.com/mapbox/geojsonhint) to allows you to easily use it to assertion test.

test object taken from [chai](https://github.com/chaijs/chai/blob/master/chai.js#L258-L315), 
test data taken from geojsonhint.

install with npm

```bash
npm install geojson-assert
```

general usage

```javascript
var assert = require('geojson-assert');
assert(geojson);
```

geojson-assert is somewhat less picky then geojsonhint and you can give it a str or an object.

If you pass true to the second argument it assumes you are passing a dict where values are valid geojson.

```javascript
var assert = require('geojson-assert');
assert({
    thing1:geojson,
    thing2:moreGeoJson
}, true);
```

using it async in mocha

```javascript
var assert = require('geojson-assert');
it('should work',function(done){
    fs.readFile('path to json',{encoding:'utf8'},function(err,result){
        if(err){
            return done(err);
        }
        done(assert(result));
    });
});
```