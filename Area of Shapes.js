function circle(radius){
    return 2*3.14*radius;
}

function rectangle(length,breadth){
    return length*breadth;
}

function square(length){
    return length*length;
}
 function triangle(base,height){
     return 0.5*base*height;
 }
 function polygon(numOfSide,length){
     return numOfSide*length
 }
 function kite(length,height){
    return (length*height)/2
}

let shapes=window.prompt("Enter shape circle,rectangle,square,triangle,polygon,kite")



if (shapes=="circle"){
    let radius =parseFloat(window.prompt("Enter radius:"))
    document.write("Area of circle is 2*3.14*radis and its area value is:"+" "+circle(radius))
}else if(shapes=="rectangle"){
    let length=parseFloat(window.prompt("Enter length:"))
    let breadth=parseFloat(window.prompt("Enter Breadth:"))
    document.write("Area of rectangle is length*breadth and its area value is:"+" "+rectangle(length,breadth))
}else if(shapes=="square"){
    let length=parseFloat(window.prompt("Enter length:"))
    document.write("Area of square is length*length and its area value is:"+" "+square(length))
}else if(shapes=="triangle"){
    let height=parseFloat(window.prompt("Enter the Height:"))
    let base = parseFloat(window.prompt("Enter the base:"))
    document.write("Area of triangle is 0.5*base*height and its area value is:"+" "+triangle(base,height))
}else if(shapes=="polygon"){
    let numOfSide=parseFloat(window.prompt("Enter the noOfSide:"))
    let length=parseFloat(window.prompt("Enter length:"))
    document.write("Area of polygon is numOfSide*length and its area value is:"+" "+polygon(numOfSide,length))
}else if(shapes=="polygon"){
    let length=parseFloat(window.prompt("Enter length:"))
    let height=parseFloat(window.prompt("Enter the Height:"))
    document.write("Area of kite is (length*height)/2 and its area value is:"+" "+kite(length,height))
}else{
    document.write("Invalid keyword")
}