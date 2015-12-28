import React from 'react';
import ReactDOM from 'react-dom';
//Class component
//Can have state
class App extends React.Component{
    //Provide a constructor for the state
    constructor(){
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this)
    }
    //Profide a manager for the state
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }
    render(){
        // JSX-ified type, props, innerhtml
        //return React.createElement('h1', null, 'Hello Again World!') 
        //let txt = this.props.txt
        return (
            <div>
                <Button>React</Button>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
                <br />
            </div>
        );
    }
}

//When one component renders another component - Owner Ownee relationship
//The parent component is also called a composite component
//const Widget = (props) => { 
//    return (
//            <div>
//                <input type="text" onChange={props.update} />
//                <h1>{props.txt}</h1>
//            </div>
//    )
//}

//Refs don't work with stateless function components
//Refs are used access specific referneces to individual components
class Slider extends React.Component{
    render(){
        return (
            <div>
            <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
            </div>
        )
    }
}

// this.props.children accesses inner html, any const is a prop child by default
class Button extends React.Component {
    render(){
        return <button>{this.props.children}</button>
    }
}

//Props are supposed to be passed into methods as
//static variables or methods
//State is a collection of values that is meant 
//to be managed by the component itself

App.propTypes = {
    txt: React.PropTypes.string,
}

App.defaultProps = {
    txt: "Default Text"
}
//Stateless function component
//Cannot have state
//const App = () => <h1>Hello World</h1>

//Pass values into component using props
//Like passing an attribute to a regular html element
//Access this prop by interpolating this
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

export default App

