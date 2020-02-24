import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Category from './components/Category'


class App extends React.Component {

  state = {
    currentComponent: 'main',
    currentCategory: ''
  }

  constructor(props) {
    super(props);
  }

  handler = (component, category) => {
    this.setState({
      currentComponent: component,
      currentCategory: category
    })
  }


  getComponent() {
    let component;
    switch (this.state.currentComponent) {
      case 'main':
        component = <Main/>;
        break;
      case 'category':
        component = <Category chosenCategory={this.state.currentCategory} />;
        break;
    }
    return component;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar handler={this.handler}/>
          {this.getComponent()}
          <Footer/>
        </header>
        
      </div>
    );
  }
}
export default App;
