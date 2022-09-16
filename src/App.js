import { useState } from 'react';
import './App.css';

function App() {
  
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [BloodAlcohol, setBloodAlcohol] = useState(0)

  const calculate = (e) => {
    e.preventDefault()
      let result = 0
      let litres = bottles * 0.33
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let percentage = grams - (burning * time)

      if (gender === 'male'){
        result = percentage / (weight * 0.7)
      } else {
        result = percentage / (weight * 0.6)
      }
      setBloodAlcohol(result)

      /*if (result < 0.0){
        setBloodAlcohol(0)
      }*/
  }

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="man" onChange={e => setGender(e.target.value)} defaultChecked /><label>Male</label>
          <input type="radio" name="gender" value="woman"onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{BloodAlcohol}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
