import { useState } from 'react';
import Select from 'react-select';
import {EnglishLeagueOneDirectory} from '../directories/Directory.englishLeagueOne';
import '../index.css'

const EnglishLeagueOne = () => {

  const leagueName = EnglishLeagueOneDirectory

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

// OVER 2.5
const [totalAvgHomeGoalsFormationOvers, setTotalAvgHomeGoalsFormationOvers ] = useState(0);
const [totalAvgAwayGoalsFormationOvers, setTotalAvgAwayGoalsFormationOvers ] = useState(0);
const [totalAvgHomeConcededFormationOvers, setTotalAvgHomeConcededFormationOvers ] = useState(0);
const [totalAvgAwayConcededFormationOvers, setTotalAvgAwayConcededFormationOvers ] = useState(0);


// LTD
const [totalAvgHomeGoalsFormationLtd, setTotalAvgHomeGoalsFormationLtd ] = useState(0);
const [totalAvgAwayGoalsFormationLtd, setTotalAvgAwayGoalsFormationLtd ] = useState(0);
const [totalAvgHomeConcededFormationLtd, setTotalAvgHomeConcededFormationLtd ] = useState(0);
const [totalAvgAwayConcededFormationLtd, setTotalAvgAwayConcededFormationLtd ] = useState(0);



// SHG

const [totalAvgHomeGoalsFormationOversSh, setTotalAvgHomeGoalsFormationOversSh ] = useState(0);
const [totalAvgAwayGoalsFormationOversSh, setTotalAvgAwayGoalsFormationOversSh ] = useState(0);
const [totalAvgHomeConcededFormationOversSh, setTotalAvgHomeConcededFormationOversSh ] = useState(0);
const [totalAvgAwayConcededFormationOversSh, setTotalAvgAwayConcededFormationOversSh ] = useState(0);

const [totalAvgHomeGoalsSecondHalfFormation125, setTotalAvgHomeGoalsSecondHalfFormation125 ] = useState(0);
const [totalAvgAwayGoalsSecondHalfFormation125, setTotalAvgAwayGoalsSecondHalfFormation125 ] = useState(0);


  

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


  let oversStrat = false
  let secondHalfStrat = false
  let ltdStrat = false





  const handleSubmit = (e) => { 
    e.preventDefault();

// /// LTD //////////



const handleClickHomeformationLtd = (e) => {

  const avgHomeTotalGoalsFormationLtd = (totalAvgHomeGoalsFormationLtd) => {
    let avgHomeGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.homeGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 2)
    totalAvgHomeGoalsFormationLtd = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalAvgHomeGoalsFormationLtd(totalAvgHomeGoalsFormationLtd)
    console.log(`totalAvgHomeGoalsFormation = ${totalAvgHomeGoalsFormationLtd}`);
    
  }
  avgHomeTotalGoalsFormationLtd()
}
handleClickHomeformationLtd()

const handleClickHomeformationLtdConceded = (e) => {

  const avgHomeTotalconcededFormationLtd = (totalAvgHomeConcededFormationLtd) => {
    let avgHomeGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.awayGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 2)
    totalAvgHomeConcededFormationLtd = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeConcededFormationLtd(totalAvgHomeConcededFormationLtd)
    console.log(`totalAvgHomeConcededFormation125 = ${totalAvgHomeConcededFormationLtd}`);
    
  }
  avgHomeTotalconcededFormationLtd()
}
handleClickHomeformationLtdConceded()




const handleClickAwayformationLtd = (e) => {

  const avgAwayTotalGoalsFormationLtd = (totalAvgAwayGoalsFormationLtd) => {
    let avgAwayGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.awayGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 2)
    totalAvgAwayGoalsFormationLtd = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayGoalsFormationLtd(totalAvgAwayGoalsFormationLtd)
    console.log(`totalAvgAwayGoalsFormation = ${totalAvgAwayGoalsFormationLtd}`);
    
  }
  avgAwayTotalGoalsFormationLtd()
}
handleClickAwayformationLtd()


const handleClickAwayformationLtdConceded = (e) => {

  const avgAwayTotalConcededFormationLtd = (totalAvgAwayConcededFormationLtd) => {
    let avgAwayGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.homeGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 2)
    totalAvgAwayConcededFormationLtd = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayConcededFormationLtd(totalAvgAwayConcededFormationLtd)
    console.log(`totalAvgAwayConcededFormation125 = ${totalAvgAwayConcededFormationLtd}`);
    
  }
  avgAwayTotalConcededFormationLtd()
}
handleClickAwayformationLtdConceded()











// OVER 2.5 /////////

  const handleClickHomeformationOvers = (e) => {

    const avgHomeTotalGoalsFormationOvers = (totalAvgHomeGoalsFormationOvers) => {
      let avgHomeGoalsFormation = []

      leagueName.map(match =>  {
      
      if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
        avgHomeGoalsFormation.push(match.homeGoals)
       
        console.log(avgHomeGoalsFormation);
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
      totalAvgHomeGoalsFormationOvers = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeGoalsFormationOvers(totalAvgHomeGoalsFormationOvers)
      console.log(`totalAvgHomeGoalsFormation = ${totalAvgHomeGoalsFormationOvers}`);
      
    }
    avgHomeTotalGoalsFormationOvers()
  }
  handleClickHomeformationOvers()

  const handleClickHomeformationOversConceded = (e) => {

    const avgHomeTotalconcededFormationOvers = (totalAvgHomeConcededFormationOvers) => {
      let avgHomeGoalsFormation = []

      leagueName.map(match =>  {
      
      if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
        avgHomeGoalsFormation.push(match.awayGoals)
       
        console.log(avgHomeGoalsFormation);
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
      totalAvgHomeConcededFormationOvers = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
      setTotalAvgHomeConcededFormationOvers(totalAvgHomeConcededFormationOvers)
      console.log(`totalAvgHomeConcededFormation125 = ${totalAvgHomeConcededFormationOvers}`);
      
    }
    avgHomeTotalconcededFormationOvers()
  }
  handleClickHomeformationOversConceded()




  const handleClickAwayformationOvers = (e) => {

    const avgAwayTotalGoalsFormationOvers = (totalAvgAwayGoalsFormationOvers) => {
      let avgAwayGoalsFormation = []

      leagueName.map(match =>  {
      
      if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
        avgAwayGoalsFormation.push(match.awayGoals)
       
        console.log(avgAwayGoalsFormation);
      }})
      console.log(avgAwayGoalsFormation);
      
      
      let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
      totalAvgAwayGoalsFormationOvers = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
      setTotalAvgAwayGoalsFormationOversSh(totalAvgAwayGoalsFormationOvers)
      console.log(`totalAvgAwayGoalsFormation = ${totalAvgHomeConcededFormationOversSh}`);
      
    }
    avgAwayTotalGoalsFormationOvers()
  }
  handleClickAwayformationOvers()


  const handleClickAwayformationOversConceded = (e) => {

    const avgAwayTotalConcededFormationOvers = (totalAvgAwayConcededFormationOvers) => {
      let avgAwayGoalsFormation = []

      leagueName.map(match =>  {
      
      if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
        avgAwayGoalsFormation.push(match.homeGoals)
       
        console.log(avgAwayGoalsFormation);
      }})
      console.log(avgAwayGoalsFormation);
      
      
      let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
      totalAvgAwayConcededFormationOvers = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
      setTotalAvgAwayConcededFormationOvers(totalAvgAwayConcededFormationOvers)
      console.log(`totalAvgAwayConcededFormation125 = ${totalAvgAwayConcededFormationOvers}`);
      
    }
    avgAwayTotalConcededFormationOvers()
  }
  handleClickAwayformationOversConceded()









// SECONDHALF OVERS



const handleClickHomeformationOversSh = (e) => {

  const avgHomeTotalGoalsFormationOversSh = (totalAvgHomeGoalsFormationOversSh) => {
    let avgHomeGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.homeGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
    totalAvgHomeGoalsFormationOversSh = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalAvgHomeGoalsFormationOversSh(totalAvgHomeGoalsFormationOversSh)
    console.log(`totalAvgHomeGoalsFormationOversSh = ${totalAvgHomeGoalsFormationOversSh}`);
    
  }
  avgHomeTotalGoalsFormationOversSh()
}
handleClickHomeformationOversSh()




const handleClickHomeformationOversConcededSh = (e) => {

  const avgHomeTotalconcededFormationOversSh = (totalAvgHomeConcededFormationOversSh) => {
    let avgHomeGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsFormation.push(match.awayGoals)
     
      console.log(avgHomeGoalsFormation);
    }})
    console.log(avgHomeGoalsFormation);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
    totalAvgHomeConcededFormationOversSh = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeConcededFormationOversSh(totalAvgHomeConcededFormationOversSh)
    console.log(`totalAvgHomeConcededFormationOversSh = ${totalAvgHomeConcededFormationOversSh}`);
    
  }
  avgHomeTotalconcededFormationOversSh()
}
handleClickHomeformationOversConcededSh()




const handleClickAwayformationOversSh = (e) => {

  const avgAwayTotalGoalsFormationOversSh = (totalAvgAwayGoalsFormationOversSh) => {
    let avgAwayGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.awayGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
    totalAvgAwayGoalsFormationOversSh = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayGoalsFormationOvers(totalAvgAwayGoalsFormationOversSh)
    console.log(`totalAvgAwayGoalsFormationOversSh = ${totalAvgAwayGoalsFormationOversSh}`);
    
  }
  avgAwayTotalGoalsFormationOversSh()
}
handleClickAwayformationOversSh()


const handleClickAwayformationOversConcededSh = (e) => {

  const avgAwayTotalConcededFormationOversSh = (totalAvgAwayConcededFormationOversSh) => {
    let avgAwayGoalsFormation = []

    leagueName.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsFormation.push(match.homeGoals)
     
      console.log(avgAwayGoalsFormation);
    }})
    console.log(avgAwayGoalsFormation);
    
    
    let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
    totalAvgAwayConcededFormationOversSh = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayConcededFormationOversSh(totalAvgAwayConcededFormationOversSh)
    console.log(`totalAvgAwayConcededFormationOversSh = ${totalAvgAwayConcededFormationOversSh}`);
    
  }
  avgAwayTotalConcededFormationOversSh()
}
handleClickAwayformationOversConcededSh()





const handleClickHomeSecondHalfGoalsSecondHalfOvers = (e) => {

const avgHomeTotalGoalsSecondHalfSecondHalfOvers = (totalAvgHomeGoalsSecondHalfFormation125) => {
  let avgHomeGoalsSecondHalf = []

  leagueName.map(match =>  {
  
  if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
    avgHomeGoalsSecondHalf.push(match.secondHalfGoals)
   
    console.log(avgHomeGoalsSecondHalf);
  }})
  console.log(avgHomeGoalsSecondHalf);
  
  
  let avgHomeGoalsFiltered = avgHomeGoalsSecondHalf.filter((el, i) => i < 2)
  totalAvgHomeGoalsSecondHalfFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalAvgHomeGoalsSecondHalfFormation125(totalAvgHomeGoalsSecondHalfFormation125)
  console.log(`totalAvgHomeGoalsSecondHalfFormation125 = ${totalAvgHomeGoalsSecondHalfFormation125}`);
  
}
avgHomeTotalGoalsSecondHalfSecondHalfOvers()
}
handleClickHomeSecondHalfGoalsSecondHalfOvers()


const handleClickAwaySecondHalfGoalsSecondHalfOvers = (e) => {

const avgAwayTotalGoalsSecondHalfSecondHalfOvers = (totalAvgAwayGoalsSecondHalfFormation125) => {
  let avgAwayGoalsSecondHalf = []

  leagueName.map(match =>  {
  
  if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
    avgAwayGoalsSecondHalf.push(match.secondHalfGoals)
   
    console.log(avgAwayGoalsSecondHalf);
  }})
  console.log(avgAwayGoalsSecondHalf);
  
  
  let avgHomeGoalsFiltered = avgAwayGoalsSecondHalf.filter((el, i) => i < 2)
  totalAvgAwayGoalsSecondHalfFormation125 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalAvgAwayGoalsSecondHalfFormation125(totalAvgAwayGoalsSecondHalfFormation125)
  console.log(`totalAvgAwayGoalsSecondHalfFormation125 = ${totalAvgAwayGoalsSecondHalfFormation125}`);
  
}
avgAwayTotalGoalsSecondHalfSecondHalfOvers()
}
handleClickAwaySecondHalfGoalsSecondHalfOvers()

console.log(`totalFormationSecondHalfGoalsAway1 = ${totalAvgAwayGoalsSecondHalfFormation125}`);




  }
  
  let homeStrengthLtd = (totalAvgHomeGoalsFormationLtd + totalAvgAwayConcededFormationLtd) / 2
  let awayStrengthLtd = (totalAvgAwayGoalsFormationLtd + totalAvgHomeConcededFormationLtd) / 2



let homeStrengthOvers = (totalAvgHomeGoalsFormationOvers + totalAvgAwayConcededFormationOvers) / 2
let awayStrengthOvers = (totalAvgAwayGoalsFormationOvers + totalAvgHomeConcededFormationOvers) / 2

let homeSecondHalfOvers = (totalAvgHomeGoalsFormationOversSh + totalAvgAwayConcededFormationOversSh) / 2
let awaySecondHalfOvers = (totalAvgAwayGoalsFormationOversSh + totalAvgHomeConcededFormationOversSh) / 2


console.log(homeSecondHalfOvers);
console.log(awaySecondHalfOvers);




let averageSeondHalfBothTeams125 = (totalAvgHomeGoalsSecondHalfFormation125 + totalAvgAwayGoalsSecondHalfFormation125) / 2

console.log(totalAvgHomeGoalsSecondHalfFormation125);
console.log(totalAvgAwayGoalsSecondHalfFormation125);




let averageSeondHalfBothTeamsSecondHalfOvers = (totalAvgHomeGoalsSecondHalfFormation125 + totalAvgAwayGoalsSecondHalfFormation125) / 2

// console.log(averageSeondHalfBothTeamsSecondHalfOvers);


//////////// LTD ////////////////


if (isNaN(homeStrengthLtd) || isNaN(awayStrengthLtd)) {
  ltdStrat = false
} if ((homeStrengthLtd > 1.24) && (homeStrengthLtd < 2.51) && ((awayStrengthLtd > 0.49)) &&(awayStrengthLtd < 3.3)) {
  ltdStrat = true
}




//////////// OVER 2.5 ////////////////


if (isNaN(homeStrengthOvers) || isNaN(awayStrengthOvers)) {
  oversStrat = false
} if ((homeStrengthOvers > 1.24) && (homeStrengthOvers < 2.3) && ((awayStrengthOvers > 1.1)) &&(awayStrengthOvers < 1.51)) {
  oversStrat = true
}
 


////////// SHG ////////////////

if (isNaN(homeSecondHalfOvers) || isNaN(awaySecondHalfOvers)) {
  secondHalfStrat = false
} if ((homeSecondHalfOvers > 0.99) && (homeSecondHalfOvers < 2.01) && (awaySecondHalfOvers > 0.49) &&(awaySecondHalfOvers < 3.01)  && (totalAvgHomeGoalsSecondHalfFormation125 > 1.2)&& (totalAvgHomeGoalsSecondHalfFormation125 < 3.01) && (totalAvgAwayGoalsSecondHalfFormation125 > 1.1) && (totalAvgAwayGoalsSecondHalfFormation125 < 2.7)) {
  secondHalfStrat = true

}

console.log(secondHalfStrat);

  

  

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
          {ltdStrat && <div className='ltd'>LTD</div>}
          {oversStrat && <div className='overs'>Over 2.5</div>}
          {secondHalfStrat && <div className='second-half'>2nd Half</div>}
          </div>
        
        
        </div>
        
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