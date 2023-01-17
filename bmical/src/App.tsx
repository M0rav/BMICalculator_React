import React, { ChangeEvent, Component } from "react";
import "./App.css";
interface State{
  height: number;
  weight: number;
  bmiCalculation: number,
  idealBmiCalc: number,
  minNormalWeight: number,
  maxNormalWeight: number,

}
class App extends Component<{}, State>{
  constructor(props:{}){
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmiCalculation: 0,
      idealBmiCalc: 0,
      minNormalWeight: 0,
      maxNormalWeight: 0,
    }
  }
  weightInput =(e: ChangeEvent)=>{
    this.setState({
      weight: parseInt((e.currentTarget as HTMLInputElement).value)
    })
  }
  heightInput =(e: ChangeEvent)=>{
    this.setState({
      height: parseInt((e.currentTarget as HTMLInputElement).value)
    })
    this.setState({
      minNormalWeight: (18.5 * ((this.state.height / 100) **2)) *100
    })
    this.setState({
      maxNormalWeight:(25 * ((this.state.height/100)**2))* 100
    })
  }
  calculateOut =()=>{
    this.setState({
      bmiCalculation: (this.state.weight/(this.state.height/100)**2)
    })
   
    this.setState({
      idealBmiCalc:((this.state.maxNormalWeight + this.state.minNormalWeight) / 2)
    })
  }


render() {
  return <div>  

   
      <div id="headerPart" >
        <p><label htmlFor="CalculateWight">Add meg hány kiló vagy!</label>
        <input type="number" onChange={this.weightInput}/>
        </p>
        <p>
        <label htmlFor="">Add meg hány centi magas vagy!</label>
        <input type="number" onChange={this.heightInput}/>
        </p>
        <button onClick={this.calculateOut}>számítás</button>
      </div>

    <p id="yoursbmi">Az ön BMI értéke: {this.state.bmiCalculation.toFixed(2)}</p>
    <div>
      <table>
        <tr className={this.state.bmiCalculation <= 18.5 ? "whichorange" : ""}>
          <td>18,5 vagy kevesebb</td>
          <td>SOVÁNY</td>
        </tr >
        <tr className={this.state.bmiCalculation > 18.5 && this.state.bmiCalculation <= 24.9 ? "whichorange" : "" }>
        <td>18,5 - 24,9</td>
        <td>NORMÁL</td>
        </tr>
        <tr className={this.state.bmiCalculation >= 25 && this.state.bmiCalculation <= 29.9 ? "whichorange" : "" }>
        <td>25 - 29,9</td>
        <td>Túlsúly</td>
        </tr>
        <tr className={this.state.bmiCalculation >= 30 && this.state.bmiCalculation <= 34.9 ? "whichorange" : "" }>
        <td>
          30 - 34,9
        </td>
        <td>
          I Fokú elhízás
        </td>
        </tr>
        <tr className={this.state.bmiCalculation >= 35 && this.state.bmiCalculation <= 39.9 ? "whichorange" : "" }>
        <td>35 - 39,9</td>
        <td>
          II. FOKÚ ELHÍZÁS
        </td>
        </tr>
        <tr className={this.state.bmiCalculation > 40 ? "whichorange" : "" }>
        <td>40 vagy több</td>
        <td>
          III. FOKÚ ELHíZÁS
        </td>
        </tr>
      </table>
    </div>
    <div>
      <p>Az ön ideális testömege: {this.state.idealBmiCalc.toFixed(2)}</p>
    </div>
    <div>
      <p>A minimális szélsőérték: {this.state.minNormalWeight.toFixed(2)}</p>
      <p>A maximális szélsőérték: {this.state.maxNormalWeight.toFixed(2)}</p>
    </div>
    </div>
}
}
export default App;
