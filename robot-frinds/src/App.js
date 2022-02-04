import Main from "./Main";
import Searchbox from "./Searchbox";
// import { RobotList } from "./RobotList";
import { Component } from "react";
// import { RobotList } from "./RobotList";
import Scroll from "./Scroll";

class App extends Component {
    constructor() {
        super()
        this.state = {
            RobotList: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users').then(response => response.json()).then  (users => this.setState({RobotList: users}))
    }

    onsearchchange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render(){
        const filteredRobots = this.state.RobotList.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.RobotList.length === 0) {
            return <h1 className="tc light-green">Umm, We are loading...</h1>
        } else {
            return (
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Scroll>
                    <Main RobotList={filteredRobots}/>
                </Scroll>
            </div>
    );
        }
    }
}   
export default App;