import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Home from './components/Home.jsx'
import MyGoal from './components/MyGoal.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      view: 'list goals',
      index:0,
      goal:''
    }
    this.changeView = this.changeView.bind(this);
    this.renderView= this.renderView.bind(this);
    this.getGoals =  this.getGoals.bind(this)
    this.getClickedGoal = this.getClickedGoal.bind(this)
  }

  getGoals(){
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
  getClickedGoal(goal){
    this.setState({
      goal,
      view:"my goal"
    })
  }

  componentDidMount() {
    this.getGoals()
  }

  changeView(option) {
    this.setState({
      view: option
      
    });
  }

  renderView() {
    if (this.state.view === "create goal") {
      return (
        
        <Home  />
      );
    } else if (this.state.view === "list goals") {
      return <h1> <List items={this.state.items} getClickedGoal={this.getClickedGoal} /> </h1>;
    } 
    else if (this.state.view === "my goal") {
      console.log(this.state.view,'check the state')

      return <div> <MyGoal goal = {this.state.goal}/> </div>;
    }
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
          <span className={this.state.view === 'create goal'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('create goal')}>
           Set new Goal
          </span>
          <span className={this.state.view === 'create goal'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('my goal')}>
           my Goal
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