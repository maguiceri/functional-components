import React from 'react';

class Sum extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstInput:0,
            secondInput:0,
            result:0
        };
    }
    
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleClick() {
        const {firstInput, secondInput} = this.state
        this.setState({
            result: +firstInput + +secondInput
        })
    }
    
    render(){
        const {result} = this.state
        return(
            <div>
                <input name="firstInput" type="text" onChange={(e) => this.handleChange(e)}></input>
                <input name="secondInput" type="text" onChange={(e) => this.handleChange(e)}></input>
                <button onClick={() => this.handleClick()}>Sumar</button>
                <p>La suma es: {result}</p>
            </div>
        )
    }
}

export default Sum;