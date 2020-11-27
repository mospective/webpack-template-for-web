export default class Say {
    constructor(greet) {
        this.greeting = greet;
    }

    greetCall() {
        // this.greeting = 'testing hello';
        console.log(this.greeting);
    }
}