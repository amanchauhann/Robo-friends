import Main from "../Components/Main";
import Searchbox from "../Components/Searchbox";
// import { RobotList } from "./RobotList";
import { Component } from "react";
// import { RobotList } from "./RobotList";
import Scroll from "../Components/Scroll";
import './App.css';


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
        const { RobotList, searchfield} = this.state;
        const filteredRobots = RobotList.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !RobotList.length ?
        <h1 className="tc light-green">Umm, We are loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Scroll>
                    <Main RobotList={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}   
export default App;