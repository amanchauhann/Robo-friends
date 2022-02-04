import Main from "./Main";
import Searchbox from "./Searchbox";
import { RobotList } from "./RobotList";
import { Component } from "react";

class App extends Component {
    constructor() {
        super()
        this.state = {
            RobotList: RobotList,
            searchfield: ''
        }
    }
    onsearchchange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render(){
        const filteredRobots = this.state.RobotList.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Main RobotList={filteredRobots}/>
            </div>
    );
    }
    
}   

export default App;