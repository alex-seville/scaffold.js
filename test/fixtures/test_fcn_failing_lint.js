function pattern1(param){

    function pattern1Private(){
        return "should not be testable";
    }

    return param;
}
var pattern1Variable = "testable";

Object.defineProperty(pattern1,"iWillCrashYou", {
  get: function () { throw new Error("bwuahahah!"); },
  enumerable: true
});


var pattern1a={a:1};
Object.defineProperty(pattern1a,'iWillCrashYou', {
get: function () { throw new Error('bwuahahah!'); },
enumerable: true
});