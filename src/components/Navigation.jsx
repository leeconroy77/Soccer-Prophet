import React from 'react'
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
      <nav className='nav-bar'>
        <ul className='ul'>
          <li><Link to="/chineseSuperLeague" className='li'>
            <img className='flags'  src='/vectors/chinese_flag.svg' alt="" />
            <p>C1</p>
          </Link></li>
          <li><Link to="/englishPremierLeague" className='li'>
            <img className='flags'  src='/vectors/english_flag.svg' alt="" />
            <p>E1</p>
          </Link></li>
          <li><Link to="/englishLeagueOne" className='li'>
            <img className='flags'  src='/vectors/english_flag.svg' alt="" />
            <p>E3</p>
          </Link></li>
          <li><Link to="/englishLeagueTwo" className='li'>
            <img className='flags'  src='/vectors/english_flag.svg' alt="" />
            <p>E4</p>
          </Link></li>
          <li><Link to="/indianISL" className='li'>
            <img className='flags'  src='/vectors/indian_flag.svg' alt="" />
            <p>I1</p>
          </Link></li>
          <li><Link to="/italianSerieB" className='li'>
            <img className='flags'  src='/vectors/italian_flag.svg' alt="" />
            <p>IT2</p>
          </Link></li>
          <li><Link to="/romanianLiga1" className='li'>
            <img className='flags'  src='/vectors/romanian_flag.svg' alt="" />
            <p>R1</p>
          </Link></li>
          <li><Link to="/scottishPremiership" className='li'>
            <img className='flags'  src='/vectors/scottish_flag.svg' alt="" />
            <p>SC1</p>
          </Link></li>
          <li><Link to="/spanishLaLiga2" className='li'>
            <img className='flags'  src='/vectors/spanish_flag.svg' alt="" />
            <p>SP2</p>
          </Link></li>
          <li><Link to="/turkish1Lig" className='li'>
            <img className='flags'  src='/vectors/turkish_flag.svg' alt="" />
            <p>T2</p>
          </Link></li>

        </ul>
      </nav>
  )
}

export default Navigation