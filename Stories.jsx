import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const [stories,setstories]=useState([]);
  const navigate=useNavigate();
  let tot=0;
    useEffect(()=>{
      fetch('http://localhost:3000/story')
      .then((data)=>data.json())
      .then((data)=>setstories(data))
      .catch((err)=>console.log(err))
    },[]);

  return (
    <div className='story d-flex'>
      <div className='d-none'>
        {tot=stories.length}
      </div>
      {stories.length>0 ? (
        stories.map((story)=>(
          <div key={story.id} className='mx-1' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='grdient-border'>
            <img src={story.user.profile_pic} alt="DP" className='story-dp rounded-circle' />
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{story.user.name}</p>
          </div>
        ))
      ):(
        <p>Loading</p>
      )}

    </div>
  )
}
 
export default Stories