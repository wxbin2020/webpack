import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    //  这是一行一定会出错的代码
    // (undefined).abc = 5;
  }

  render() {
    return (
      <div> 
        <p className="green-color">hello world 1</p>
        <p className="red-color">hello world 2</p>
      </div>
    )
  }
}

export default App