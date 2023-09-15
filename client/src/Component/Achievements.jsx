import React from 'react';
import Card from './Card';
import Data from "../Utils/data.utils..json";

const Achievements = () => {
  const achievementsArray = Data.achievement;
  return (
    <div id='achievements' className='achievements-section'>
      <h1>Achievements</h1>
      <div className='achievements-cards'>
        {achievementsArray.map((achieve) => {
          return <Card key={achieve.id} item={achieve}/>
        })}
      </div>
    </div>
  )
}

export default Achievements