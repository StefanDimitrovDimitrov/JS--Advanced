function dayOfWeek(string){
    let days_of_week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    if (days_of_week.includes(string)){
        
        result = days_of_week.indexOf(string) + 1
        return result;    
    }else{
        return "error";
    }
        
}


console.log(dayOfWeek("Invalid"));