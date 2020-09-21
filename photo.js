//Created by Grady Brown on 9/21/20

class Photo{
    constructor(width = 8, height = 10){
        this.height = height;
        this.width = width;
    }

    price(){
        if (this.width == 8 && this.height == 10){
            return 4;
        } else if (this.width == 10 && this.height == 12){
            return 6;
        } else{
            return 10;
        }
        
    }

    toString(){
        return 'This is a ' + this.width + ' by ' + this.height + ' photo and it costs ' + this.price();
    }
}

let photo1 = new Photo();
let photo2 = new Photo(10, 12);

console.log(photo1.toString());
console.log(photo2.toString());