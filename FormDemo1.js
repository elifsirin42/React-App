import React, { Component } from 'react';

class FormDemo1 extends Component {
    state = {userName:''}
    onChangeHandler = (event) =>{
        this.setState({userName:event.target.value})
    }
    render() {
        return (
            <div>
                <form>
                    <h3>User Name</h3>
                    <input onChange={this.onChangeHandler} type = "text"></input>
                    <h3>User Name is {this.state.userName} </h3>
                </form>
            </div>
        );
    }
}

export default FormDemo1;