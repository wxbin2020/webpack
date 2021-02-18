import React from 'react'
import './App.css'
// import './assets/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.less'

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
        <p className="less-black">查看 less 文件的支持</p>
        <section className="pic-back"></section>
        <br/>
        <button className="btn btn-primary glyphicon glyhpicon-qrcode">按钮</button>
      </div>
    )
  }
}

export default App