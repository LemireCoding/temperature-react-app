import React, {Component } from 'react'
import axios from 'axios'

class TempList extends Component {
    constructor(props){
        super(props)
        this.state = {
            temps:[]
        }
    }


    componentDidMount(){
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('http://felixlabrie.pythonanywhere.com/temperatures')
        .then(response => {
            this.setState({
                temps: response.data
            })
            console.log(response.data);
        })
    }

    
    render(){
        return(
            <div style={{width:"100%"}}>
               
                    {this.state.temps.reverse().map(function(temp, i){
            return <div key={i} style={{backgroundColor:"grey", margin:"20px 5px 20px 5px", padding:"2em",borderRadius:"10px",boxShadow:"5px 5px 7px 0px #8A8A8A"}}>
                    <h1>{temp.datetime}</h1> 
                    <hr/>
                    <p style={{textAlign:"right",fontSize:"25px"}}>Humidity { temp.humidity} %</p> 
                    <p style={{textAlign:"right",fontSize:"25px"}}>Temperature in C : {temp.temp}</p>
                    </div>;
        })}
                  
            </div>
        );
    }
}
export default TempList