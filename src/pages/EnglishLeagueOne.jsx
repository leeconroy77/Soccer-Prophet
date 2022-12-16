import { useState } from 'react';
import Select from 'react-select';
import {EnglishLeagueOneDirectory} from '../directories/Directory.englishLeagueOne';
import '../index.css'

const EnglishLeagueOne = () => {


  const formaton = [
    {value: "4231", label: "4231"}, {value: "442",label: "442"}, {value: "433", label: "433"}, {value: "451", label: "451"},{value: "352", label: "352"},{value: "343", label: "343"},{value: "532", label: "532"},{value: "541", label: "541"},
  ];

  const EnglishLeagueOneTeams = [
    {value: "Accrington", label: "Accrington"}, {value: "Barnsley",label: "Barnsley"}, {value: "Bolton", label: "Bolton"}, {value: "Bristol Rovers", label: "Bristol Rovers"}, {value: "Burton",label: "Burton"}, {value: "Cambridge Utd",label: "Cambridge Utd"}, {value: "Charlton",label: "Charlton"}, {value: "Cheltenham",label: "Cheltenham"}, {value: "Derby",label: "Derby"}, {value: "Exeter",label: "Exeter"},  {value: "Fleetwood",label: "Fleetwood"},{value: "Forest Green",label: "Forest Green"}, {value: "Ipswich",label: "Ipswich"},{value: "Lincoln",label: "Lincoln"},{value: "Morecambe",label: "Morecambe"}, {value: "MK Dons",label: "MK Dons"},{value: "Oxford Utd",label: "Oxford Utd"}, {value: "Peterborough",label: "Peterborough"}, {value: "Plymouth",label: "Plymouth"},{value: "Portsmouth",label: "Portsmouth"},{value: "Port Vale",label: "Port Vale"}, {value: "Sheff Wed",label: "Sheff Wed"}, {value: "Shrewsbury",label: "Shrewsbury"}, {value: "Wycombe",label: "Wycombe"}
  ]


  // INPUT 1

const [valueHome1, setvalueHome1 ] = useState("");
const [valueAway1, setvalueAway1 ] = useState("");
const [homeFormation1, setHomeFormation1 ] = useState("");
const [awayFormation1, setAwayFormation1 ] = useState("");
const [totalAvgHomeGoalsFormationStrategy125, setTotalAvgHomeGoalsFormationStrategy125 ] = useState(0);
const [totalAvgAwayGoalsFormationStrategy125, setTotalAvgAwayGoalsFormationStrategy125 ] = useState(0);
const [totalAvgHomeConcededFormationStrategy125, setTotalAvgHomeConcededFormationStrategy125 ] = useState(0);
const [totalAvgAwayConcededFormationStrategy125, setTotalAvgAwayConcededFormationStrategy125 ] = useState(0);
const [totalFormationSecondHalfGoalsHome125, setTotalFormationSecondHalfGoalsHome125] = useState(0);
const [totalFormationSecondHalfGoalsAway125, setTotalFormationSecondHalfGoalsAway125 ] = useState(0);
const [totalAvgHomeGoalsFormationStrategySecondHalfOvers, setTotalAvgHomeGoalsFormationStrategySecondHalfOvers ] = useState(0);
const [totalAvgAwayGoalsFormationStrategySecondHalfOvers, setTotalAvgAwayGoalsFormationStrategySecondHalfOvers ] = useState(0);
const [totalFormationSecondHalfGoalsHomeSecondHalfOvers, setTotalFormationSecondHalfGoalsHomeSecondHalfOvers] = useState(0);
const [totalFormationSecondHalfGoalsAwaySecondHalfOvers, setTotalFormationSecondHalfGoalsAwaySecondHalfOvers ] = useState(0);
const [totalAvgHomeGoalsFirstHalfFormation125, setTotalAvgHomeGoalsFirstHalfFormation125 ] = useState(0);
const [totalAvgHomeFirstHalfConcededFormation125, setTotalAvgHomeFirstHalfConcededFormation125 ] = useState(0);
const [totalAvgAwayGoalsHalfTimeFormationStrategy125, setTotalAvgAwayGoalsHalfTimeFormationStrategy125 ] = useState(0);
const [totalAvgAwayHalfTimeConcededFormation125, setTotalAvgAwayHalfTimeConcededFormation125 ] = useState(0);

  

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
  let firstHalf = false





  const handleSubmit = (e) => { 
    e.preventDefault();




// X firstHalfGoals //////////////////////////////////////////


   




const handleClickHomeformationFirsHalfGoals = (e) => {

  const avgHomeFirstHalfGoalsFormation125 = (totalAvgHomeGoalsFirstHalfFormation125) => {
    let avgHomeGoalsFormation = []

    EnglishLeagueOneDirectory.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.homeHalfTimeGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    // avgHomeGoalsFormation.reverse()
    console.log(avgHomeGoalsFormation);

    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 2)
    totalAvgHomeGoalsFirstHalfFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeGoalsFirstHalfFormation125(totalAvgHomeGoalsFirstHalfFormation125)
    console.log(`totalAvgHomeGoalsFirstHalfFormation125 = ${totalAvgHomeGoalsFirstHalfFormation125}`);
    
  }
  avgHomeFirstHalfGoalsFormation125()
}
handleClickHomeformationFirsHalfGoals()



const handleClickHomeFirstHalfformation125Conceded = (e) => {

  const avgHomeTotalFirstHalfConcededFormation125 = (totalAvgHomeFirstHalfConcededFormation125) => {
    let avgHomeGoalsFormation = []

    EnglishLeagueOneDirectory.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.awayHalfTimeGoals)
     
      console.log(avgHomeGoalsFormation);
    }})

    // avgHomeGoalsFormation.reverse()
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 2)
    totalAvgHomeFirstHalfConcededFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeFirstHalfConcededFormation125(totalAvgHomeFirstHalfConcededFormation125)
    console.log(`totalAvgHomeFirstHalfConcededFormation125 = ${totalAvgHomeFirstHalfConcededFormation125}`);
    
  }
  avgHomeTotalFirstHalfConcededFormation125()
}
handleClickHomeFirstHalfformation125Conceded()




const handleClickAwayFirsttHalfformation125 = (e) => {

  const avgAwayTotalHalfTimeGoalsFormation125 = (totalAvgAwayGoalsHalfTimeFormationStrategy125) => {
    let avgAwayGoalsFormation = []

    EnglishLeagueOneDirectory.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.awayHalfTimeGoals)
     
      console.log(avgAwayGoalsFormation);
    }})

    // avgAwayGoalsFormation.reverse()
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 2)
    totalAvgAwayGoalsHalfTimeFormationStrategy125 = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayGoalsHalfTimeFormationStrategy125(totalAvgAwayGoalsHalfTimeFormationStrategy125)
    console.log(`totalAvgAwayGoalsHalfTimeFormationStrategy125 = ${totalAvgAwayGoalsHalfTimeFormationStrategy125}`);
    
  }
  avgAwayTotalHalfTimeGoalsFormation125()
}
handleClickAwayFirsttHalfformation125()


const handleClickAwayHalfTimeformation125Conceded = (e) => {

  const avgAwayTotalHalfTimeConcededFormation125 = (totalAvgAwayHalfTimeConcededFormation125) => {
    let avgAwayGoalsFormation = []

    EnglishLeagueOneDirectory.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.homeHalfTimeGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    // avgAwayGoalsFormation.reverse()
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 2)
    totalAvgAwayHalfTimeConcededFormation125 = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayHalfTimeConcededFormation125(totalAvgAwayHalfTimeConcededFormation125)
    console.log(`totalAvgAwayHalfTimeConcededFormation125 = ${totalAvgAwayHalfTimeConcededFormation125}`);
    
  }
  avgAwayTotalHalfTimeConcededFormation125()
}
handleClickAwayHalfTimeformation125Conceded()















// OVER 2.5

  const handleClickHomeformation125 = (e) => {

    const avgHomeTotalGoalsFormation125 = (totalAvgHomeGoalsFormation125) => {
      let avgHomeGoalsFormation = []

      EnglishLeagueOneDirectory.map(match =>  {
      
      if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
        avgHomeGoalsFormation.push(match.homeGoals)
       
        console.log(avgHomeGoalsFormation);
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 2)
    totalAvgHomeGoalsFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeGoalsFormationStrategy125(totalAvgHomeGoalsFormation125)
      console.log(`totalAvgHomeGoalsFormation = ${totalAvgHomeGoalsFormation125}`);
      
    }
    avgHomeTotalGoalsFormation125()
  }
  handleClickHomeformation125()

  const handleClickHomeformation125Conceded = (e) => {

    const avgHomeTotalconcededFormation125 = (totalAvgHomeConcededFormation125) => {
      let avgHomeGoalsFormation = []

      EnglishLeagueOneDirectory.map(match =>  {
      
      if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
        avgHomeGoalsFormation.push(match.awayGoals)
       
        console.log(avgHomeGoalsFormation);
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 2)
      totalAvgHomeConcededFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeConcededFormationStrategy125(totalAvgHomeConcededFormation125)
      console.log(`totalAvgHomeConcededFormation125 = ${totalAvgHomeConcededFormation125}`);
      
    }
    avgHomeTotalconcededFormation125()
  }
  handleClickHomeformation125Conceded()




  const handleClickAwayformation125 = (e) => {

    const avgAwayTotalGoalsFormation125 = (totalAvgAwayGoalsFormationStrategy125) => {
      let avgAwayGoalsFormation = []

      EnglishLeagueOneDirectory.map(match =>  {
      
      if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
        avgAwayGoalsFormation.push(match.awayGoals)
       
        console.log(avgAwayGoalsFormation);
      }})
      console.log(avgAwayGoalsFormation);
      
      
      let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 2)
      totalAvgAwayGoalsFormationStrategy125 = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayGoalsFormationStrategy125(totalAvgAwayGoalsFormationStrategy125)
      console.log(`totalAvgAwayGoalsFormation = ${totalAvgAwayGoalsFormationStrategy125}`);
      
    }
    avgAwayTotalGoalsFormation125()
  }
  handleClickAwayformation125()


  const handleClickAwayformation125Conceded = (e) => {

    const avgAwayTotalConcededFormation125 = (totalAvgAwayConcededFormation125) => {
      let avgAwayGoalsFormation = []

      EnglishLeagueOneDirectory.map(match =>  {
      
      if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
        avgAwayGoalsFormation.push(match.homeGoals)
       
        console.log(avgAwayGoalsFormation);
      }})
      console.log(avgAwayGoalsFormation);
      
      
      let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 2)
      totalAvgAwayConcededFormation125 = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayConcededFormationStrategy125(totalAvgAwayConcededFormation125)
      console.log(`totalAvgAwayConcededFormation125 = ${totalAvgAwayConcededFormation125}`);
      
    }
    avgAwayTotalConcededFormation125()
  }
  handleClickAwayformation125Conceded()



// SECONDHALF OVERS

const handleClickHomeformationSecondHalfOvers = (e) => {

  const avgHomeTotalGoalsFormationSecondHalfOvers = (totalAvgHomeGoalsFormationSecondHalfOvers) => {
    let avgHomeGoalsFormation = []

    EnglishLeagueOneDirectory.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.totalGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
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

    EnglishLeagueOneDirectory.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.totalGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
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

  EnglishLeagueOneDirectory.map(match =>  {
  
  if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
    avgHomeGoalsSecondHalf.push(match.secondHalfGoals)
   
    console.log(avgHomeGoalsSecondHalf);
  }})
  console.log(avgHomeGoalsSecondHalf);
  
  
  let avgHomeGoalsFiltered = avgHomeGoalsSecondHalf.filter((el, i) => i < 3)
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

  EnglishLeagueOneDirectory.map(match =>  {
  
  if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
    avgAwayGoalsSecondHalf.push(match.secondHalfGoals)
   
    console.log(avgAwayGoalsSecondHalf);
  }})
  console.log(avgAwayGoalsSecondHalf);
  
  
  let avgHomeGoalsFiltered = avgAwayGoalsSecondHalf.filter((el, i) => i < 3)
  totalFormationSecondHalfGoalsAwaySecondHalfOvers = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalFormationSecondHalfGoalsAwaySecondHalfOvers(totalFormationSecondHalfGoalsAwaySecondHalfOvers)
  console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAwaySecondHalfOvers}`);
  
}
avgAwayTotalGoalsSecondHalfSecondHalfOvers()
}
handleClickAwaySecondHalfGoalsSecondHalfOvers()

console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAwaySecondHalfOvers}`);




  }
  

let homeStrengthOvers = (totalAvgHomeGoalsFormationStrategy125 + totalAvgAwayConcededFormationStrategy125) / 2
let awayStrengthOvers = (totalAvgAwayGoalsFormationStrategy125 + totalAvgHomeConcededFormationStrategy125) / 2

let homeStrengthHalfTime = (totalAvgHomeGoalsFirstHalfFormation125 + totalAvgAwayHalfTimeConcededFormation125) / 2
let awayStrengthHalfTime= (totalAvgAwayGoalsHalfTimeFormationStrategy125 + totalAvgHomeFirstHalfConcededFormation125) / 2

console.log(homeStrengthHalfTime);
console.log(awayStrengthHalfTime);


// let averageSeondHalfBothTeams125 = (totalFormationSecondHalfGoalsHome125 + totalFormationSecondHalfGoalsAway125) / 2




let averageFormationBothTeamsSecondHalfOvers = (totalAvgHomeGoalsFormationStrategySecondHalfOvers + totalAvgAwayGoalsFormationStrategySecondHalfOvers) / 2
let averageSeondHalfBothTeamsSecondHalfOvers = (totalFormationSecondHalfGoalsHomeSecondHalfOvers + totalFormationSecondHalfGoalsAwaySecondHalfOvers) / 2

console.log(averageFormationBothTeamsSecondHalfOvers);



if (isNaN(homeStrengthHalfTime) || isNaN(awayStrengthHalfTime)) {
  firstHalf = false
}
if((homeStrengthHalfTime > 0.99) && (homeStrengthHalfTime < 2) && ((awayStrengthHalfTime > 0.5)) &&(awayStrengthHalfTime < 1.3)){
  firstHalf = true
}
if((homeStrengthHalfTime > 0.5) && (homeStrengthHalfTime < 1) && ((awayStrengthHalfTime > 1)) &&(awayStrengthHalfTime < 2.01)){
  firstHalf = true
}




if (isNaN(homeStrengthOvers) || isNaN(awayStrengthOvers)) {
  oversStrat1 = false
} if ((homeStrengthOvers > 1.99) && (homeStrengthOvers < 3) && ((awayStrengthOvers > 0)) &&(awayStrengthOvers < 1.5)) {
  oversStrat1 = true
}
 if ((homeStrengthOvers > 1) && (homeStrengthOvers < 1.51) && ((awayStrengthOvers > 1.49)) &&(awayStrengthOvers < 3)) {
  oversStrat1 = true
}


if (isNaN(averageFormationBothTeamsSecondHalfOvers) || isNaN(averageSeondHalfBothTeamsSecondHalfOvers)) {
  secondHalfStrat1 = false
} else if ((totalFormationSecondHalfGoalsHomeSecondHalfOvers > 0.99) && (totalFormationSecondHalfGoalsHomeSecondHalfOvers < 3.01) && (totalFormationSecondHalfGoalsAwaySecondHalfOvers < 3.01) && (totalAvgHomeGoalsFormationStrategySecondHalfOvers > 2.99) && (totalAvgAwayGoalsFormationStrategySecondHalfOvers > 2.49)) {
  secondHalfStrat1 = true

}



  
console.log(secondHalfStrat1);
console.log(oversStrat1);
  

  return (
    <>
    <h1 className='h1'>English League One</h1>
    <form action="submit" onClick={handleSubmit}>
      <div className='form-container'>
        <div className="form-items" >
          <Select options={EnglishLeagueOneTeams} onChange={handleHomeTeamChange1} className="team-input" placeholder="Home Team" />
          <Select options={formaton} onChange={handleHomeFormationChange1} className="formation-input" placeholder="Formation"/>
          <Select options={EnglishLeagueOneTeams} onChange={handleAwayTeamChange1} className="team-input" placeholder="Away Team"/>
          <Select options={formaton} onChange={handleAwayFormationChange1} className="formation-input" placeholder="Formation"/>
          <div className='strategies'>
          {firstHalf && <div className='first-half-goal'>FHG</div>}
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

export default EnglishLeagueOne