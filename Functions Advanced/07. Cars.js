function solution(arr){
    obj = []
    arr.forEach((pair) =>{
        [command1, string1, command2, string2,] = pair.split(" ")
            return result(command1, string1,command2, string2,)
        })
    
        function result(command1, string1,command2, string2,) {
            if (command1 == "create"){
                string1 = {}
                obj.push(string1)
                if(command2){
                string2 = Object.create(obj[0])    
                }
            }else if(command1 == "set"){
                obj.push(obj[0][command2] = string2)
            }else{
                console.log(result.join(','))
            }
        }

}

solution(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)