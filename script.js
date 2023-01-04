
const btn = document.querySelector(".btn");

class transport {
    constructor(name, color) {
        this.color = color;
        this.name = name;
    }

    move(){
        console.log(`trrrrrrrrrrrrrrr`)
    }
}

class car extends transport{
    constructor(name, color, type) {
        super(name, color);
        this.type = type;
    }

    static move() {
        console.log(`tytytytytytt`)
    }
}

const mazBlue = new car(`Maz`,`blue`, `truck`)

function showMessage() {
    console.log(mazBlue);
    console.log(car.move());
}

btn.addEventListener(`click`, showMessage)