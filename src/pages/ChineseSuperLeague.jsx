import { useState } from 'react';
import Select from 'react-select';
import {ChineseSuperLeagueDirectory} from '../directories/Directory.chineseSuperLeague';
import '../index.css'

const ChineseSuperLeague = () => {


  const formaton = [
    {value: "4231", label: "4231"}, {value: "442",label: "442"}, {value: "433", label: "433"}, {value: "451", label: "451"},{value: "352", label: "352"},{value: "343", label: "343"},{value: "532", label: "532"},{value: "541", label: "541"},
  ];

  const ChineseSuperLeagueTeams = [
    {value: "Beijing Guoan", label: "Beijing Guoan"}, {value: "Cangzhou",label: "Cangzhou"}, {value: "Changchun Yatai",label: "Changchun Yatai"},{value: "Chengdu Rongcheng", label: "Chengdu Rongcheng"}, {value: "Dalian Pro", label: "Dalian Pro"}, {value: "Guangzhou City",label: "Guangzhou City"}, {value: "Guangzhou FC",label: "Guangzhou FC"}, {value: "Hebei",label: "Hebei"}, {value: "Henan Songshan Longmen",label: "Henan Songshan Longmen"}, {value: "Meizhou Hakka",label: "Meizhou Hakka"}, {value: "Shandong Taishan",label: "Shandong Taishan"}, {value: "Shanghai Port",label: "Shanghai Port"}, {value: "Shanghai Shenhua",label: "Shanghai Shenhua"}, {value: "Shenzhen",label: "Shenzhen"}, {value: "Tianjin Jinmen Tiger",label: "Tianjin Jinmen Tiger"}, {value: "Wuhan FC",label: "Wuhan FC"}, {value: "Wuhan Three Towns",label: "Wuhan Three Towns"}, {value: "Zhejiang Professional",label: "Zhejiang Professional"}
  ]


  // INPUT 1

const [valueHome1, setvalueHome1 ] = useState("");
const [valueAway1, setvalueAway1 ] = useState("");
const [homeFormation1, setHomeFormation1 ] = useState("");
const [awayFormation1, setAwayFormation1 ] = useState("");
const [totalAvgHomeGoalsFormationStrategy1, setTotalAvgHomeGoalsFormationStrategy1 ] = useState(0);
const [totalAvgAwayGoalsFormationStrategy1, setTotalAvgAwayGoalsFormationStrategy1 ] = useState(0);
const [totalFormationSecondHalfGoalsHome1, setTotalFormationSecondHalfGoalsHome1] = useState(0);
const [totalFormationSecondHalfGoalsAway1, setTotalFormationSecondHalfGoalsAway1 ] = useState(0);

  

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



// INPUT 1

  const handleClickHomeformation1 = (e) => {

    const avgHomeTotalGoalsFormation = (totalAvgHomeGoalsFormation) => {
      let avgHomeGoalsFormation = []

      ChineseSuperLeagueDirectory.map(match =>  {
      
      if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
        avgHomeGoalsFormation.push(match.totalGoals)
       
        console.log(avgHomeGoalsFormation);
      }})
      console.log(avgHomeGoalsFormation);
      
      
      let avgHomeGoalsFiltered = avgHomeGoalsFormation.filter((el, i) => i < 4)
    totalAvgHomeGoalsFormation = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalAvgHomeGoalsFormationStrategy1(totalAvgHomeGoalsFormation)
      console.log(`totalAvgHomeGoalsFormation = ${totalAvgHomeGoalsFormation}`);
      
    }
    avgHomeTotalGoalsFormation()
  }
  handleClickHomeformation1()

  const handleClickAwayformation1 = (e) => {

    const avgAwayTotalGoalsFormation = (totalAvgAwayGoalsFormation) => {
      let avgAwayGoalsFormation = []

      ChineseSuperLeagueDirectory.map(match =>  {
      
      if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
        avgAwayGoalsFormation.push(match.totalGoals)
       
        console.log(avgAwayGoalsFormation);
      }})
      console.log(avgAwayGoalsFormation);
      
      
      let avgAwayGoalsFiltered = avgAwayGoalsFormation.filter((el, i) => i < 4)
    totalAvgAwayGoalsFormation = avgAwayGoalsFiltered.reduce((a, b) => a + b, 0) / avgAwayGoalsFiltered.length
    setTotalAvgAwayGoalsFormationStrategy1(totalAvgAwayGoalsFormation)
      console.log(`totalAvgAwayGoalsFormation = ${totalAvgAwayGoalsFormation}`);
      
    }
    avgAwayTotalGoalsFormation()
  }
  handleClickAwayformation1()



const handleClickHomeSecondHalfGoals = (e) => {

  const avgHomeTotalGoalsSecondHalf = (totalFormationSecondHalfGoalsHome1) => {
    let avgHomeGoalsSecondHalf = []

    ChineseSuperLeagueDirectory.map(match =>  {
    
    if ( (valueHome1 === match.homeTeam) && (homeFormation1 === match.homeFormation)) {
      avgHomeGoalsSecondHalf.push(match.secondHalfGoals)
     
      console.log(avgHomeGoalsSecondHalf);
    }})
    console.log(avgHomeGoalsSecondHalf);
    
    
    let avgHomeGoalsFiltered = avgHomeGoalsSecondHalf.filter((el, i) => i < 4)
    totalFormationSecondHalfGoalsHome1 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
  setTotalFormationSecondHalfGoalsHome1(totalFormationSecondHalfGoalsHome1)
    console.log(`totalAvgHomeGoalsSecondHalf = ${totalFormationSecondHalfGoalsHome1}`);
    
  }
  avgHomeTotalGoalsSecondHalf()
}
handleClickHomeSecondHalfGoals()


const handleClickAwaySecondHalfGoals = (e) => {

  const avgAwayTotalGoalsSecondHalf = (totalFormationSecondHalfGoalsAway1) => {
    let avgAwayGoalsSecondHalf = []

    ChineseSuperLeagueDirectory.map(match =>  {
    
    if ( (valueAway1 === match.awayTeam) && (awayFormation1 === match.awayFormation)) {
      avgAwayGoalsSecondHalf.push(match.secondHalfGoals)
     
      console.log(avgAwayGoalsSecondHalf);
    }})
    console.log(avgAwayGoalsSecondHalf);
    
    
    let avgHomeGoalsFiltered = avgAwayGoalsSecondHalf.filter((el, i) => i < 4)
    totalFormationSecondHalfGoalsAway1 = avgHomeGoalsFiltered.reduce((a, b) => a + b, 0) / avgHomeGoalsFiltered.length
    setTotalFormationSecondHalfGoalsAway1(totalFormationSecondHalfGoalsAway1)
    console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAway1}`);
    
  }
  avgAwayTotalGoalsSecondHalf()
}
handleClickAwaySecondHalfGoals()

console.log(`totalFormationSecondHalfGoalsAway1 = ${totalFormationSecondHalfGoalsAway1}`);


  }
  

let averageFormationBothTeams1 = (totalAvgHomeGoalsFormationStrategy1 + totalAvgAwayGoalsFormationStrategy1) / 2
let averageSeondHalfBothTeams1 = (totalFormationSecondHalfGoalsHome1 + totalFormationSecondHalfGoalsAway1) / 2

console.log(averageFormationBothTeams1);

if (isNaN(averageFormationBothTeams1) || isNaN(averageSeondHalfBothTeams1)) {
  oversStrat1 = false
} else if ((totalFormationSecondHalfGoalsHome1 > 0.99) && (totalFormationSecondHalfGoalsHome1 < 3.1) && ((totalFormationSecondHalfGoalsAway1 > 0.99)) &&(totalFormationSecondHalfGoalsAway1 < 3.1) && (averageFormationBothTeams1 > 1.99) && (averageFormationBothTeams1 < 10.99)) {
  oversStrat1 = true
}


if (isNaN(averageFormationBothTeams1) || isNaN(averageSeondHalfBothTeams1)) {
  secondHalfStrat1 = false
} else if ((totalFormationSecondHalfGoalsHome1 > 1) && (totalFormationSecondHalfGoalsHome1 < 3.01) && (totalFormationSecondHalfGoalsAway1 < 3.01) && (totalAvgHomeGoalsFormationStrategy1 > 1.99) && (totalAvgAwayGoalsFormationStrategy1 > 0.99)) {
  secondHalfStrat1 = true

}



  
console.log(secondHalfStrat1);
console.log(oversStrat1);
  

  return (
    <>
    <h1 className='h1'>Chinese Super League</h1>
    <form action="submit" onClick={handleSubmit}>
      <div className='form-container'>
        <div className="form-items" >
          <Select options={ChineseSuperLeagueTeams} onChange={handleHomeTeamChange1} className="team-input" placeholder="Home Team"/>
          <Select options={formaton} onChange={handleHomeFormationChange1} className="formation-input" placeholder="Formation" />
          <Select options={ChineseSuperLeagueTeams} onChange={handleAwayTeamChange1} className="team-input" placeholder="Away Team"/>
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
      Secondhalf Strategy Scorelines = 1-0, 0-1, 0-2
    </div>
    
    </>
  )
}

export default ChineseSuperLeague