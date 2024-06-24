// import './Testimonials.css'
// import next_arrow from '../../../edusity_assets/next-icon.png'
// import back_arrow from '../../../edusity_assets/back-icon.png'
// import user_1 from '../../../edusity_assets/user-1.png'
// import user_2 from '../../../edusity_assets/user-2.png'
// import user_3 from '../../../edusity_assets/user-3.png'
// import user_4 from '../../../edusity_assets/user-4.png'
// import { useRef } from 'react'
// function Testimonials() {
//    const slider = useRef();
//    let tx = 0;

//   const slideForward =()=>{
//    if(tx > -50){
//       tx -= 25;
//    }
//    slider.current.style.transform= `translateX(${tx}%)`;
//   }
//   const slideBackward =()=>{
//    if(tx < 0){
//       tx +=25;
//    }
//    slider.current.style.transform= `translateX(${tx}%)`;
//   }
//   return (
//     <div className='testimonails'>
//       <img src={next_arrow} className='next-arrow' onClick={slideForward}/>
//       <img src={back_arrow} className='back-arrow' onClick={slideBackward}/>
//      <div className='slider'>
//       <ul ref={slider}>
//         <li>
//           <div className='slide'>
//              <div className='user-info'>
//                 <img src={user_2}/>
//                 <div>
//                 <h3>William jackson</h3>
//                 <span>Edusity, USA</span>
//                 </div>
//              </div>
//              <p>Choosing to pursue my degree at Edusity was <br /> one of the best decisions I've ever made. The<br />  supportive community, state-of-the-art<br /> facilities, and commitment to academic<br /> excellence have truly exceeded my<br /> expectations.</p>
//           </div>
//         </li>
//         {/*  */}
//         <li>
//           <div className='slide'>
//              <div className='user-info'>
//                 <img src={user_1}/>
//                 <div>
//                 <h3>Emily William</h3>
//                 <span>Edusity, USA</span>
//                 </div>
//              </div>
//              <p>Choosing to pursue my degree at Edusity was <br /> one of the best decisions I've ever made. The<br />  supportive community, state-of-the-art<br /> facilities, and commitment to academic<br /> excellence have truly exceeded my<br /> expectations.</p>
//           </div>
//         </li>
//         {/*  */}
//         <li>
//           <div className='slide'>
//              <div className='user-info'>
//                 <img src={user_3}/>
//                 <div>
//                 <h3>William jackson</h3>
//                 <span>Edusity, USA</span>
//                 </div>
//              </div>
//              <p>Choosing to pursue my degree at Edusity was <br /> one of the best decisions I've ever made. The<br />  supportive community, state-of-the-art<br /> facilities, and commitment to academic<br /> excellence have truly exceeded my<br /> expectations.</p>
//           </div>
//         </li>
//         {/*  */}
//         <li>
//           <div className='slide'>
//              <div className='user-info'>
//                 <img src={user_4}/>
//                 <div>
//                 <h3>William jackson</h3>
//                 <span>Edusity, USA</span>
//                 </div>
//              </div>
//              <p>Choosing to pursue my degree at Edusity was  one of the best decisions I've ever made. The  supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
//           </div>
//         </li>
//       </ul>

//      </div>
//     </div>
//   )
// }

// export default Testimonials;
import './Testimonials.css'
import next_arrow from '../../../edusity_assets/next-icon.png'
import back_arrow from '../../../edusity_assets/back-icon.png'
import user_1 from '../../../edusity_assets/user-1.png'
import user_2 from '../../../edusity_assets/user-2.png'
import user_3 from '../../../edusity_assets/user-3.png'
import user_4 from '../../../edusity_assets/user-4.png'
import { useRef } from 'react'

function Testimonials() {
   const slider = useRef();
   let tx = 0;

   const slideForward = () => {
       if (tx > -50) {
           tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideBackward = () => {
       if (tx < 0) {
           tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
   }

   return (
       <div className='testimonails'>
           <img src={next_arrow} className='next-arrow' onClick={slideForward} />
           <img src={back_arrow} className='back-arrow' onClick={slideBackward} />
           <div className='slider'>
               <ul ref={slider}>
                   <li>
                       <div className='slide'>
                           <div className='user-info'>
                               <img src={user_2} />
                               <div>
                                   <h3>William jackson</h3>
                                   <span>Edusity, USA</span>
                               </div>
                           </div>
                           <p>Choosing to pursue my degree at Edusity was <br /> one of the best decisions I've ever made. The<br />  supportive community, state-of-the-art<br /> facilities, and commitment to academic<br /> excellence have truly exceeded my<br /> expectations.</p>
                       </div>
                   </li>
                   <li>
                       <div className='slide'>
                           <div className='user-info'>
                               <img src={user_1} />
                               <div>
                                   <h3>Emily William</h3>
                                   <span>Edusity, USA</span>
                               </div>
                           </div>
                           <p>Choosing to pursue my degree at Edusity was <br /> one of the best decisions I've ever made. The<br />  supportive community, state-of-the-art<br /> facilities, and commitment to academic<br /> excellence have truly exceeded my<br /> expectations.</p>
                       </div>
                   </li>
                   <li>
                       <div className='slide'>
                           <div className='user-info'>
                               <img src={user_3} />
                               <div>
                                   <h3>William jackson</h3>
                                   <span>Edusity, USA</span>
                               </div>
                           </div>
                           <p>Choosing to pursue my degree at Edusity was <br /> one of the best decisions I've ever made. The<br />  supportive community, state-of-the-art<br /> facilities, and commitment to academic<br /> excellence have truly exceeded my<br /> expectations.</p>
                       </div>
                   </li>
                   <li>
                       <div className='slide'>
                           <div className='user-info'>
                               <img src={user_4} />
                               <div>
                                   <h3>William jackson</h3>
                                   <span>Edusity, USA</span>
                               </div>
                           </div>
                           <p>Choosing to pursue my degree at Edusity was  one of the best decisions I've ever made. The  supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
   )
}

export default Testimonials;
