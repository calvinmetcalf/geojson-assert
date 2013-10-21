var fs = require('fs');
var assert = require('..');
describe('good geometries',function(){
    var paths = fs.readdirSync('./test/data/good');
        paths.forEach(function(path){
            it('should work with '+path,function(done){
                fs.readFile('./test/data/good/'+path,{encoding:'utf8'},function(err,result){
                    if(err){
                        return done(err);
                    }
                    assert(result);
                    done();
                });
            });
        });
});
describe('bad geometries',function(){
    var paths = fs.readdirSync('./test/data/bad')
        paths.forEach(function(path){
            it("should'nt work with "+path,function(done){
                fs.readFile('./test/data/bad/'+path,{encoding:'utf8'},function(err,result){
                    if(err){
                        return done(err);
                    }
                    var err;
                    try{
                        assert(result);
                    }catch(e){
                        err = e;
                    }finally{
                        if(err){
                            done();
                        }else{
                            done(path + ' should throw error');
                        }
                    }
                    
                    
                });
            });
        });
});