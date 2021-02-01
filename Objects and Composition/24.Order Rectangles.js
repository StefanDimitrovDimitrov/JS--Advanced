// You will be passed a few pairs of widths and heights of rectangles, create objects to represent the rectangles. The objects should additionally have two functions area - that returns the area of the rectangle and compareTo - that compares the current rectangle with another and produces a number signifying if the current rectangle is smaller (negative number), equal (0) or larger (positive number) than the other rectangle. 
// Input
// The input will come as an array of arrays - every nested array will contain exactly 2 numbers the width and the height of the rectangle.
// Output
// The output must consist of an array of rectangles (objects) sorted by their area in descending order as a first criteria and by their width in descending order as a second criteria.  
// Input
// [[10,5],[5,12]]

function solve(input){

    let result = input
        .map(([width,height]) => ({
            width,
            height,
            area: () => width * height,
            compareTo(rect){
                let result = rect.area() - this.area();

                return result == 0
                    ? rect.width - this.width
                    : result
            }
        }))
        .sort((a,b)=> a.compareTo(b));

    console.log(result)

}


solve([[10,5],[5,12]])