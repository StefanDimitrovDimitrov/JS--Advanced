(function solve() {

    String.prototype.ensureStart = function (s) {
        let sLen = s.length
        let thisSubstring = this.substring(0,sLen);
        let result = ''
        if(thisSubstring === s){
            result = '' + this
        }else{
            result = s + this
        }
        return result
    };

    String.prototype.ensureEnd = function (s) {
        let sLen = s.length
        let thisSubstring = this.substr(this.length - sLen);
        let result = ''
        if(thisSubstring === s){
            result = this + ''
        }else{
            result = this + s
        }
        return result
    };

    String.prototype.isEmpty = function () {
        let result = ''
        if (this.length > 0){
            result = false
        }else{
            result = true
        }
        return result
    };

    String.prototype.truncate = function (n) {
        let copy = this.slice()
        let thisLen = copy.length
        let result = ''
        if(thisLen <= n){
            result = copy+''
        }else{
            let subString = copy.substring(0,n).trim()
            if(subString.indexOf(' ') >= 0){
                
                strArr = subString.split(' ')
                strArr.pop()
                strArr = strArr.join(' ') + '...'
                result = strArr
            }else{
                if(n>3){
                    let index = n-3
                    result = copy.substr(copy.length - index) + '...';
                }else{
                    result = copy.substr(copy.length - n)
                }
            }
        }
        return result
    };

    String.format = function (s, ...params) {
        result = '';
        let array = s.split(', ')
        let sentances = array.shift()
        let arr = params
        let sen = sentances.split(' ')
        for (let string of sen) {
            if (string.includes("{")){
                let len = arr.length
                if(len > 0){
                    word = arr.shift()
                    let index = sen.indexOf(string)
                    sen[index] =  word
                }
            }    
        }

        result = sen.join(' ')
        return result
    };

}())


var testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(45)///''the quick brown fox jumps over the lazy dog'
// expect(testString.truncate(25)).to.equal('the quick brown fox...', 'Incorrect truncate() functionality 2');
// expect(testString.truncate(43)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 3');
// expect(testString.truncate(45)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 4');

// let str = 'quick brown fox jumps over the lazy dog';
// str = str.ensureStart('the ');
// str = str.ensureStart('the ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox', 'quick', 'brown');
// str = String.format('jumps {0} {1}', 'dog');
