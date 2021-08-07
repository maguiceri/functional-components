import React from 'react';



class InputMirror extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            firstInput: "",
            secondInput: "",
            showValue:false
        };
    }
    handleFirstInput(e) {
        this.setState({
            firstInput: e.target.value
        });
    }
    handleSecondInput(e){
        this.setState({
            secondInput: e.target.value
        })
    }
    handleClick(){
        this.setState({
            showValues:true
        })
    }


    render() {
        return (
        <>
        <input type="text" onChange={(e) => this.handleFirstInput(e)}></input>
        <input type="text"  onChange={(e) => this.handleSecondInput(e)}/>
        <button onClick={() => this.handleClick()}>Copiar</button>
        {this.state.showValues && (
            <>
            <p>{this.state.firstInput}</p>
            <span>{this.state.secondInput}</span>
            </>
        )}
        </>
        )
    }
}

export default InputMirror;