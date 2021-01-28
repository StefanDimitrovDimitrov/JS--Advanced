function solution(arr){
    result = []
    
    arr.forEach((pair) =>{
    [command, string] = pair.split(" ")
        return obj(command,string)
    })

    function obj(command, string) {
        if (command == "add"){
            result.push(string)
        }else if(command == "remove"){
            result = result.filter((i) => i !== string)
        }else{
            console.log(result.join(','))
        }
    }
}


solution(['add pesho', 'add george', 'add peter', 'remove peter','print'])

