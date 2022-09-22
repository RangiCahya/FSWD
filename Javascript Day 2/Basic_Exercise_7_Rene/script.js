function getBox (width, height, depth){
        let area = width*height ;
        let volume = width*height*depth ;
    
        return `The area of the box is: ${area}
        The volume of the box is: ${volume}`;
    }
    console.log(getBox (2,7,5));
