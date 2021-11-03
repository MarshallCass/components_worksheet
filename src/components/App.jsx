import React, {Component} from 'react';
import './App.css';
import TitleBar from './titlebar/TitleBar'
import DisplayName from './displayname/DisplayName';
import NameList from './namelist/NameList';
import AlertUser from './alertuser/AlertUser';
import SuperheroTable from './superherotable/SuperHeroTable'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"Reggie", 
            lastName: "White",
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            // superheroes = [
            //     {
            //         superheroId: 1,
            //         name: 'Batman',
            //         primaryAbility: 'Wealthy',
            //         secondarAbility: 'Rich'
            //     },
            //     {
            //         superheroId: 2,
            //         name: 'Superman',
            //         primaryAbility: 'Super strength',
            //         secondarAbility: 'Fly'
            //     },
            //     {
            //         superheroId: 3,
            //         name: 'Spiderman',
            //         primaryAbility: 'Spider senses',
            //         secondarAbility: 'Shoots web'
            //     }
            // ]
        };

    }
        




render(){
    return (
        <div className="container-fluid">
            <TitleBar />
            <DisplayName name={this.state} />
            <NameList listOfNames={this.state.names} /> 
            <AlertUser />
        </div>
    )
}
}

export default App;
