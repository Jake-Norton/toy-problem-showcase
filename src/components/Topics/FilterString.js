import React, {Component} from 'react';

export default class FilterString extends Component {
    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }

    constructor () {
        super ();

        this.state = {
            unFilteredArray: ['Wally', 'Thomas', 'Sammy', 'Norman', 'Susie', 'Jack', 'Shawn', 'Joey', 'Grant', 'Henry', 'Bertrum', 'Lacie', 'Emma'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange (val) {
        this.setState ({userInput: val});
    }

    filterNames (userInput) {
        let arr = this.state.names;
        let output = [];
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(userInput)) {
                output.push(arr[i]);
            }
        };
    }
}