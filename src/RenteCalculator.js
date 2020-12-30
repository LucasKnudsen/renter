import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Graph from "./Graph.js"
import "./RenteCalculator.css"

class RenteCaculator extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            M: 0, 
            A : 0, 
            H : 0, 
            S : 0,
            hasCalculated: false, 
            hasUpdated : false, 
            results : [], 
            labels : []
        };
        this.handleChangeS = this.handleChangeS.bind(this);
        this.handleChangeM = this.handleChangeM.bind(this);
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeH = this.handleChangeH.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);


    }


    handleChangeS(event) {
        this.setState({S: event.target.value});
    }
    handleChangeM(event) {
        this.setState({M: event.target.value});
    }
    handleChangeA(event) {
        this.setState({A: event.target.value});
    }
    handleChangeH(event) {
        this.setState({H: event.target.value});
    }

    handleButtonClick(){
        let M = this.state.M
        let A = this.state.A
        let S = this.state.S
        let H = this.state.H

        if((M <= 0) ||  (H <= 0) || (S <= 0) || (A <= 0)){
            //TODO: make some error-handling 
            return -1
        }
        let M_num = parseFloat(M)
        let H_num = parseFloat(H)
        let S_num = parseFloat(S)
        let A_num = parseFloat(A)

        this.CalculateValues(M_num, H_num, S_num, A_num)
    }




    renderInput(){
        return(
            <div>
            <Grid container direction={"column"} spacing={4}>
                <Grid item>
                <TextField required id="standard-required" type="number" label="Startsbeløb (kr)" value={this.state.S} onChange={this.handleChangeS}
                />
                </Grid>
                <Grid item>
                <TextField required id="standard-required" type="number" label="Månedsopsparing (kr)" value={this.state.M} onChange={this.handleChangeM}
                />
                </Grid>
                <Grid item>
                <TextField required id="standard-required" type="number" label="Afkast (%)" value={this.state.A} onChange={this.handleChangeA}
                />
                </Grid>
                <Grid item>
                <TextField required id="standard-required" type="number" label="Horisont (år)" value={this.state.H} onChange={this.handleChangeH}
                />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <button className='SubmitButton' onClick={this.handleButtonClick}>Submit</button>
            </div>

        )
    }

    



    render(){
        return(
            <div>
                {this.renderInput()}
                <br/>
                <br/>
                {this.state.hasCalculated && (this.state.results.length > 0) ? 
                    <Graph data={this.state.results} labels={this.state.labels}/>: <text></text> }            
            </div>
        )
    }


    CalculateValues(M, H, S, A){
        let results = [] 
        let labels = []
        for (let i = 1; i < H + 1; i++) {
            let value = S * Math.pow((1 + (A/100)), i)

            results.push(value)
            labels.push(i.toString()+ " år")
        }
        this.setState({results : results})
        this.setState({labels : labels})

        this.setState({hasCalculated : true})

        console.log("hasCalculated: " + this.state.hasCalculated)
        //fejl den opdatere kun efter to klik???? 
    }

}
export default RenteCaculator