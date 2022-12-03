import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            count:0,
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    compoentDidMount(){
      document.title=`Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
      document.title=`Clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
        <button onClick={this.increment}>count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
