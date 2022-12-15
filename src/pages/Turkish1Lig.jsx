import { useState } from 'react';
import Select from 'react-select';
import {Turkish1LigDirectory} from '../directories/Directory.turlish1Lig';
import '../index.css'

const Turkish1Lig = () => {


  const formaton = [
    {value: "4231", label: "4231"}, {value: "442",label: "442"}, {value: "433", label: "433"}, {value: "451", label: "451"},{value: "352", label: "352"},{value: "343", label: "343"},{value: "532", label: "532"},{value: "541", label: "541"},
  ];

  const Turkish1LigTeams = [
    {value: "Adanaspor", label: "Adanaspor"}, {value: "Altay",label: "Altay"}, {value: "Altinordu", label: "Altinordu"}, {value: "Bandirmaspor", label: "Bandirmaspor"}, {value: "Bodrumspor",label: "Bodrumspor"}, {value: "Boluspor",label: "Boluspor"}, {value: "Denizlispor",label: "Denizlispor"}, {value: "Erzurumspor",label: "Erzurumspor"}, {value: "Eyupspor",label: "Eyupspor"}, {value: "Genclerbirligi",label: "Genclerbirligi"}, {value: "Goztepe",label: "Goztepe"}, {value: "Keciorengucu",label: "Keciorengucu"}, {value: "Manisa FK",label: "Manisa FK"}, {value: "Pendikspor",label: "Pendikspor"}, {value: "Rizespor",label: "Rizespor"}, {value: "Sakaryaspor",label: "Sakaryaspor"}, {value: "Samsunspor",label: "Samsunspor"}, {value: "Tuzlaspor",label: "Tuzlaspor"}, {value: "Yeni Malatyaspor",label: "Yeni Malatyaspor"}, 
  ]
  


  // INPUT 1

const [valueHome1, setvalueHome1 ] = useState("");
const [valueAway1, setvalueAway1 ] = useState("");
const [homeFormation1, setHomeFormation1 ] = useState("");
const [awayFormation1, setAwayFormation1 ] = useState("");
const [totalAvgHomeGoalsFormationStrategy125, setTotalAvgHomeGoalsFormationStrategy125 ] = useState(0);
const [totalAvgAwayGoalsFormationStrategy125, setTotalAvgAwayGoalsFormationStrategy125 ] = useState(0);
const [totalFormationSecondHalfGoalsHome125, setTotalFormationSecondHalfGoalsHome125] = useState(0);
const [totalFormationSecondHalfGoalsAway125, setTotalFormationSecondHalfGoalsAway125 ] = useState(0);
const [totalAvgHomeGoalsFormationStrategySecondHalfOvers, setTotalAvgHomeGoalsFormationStrategySecondHalfOvers ] = useState(0);
const [totalAvgAwayGoalsFormationStrategySecondHalfOvers, setTotalAvgAwayGoalsFormationStrategySecondHalfOvers ] = useState(0);
const [totalFormationSecondHalfGoalsHomeSecondHalfOvers, setTotalFormationSecondHalfGoalsHomeSecondHalfOvers] = useState(0);
const [totalFormationSecondHalfGoalsAwaySecondHalfOvers, setTotalFormationSecondHalfGoalsAwaySecondHalfOvers ] = useState(0);

  

// INPUT 1

  const handleHomeTeamChange1 = (selectedOption) => {
    console.log("handleChangeTeam", selectedOption);
   return setvalueHome1(selectedOption.value)
  }
  const handleAwayTeamChange1 = (selectedOption) => {
    console.log("handleChangeTeam", selectedOption);
   return setvalueAway1(selectedOption.value)
  }
  
  
  
  const handleHomeFormationChange1 = (selectedOption) => {
    console.log("handleChangeFormation", selectedOption);
   return setHomeFormation1(selectedOption.value)
  }
  
  const handleAwayFormationChange1 = (selectedOption) => {
    console.log("handleChangeFormation", selectedOption);
   return setAwayFormation1(selectedOption.value)
  }


  let oversStrat1 = false
  let secondHalfStrat1 = false




  const handleSubmit = (e) => { 
    e.preventDefault();



// OVER 2.5

  const handleClickHomeformation125 = (e) => {

    const avgHomeTotalGoalsFormation125 = (totalAvgHomeGoalsFormation125) => {
      let avgHomeGoalsFormation = []

      Turkish1LigDirectory.map(match =>  {
      
      if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
        avgHomeGoalsFormation.push(match.totalGoals)
       
        console.log(avgHomeGoalsFormation);
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
    totalAvgHomeGoalsFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeGoalsFormationStrategy125(totalAvgHomeGoalsFormation125)
      console.log(`totalAvgHomeGoalsFormation = ${totalAvgHomeGoalsFormation125}`);
      
    }
    avgHomeTotalGoalsFormation125()
  }
  handleClickHomeformation125()

  const handleClickAwayformation125 = (e) => {

    const avgAwayTotalGoalsFormation125 = (totalAvgAwayGoalsFormation125) => {
      let avgAwayGoalsFormation = []

      Turkish1LigDirectory.map(match =>  {
      
      if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
        avgAwayGoalsFormation.push(match.totalGoals)
       
        console.log(avgAwayGoalsFormation);
      }})
      console.log(avgAwayGoalsFormation);
      
      
      let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
      totalAvgAwayGoalsFormation125 = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayGoalsFormationStrategy125(totalAvgAwayGoalsFormation125)
      console.log(`totalAvgAwayGoalsFormation = ${totalAvgAwayGoalsFormation125}`);
      
    }
    avgAwayTotalGoalsFormation125()
  }
  handleClickAwayformation125()



const handleClickHomeSecondHalfGoals125 = (e) => {

  const avgHomeTotalGoalsSecondHalf125 = (totalFormationSecondHalfGoalsHome125) => {
    let avgHomeGoalsSecondHalf = []

    Turkish1LigDirectory.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsSecondHalf.push(match.secondHalfGoals)
     
      console.log(avgHomeGoalsSecondHalf);
    }})
    console.log(avgHomeGoalsSecondHalf);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsSecondHalf.filter((el, i) => i < 5)
    totalFormationSecondHalfGoalsHome125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalFormationSecondHalfGoalsHome125(totalFormationSecondHalfGoalsHome125)
    console.log(`totalAvgHomeGoalsSecondHalf = ${totalFormationSecondHalfGoalsHome125}`);
    
  }
  avgHomeTotalGoalsSecondHalf125()
}
handleClickHomeSecondHalfGoals125()


const handleClickAwaySecondHalfGoals125 = (e) => {

  const avgAwayTotalGoalsSecondHalf125 = (totalFormationSecondHalfGoalsAway125) => {
    let avgAwayGoalsSecondHalf = []

    Turkish1LigDirectory.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsSecondHalf.push(match.secondHalfGoals)
     
      console.log(avgAwayGoalsSecondHalf);
    }})
    console.log(avgAwayGoalsSecondHalf);
    
    
    let avgHomeGoalsFiltered = avgAwayGoalsSecondHalf.filter((el, i) => i < 5)
    totalFormationSecondHalfGoalsAway125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalFormationSecondHalfGoalsAway125(totalFormationSecondHalfGoalsAway125)
    console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAway125}`);
    
  }
  avgAwayTotalGoalsSecondHalf125()
}
handleClickAwaySecondHalfGoals125()

console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAway125}`);


// SECONDHALF OVERS

const handleClickHomeformationSecondHalfOvers = (e) => {

  const avgHomeTotalGoalsFormationSecondHalfOvers = (totalAvgHomeGoalsFormationSecondHalfOvers) => {
    let avgHomeGoalsFormation = []

    Turkish1LigDirectory.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.totalGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 5)
  totalAvgHomeGoalsFormationSecondHalfOvers = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalAvgHomeGoalsFormationStrategySecondHalfOvers(totalAvgHomeGoalsFormationSecondHalfOvers)
    console.log(`totalAvgHomeGoalsFormation = ${totalAvgHomeGoalsFormationSecondHalfOvers}`);
    
  }
  avgHomeTotalGoalsFormationSecondHalfOvers()
}
handleClickHomeformationSecondHalfOvers()



const handleClickAwayformationSecondHalfOvers = (e) => {

  const avgAwayTotalGoalsFormationSecondHalfOvers = (totalAvgAwayGoalsFormationSecondHalfOvers) => {
    let avgAwayGoalsFormation = []

    Turkish1LigDirectory.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.totalGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 5)
    totalAvgAwayGoalsFormationSecondHalfOvers = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
  setTotalAvgAwayGoalsFormationStrategySecondHalfOvers(totalAvgAwayGoalsFormationSecondHalfOvers)
    console.log(`totalAvgAwayGoalsFormation = ${totalAvgAwayGoalsFormationSecondHalfOvers}`);
    
  }
  avgAwayTotalGoalsFormationSecondHalfOvers()
}
handleClickAwayformationSecondHalfOvers()



const handleClickHomeSecondHalfGoalsSecondHalfOvers = (e) => {

const avgHomeTotalGoalsSecondHalfSecondHalfOvers = (totalFormationSecondHalfGoalsHomeSecondHalfOvers) => {
  let avgHomeGoalsSecondHalf = []

  Turkish1LigDirectory.map(match =>  {
  
  if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
    avgHomeGoalsSecondHalf.push(match.secondHalfGoals)
   
    console.log(avgHomeGoalsSecondHalf);
  }})
  console.log(avgHomeGoalsSecondHalf);
  
  
  let avgHomeGoalsFiltered = avgHomeGoalsSecondHalf.filter((el, i) => i < 4)
  totalFormationSecondHalfGoalsHomeSecondHalfOvers = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
setTotalFormationSecondHalfGoalsHomeSecondHalfOvers(totalFormationSecondHalfGoalsHomeSecondHalfOvers)
  console.log(`totalAvgHomeGoalsSecondHalf = ${totalFormationSecondHalfGoalsHomeSecondHalfOvers}`);
  
}
avgHomeTotalGoalsSecondHalfSecondHalfOvers()
}
handleClickHomeSecondHalfGoalsSecondHalfOvers()


const handleClickAwaySecondHalfGoalsSecondHalfOvers = (e) => {

const avgAwayTotalGoalsSecondHalfSecondHalfOvers = (totalFormationSecondHalfGoalsAwaySecondHalfOvers) => {
  let avgAwayGoalsSecondHalf = []

  Turkish1LigDirectory.map(match =>  {
  
  if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
    avgAwayGoalsSecondHalf.push(match.secondHalfGoals)
   
    console.log(avgAwayGoalsSecondHalf);
  }})
  console.log(avgAwayGoalsSecondHalf);
  
  
  let avgHomeGoalsFiltered = avgAwayGoalsSecondHalf.filter((el, i) => i < 4)
  totalFormationSecondHalfGoalsAwaySecondHalfOvers = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalFormationSecondHalfGoalsAwaySecondHalfOvers(totalFormationSecondHalfGoalsAwaySecondHalfOvers)
  console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAwaySecondHalfOvers}`);
  
}
avgAwayTotalGoalsSecondHalfSecondHalfOvers()
}
handleClickAwaySecondHalfGoalsSecondHalfOvers()

console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAwaySecondHalfOvers}`);




  }
  

let averageFormationBothTeams125 = (totalAvgHomeGoalsFormationStrategy125 + totalAvgAwayGoalsFormationStrategy125) / 2
let averageSeondHalfBothTeams125 = (totalFormationSecondHalfGoalsHome125 + totalFormationSecondHalfGoalsAway125) / 2

console.log(averageFormationBothTeams125);

let averageFormationBothTeamsSecondHalfOvers = (totalAvgHomeGoalsFormationStrategySecondHalfOvers + totalAvgAwayGoalsFormationStrategySecondHalfOvers) / 2
let averageSeondHalfBothTeamsSecondHalfOvers = (totalFormationSecondHalfGoalsHomeSecondHalfOvers + totalFormationSecondHalfGoalsAwaySecondHalfOvers) / 2

console.log(averageFormationBothTeamsSecondHalfOvers);




if (isNaN(averageFormationBothTeams125) || isNaN(averageSeondHalfBothTeams125)) {
  oversStrat1 = false
} else if ((totalFormationSecondHalfGoalsHome125 > 0.99) && (totalFormationSecondHalfGoalsHome125 < 2.51) && ((totalFormationSecondHalfGoalsAway125 > 1)) &&(totalFormationSecondHalfGoalsAway125 < 2.51) && (averageFormationBothTeams125 > 2.49) && (averageFormationBothTeams125 < 5.01)) {
  oversStrat1 = true
}


if (isNaN(averageFormationBothTeamsSecondHalfOvers) || isNaN(averageSeondHalfBothTeamsSecondHalfOvers)) {
  secondHalfStrat1 = false
} else if ((totalFormationSecondHalfGoalsHomeSecondHalfOvers > 0.99) && (totalFormationSecondHalfGoalsHomeSecondHalfOvers < 2.01) && (totalFormationSecondHalfGoalsAwaySecondHalfOvers < 3.01) && (totalAvgHomeGoalsFormationStrategySecondHalfOvers > 1.49) && (totalAvgAwayGoalsFormationStrategySecondHalfOvers > 0.99)) {
  secondHalfStrat1 = true

}



  
console.log(secondHalfStrat1);
console.log(oversStrat1);
  

  return (
    <>
    <h1 className='h1'>Turkish 1 Lig</h1>
    <form action="submit" onClick={handleSubmit}>
      <div className='form-container'>
        <div className="form-items" >
          <Select options={Turkish1LigTeams} onChange={handleHomeTeamChange1} className="team-input" placeholder="Home Team" />
          <Select options={formaton} onChange={handleHomeFormationChange1} className="formation-input" placeholder="Formation"/>
          <Select options={Turkish1LigTeams} onChange={handleAwayTeamChange1} className="team-input" placeholder="Away Team"/>
          <Select options={formaton} onChange={handleAwayFormationChange1} className="formation-input" placeholder="Formation"/>
          <div className='strategies'>
          {oversStrat1 && <div className='overs'>Over 2.5</div>}
          {secondHalfStrat1 && <div className='second-half'>2nd Half</div>}
          </div>
        
        
        </div>
        {/* <div className="form-items" >
          <Select options={ChineseSuperLeagueTeams} onChange={handleHomeTeamChange1} className="team-input"/>
          <Select options={formaton} onChange={handleHomeFormationChange1} className="formation-input" />
        
          <Select options={ChineseSuperLeagueTeams} onChange={handleAwayTeamChange1} className="team-input"/>
          <Select options={formaton} onChange={handleAwayFormationChange1} className="formation-input" />
        </div> */}
        
      </div>
      <button className='button'>Submit</button>
    </form>
    <div className='scorelines'>
      Secondhalf Strategy Scorelines = 0-0, 1-0, 0-1
    </div>
    
    </>
  )
}

export default Turkish1Lig