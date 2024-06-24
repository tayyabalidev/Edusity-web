import './Campus.css'   

import React from 'react'
import gallery_1 from '../../../edusity_assets/gallery-1.png';
import gallery_2 from '../../../edusity_assets/gallery-2.png';
import gallery_3 from '../../../edusity_assets/gallery-3.png';
import gallery_4 from '../../../edusity_assets/gallery-4.png';
import white_arrow from '../../../edusity_assets/white-arrow.png';

function Campus() {
  return (
    <div className='campus'>
      <div className='gallery'>
          <img src={gallery_1} />
          <img src={gallery_2} />
          <img src={gallery_3} />
          <img src={gallery_4} />
      </div>
      <button className='cta'>See more here <img src={white_arrow}/></button>
    </div>
  )
}

export default Campus;
