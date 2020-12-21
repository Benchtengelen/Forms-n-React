import React, { Component } from 'react'

class App extends Component {
 /* constructor() {
    super()
    this.state = {}
    this.clickHandler = this.clickHandler.bind(this)

    
  } */



  state={
    name: "Feyyaz Yılmaz",
    state: "offline"
  }

  clickHandler = (e) => {
    console.log('Butona tıklandı')
    console.log(e.target)
    this.setState({
      state:'offline'
    })
  }


  changeHandler = (e) => {
   // console.log(e.target)
    this.setState({
      state: e.target.value

    })

  }
  changeNameHandler = (e) => {
    this.setState({
    name: e.target.value

    })

  }

 

  render() {
    const {name, state} = this.state;
    return (
      <div>
        <h1>Adı: {name}</h1>
        <h3>Durum: {state}</h3>

        <button onClick={this.clickHandler}>Durum değiştir</button>
        
        <select name="state" id="state" onChange={this.changeHandler} value={state}>
          <option value="online">online</option>
          <option value="offline">offline</option>
          <option value="busy">busy</option>

        </select>
        <br/>
       <input type="text" name="name" onChange={this.changeNameHandler}/>
      </div>
   
    )
  }
}

export default App
