import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
        })
    }
    render(){
        return (
            <div>
                <NumInput ref="red" 
                min={0}
                max={255}
                step={1}
                val={+this.state.red}
                label="Red"
                type="range"
                update={this.update} />
            </div>
        );
    }
}

class NumInput extends React.Component {
    render(){
        let label = this.props.label !== '' ?
            <label> {this.props.label} - {this.props.val} </label>: ''
        return (
                <div> 
                    <input
                        ref="inp" 
                        type={this.props.type}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        defaultValue={this.props.val}
                        onChange={this.props.update}/>
                        {label}
                </div>
                )
    }
}
NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    val: React.PropTypes.number,
    step: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
}

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

export default App

