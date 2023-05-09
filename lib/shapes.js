class Shapes {
    constructor() {

    }
    render(){
        return new Error("No shape selected!")
    }
}

class Circle extends Shapes {

    render() {
        return `<circle cx="150" cy="100" r="80" fill="green"/>`
    }
}

class Triangle extends Shapes {

    render() {
        return `<polygon points="25 160, 150 10, 275 160" stroke="green" fill="transparent" stroke-width="5"/>`
    }
}

class Square extends Shapes {

    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="green"/>`
    }

}