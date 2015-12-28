import React from 'react';
import ReactDOM from 'react-dom';
//Class component
//Can have state

class App extends React.Component{
    //Provide a constructor for the state
    constructor(){
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this);
    }

    update(){
        this.setState({val: this.state.val + 1})
    }

    // Dont have access to the DOM but can change state
    componentWillMount(){
        this.setState({m: 2})
    }

    render(){
        console.log('rendering')
        return <button onClick={this.update}>{this.state.val}</button>
    }


    // Have access to the DOM
    componentDidMount(){
        console.log('mounted')
        this.inc = setInterval(this.update, 500)
    }
    componentWillUnmount(){
        clearInterval(this.inc)
    }

    //Component Life cycle update methods

    //Optimize your component and don't rerender if you don't need to
    shouldComponentUpdate(nextProps, nextState)
    {
        return nextState.val % 5 === 0
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log(prevState)
    }
}

class Wrapper extends React.Component{
    constructor()
    {
        super();
    }
    mount() {
        console.log('mounting')
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    unmount() {
        console.log('unmounting')
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
                <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id='a'></div>
                </div>
        )
    }
}

//Pass values into component using props
//Like passing an attribute to a regular html element
//Access this prop by interpolating this
//ReactDOM.render(
//    <App />,
//    document.getElementById('app')
//);

export default Wrapper 

