import React, { Component } from 'react'


class App extends Component {
     constructor() {
         super()
         this.state = {
            IsLoggedIn: false
         }
     }



    render() {
        let wordDisplay
        if (this.state.IsLoggedIn == true) {
              wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                 <h1>You are currently logged {wordDisplay} </h1>
            </div>
        )
    }
}



export default App
