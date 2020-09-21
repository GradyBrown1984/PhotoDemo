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

class MattedPhoto extends Photo{
    constructor(width, height, color){
        super(width,height);
        this.color = color;
    }

    price(){
        return super.price() + 10;
    }

    toString(){
        return 'This is a ' + this.width + ' by ' + this.height + ' matted ' + this.color + ' photo and it costs ' + this.price();
    }
}

class FramedPhoto extends Photo{
    constructor(width, height, material, style){
        super(width,height);
        this.material = material;
        this.style = style;
    }

    price(){
        return super.price() + 25;
    }

    toString(){
        return 'This is a ' + this.width + ' by ' + this.height + ' ' + this.material + ' framed photo. The style is ' + this.style + ' and it costs ' + this.price();
    }
}

export let photo1 = new Photo();
export let photo2 = new Photo(10, 12);
export let mattedPhoto1 = new MattedPhoto(8,10,'blue');
export let mattedPhoto2 = new MattedPhoto(12,15,'red');
export let framedPhoto1 = new FramedPhoto(10,12,'silver','modern');
export let framedPhoto2 = new FramedPhoto(9,12,'gold','classic');