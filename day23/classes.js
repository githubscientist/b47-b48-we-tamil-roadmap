// parent class
class Component {
    render() {
        console.log('render from Component');
    }
}

// let component = new Component();
// component.render();

// child class
class App extends Component {
    // method overriding
    render() {
        console.log('render from App');
    }
}

let app = new App();
app.render();
