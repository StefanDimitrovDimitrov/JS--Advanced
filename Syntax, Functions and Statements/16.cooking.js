function cooking(str1, str2, str3, str4, str5, str6){

    let number = Number(str1);
    let list = [str2, str3, str4, str5, str6]

    for (let i = 0; i < list.length; i++) {
        switch (list[i]){
            case "chop":
                number /= 2
                break;
            case "dice":
                number = Math.sqrt(number)
                break;
            case "spice":
                number ++
                break;
            case "bake":
                number *= 3
                break;
            case "fillet":
                number -= number * 0.2
                break;
        }
        console.log(number);
        
    }


}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')