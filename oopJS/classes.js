class Bike {
    static whatIsThis = 'This is a bike'

    constructor(options) {
        this.name = options.name
        this.hasWheels = options.hasWheels
        this.color = options.color
    }

    noise() {
        console.log('Whee whee')
    }
    get getName() {
        return this.name
    }
    set setColor(newColor) {
        this.color = newColor
    }
}

const bike = new Bike({
    name: 'Arizona',
    hasWheels: true,
    color: "black"
})

console.log(bike)
bike.noise()
console.log(Bike.whatIsThis)
console.log(bike.getName)

bike.setColor = 'red'

class Car extends Bike {
    constructor(options) {
        super(options)
        this.amountOfWheels = options.amountOfWheels
    }
    noise() {
        console.log('Wroom Wroom')
    }
    set carName(newCarName) {
        this.name = newCarName
    }
    get carColor() {
        return this.color
    }
}
const car = new Car({
    name: "Audi",
    hasWheels: true,
    color: 'red',
    amountOfWheels: 4
})

console.log(car)
car.noise()
car.carName = 'Mazeratti'
console.log(car.name)
console.log(car.carColor)
