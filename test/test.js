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
                    done(assert(result));
                });
            });
        });
});
describe('good geometries not as strings',function(){
    var paths = fs.readdirSync('./test/data/good');
        paths.forEach(function(path){
            it('should work with '+path,function(done){
                fs.readFile('./test/data/good/'+path,{encoding:'utf8'},function(err,result){
                    if(err){
                        return done(err);
                    }
                    done(assert(JSON.parse(result)));
                    
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
                        done(assert(result));
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
describe('bad geometries not as strings',function(){
    var paths = fs.readdirSync('./test/data/bad')
        paths.forEach(function(path){
            it("should'nt work with "+path,function(done){
                fs.readFile('./test/data/bad/'+path,{encoding:'utf8'},function(err,resultString){
                    if(err){
                        return done(err);
                    }
                    var err;
                    var result = JSON.parse(resultString);
                    try{
                        done(assert(result));
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
describe('objects',function(){
            it("should work with an object string",function(done){
                fs.readFile('./test/data/good.object.json',{encoding:'utf8'},function(err,result){
                     if(err){
                        return done(err);
                    }
                    done(assert(result,true));
                });
            });
            it("should work with an object ... object",function(done){
                fs.readFile('./test/data/good.object.json',{encoding:'utf8'},function(err,result){
                     if(err){
                        return done(err);
                    }
                    done(assert(JSON.parse(result),true));
                });
            });
            it("shouldn't work with an object string",function(done){
                fs.readFile('./test/data/bad.object.json',{encoding:'utf8'},function(err,result){
                     if(err){
                        return done(err);
                    }
                    var err;
                    try{
                        done(assert(result,true));
                    }catch(e){
                        err = e;
                    }finally{
                        if(err){
                            done();
                        }else{
                            done('should throw error');
                        }
                    }
                });
            });
            it("shouldn't work with an object ... object",function(done){
                fs.readFile('./test/data/bad.object.json',{encoding:'utf8'},function(err,resultString){
                     if(err){
                        return done(err);
                    }
                    var err;
                    var result = JSON.parse(resultString);
                    try{
                        done(assert(result,true));
                    }catch(e){
                        err = e;
                    }finally{
                        if(err){
                            done();
                        }else{
                            done('should throw error');
                        }
                    }
                    
                    
                });
            });
});