import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Home from './components/Home.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      view: 'home',
      index:0
    }
    this.changeView = this.changeView.bind(this);
    this.renderView= this.renderView.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  changeView(option) {
    this.setState({
      view: option
      
    });
  }

  renderView() {
    if (this.state.view === "home") {
      return (
        
        <Home  />
      );
    } else if (this.state.view === "list goals") {
      return <h1> <List items={this.state.items} /> </h1>;
    } 
    // else if (this.state.view === "createPost") {
    //   console.log(this.state.view,'check the state')

    //   return <div> <CreatePost/> </div>;
    // }
  }

  render () {
    return (
    // <div>
    //   <h1>Set up your daily goals to be more productive !!!</h1>
      <div>
        <div className="nav">
          <span className="logo">Goal Tracker</span>
          <span className={this.state.view === 'list goals'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('list goals')}>
           Check Your Goals
          </span>
          <span className={this.state.view === 'home'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('home')}>
           Set new Goal
          </span>
        </div>

        <div className="main">
          {/* {this.state.view === 'phrases'
            ? <PhraseList phrases={this.state.phrases} />
            : <Practice changePhrases={this.changePhrases} phrase={this.state.phrases[this.state.index]} />
          } */}
        </div>
        {/* <List items={this.state.items}/>  */}
        {this.renderView()}
      </div>)
     
    // </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));