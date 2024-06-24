import React from 'react';
import './Program.css';
import program_1 from '../../../edusity_assets/program-1.png';
import program_2 from '../../../edusity_assets/program-2.png';
import program_3 from '../../../edusity_assets/program-3.png';
import program_icon_1 from '../../../edusity_assets/program-icon-1.png';
import program_icon_2 from '../../../edusity_assets/program-icon-2.png';
import program_icon_3 from '../../../edusity_assets/program-icon-3.png';
function Program() {
  return (
    <div className='Programs'>
        
        <div className='program'>
            <img src={program_1}/>
            <div className='caption'>
               <img src={program_icon_1}/>
               <p>Graduation Degree </p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2}/>
            <div className='caption'>
               <img src={program_icon_2}/>
               <p>Graduation Degree </p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3}/>
            <div className='caption'>
               <img src={program_icon_3}/>
               <p>Graduation Degree </p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
