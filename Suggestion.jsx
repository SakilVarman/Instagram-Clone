import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestion() {

  const[profile,setprofile]=useState(null);
  const[suggestion,setsuggestion]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/profile").
    then((data)=>data.json()).
    then((data)=>setprofile(data)).catch((err)=>console.log(err))

    fetch("http://localhost:3000/suggestions").
    then((data)=>data.json()).
    then((data)=>setsuggestion(data)).catch((err)=>console.log(err))
  },[]);

  const handlefollow = async (id, username) => {
  axios.post('http://localhost:3000/followers', { "id": id, "name": username })
    .then(() => alert("Followed"))
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='suggestion w-75 m-4'>
        {profile ?
      <div className='d-flex'>
        <img className='dp rounded-circle' src={profile.profile_pic} alt="Profile_Pic" />
        <h5>{profile.name}</h5>
        <small className='ms-auto text-primary'>Switch</small>
        </div>
        : <p>Loading</p>}

        <div className='d-flex '>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>

          {suggestion.length>0?(
            <div>
                {suggestion.map((suggest)=>(
                    <div className='my-1' key={suggest.id}>
                        <div className='d-flex'>
                            <img className='dp rounded-circle' src={suggest.profile_pic} alt="Profile_Pic" />
                            <h5>{suggest.name}</h5>
                            <a className='text-primary ms-auto' onClick={()=> {handlefollow(suggest.id,suggest.name)}}>Follow</a>
                        </div>
                    </div>
                ))}
            </div>
            ):(
              <div>
                Loading
              </div>
        )}
      </div>
    </div>
  )
}

export default Suggestion

// npx json-server --watch Instagram/db/db.json --port 3000