import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setprofile] = useState(null);
  const [followers, setfollowers] = useState([]);
  const [unfollowed, setunfollowed] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then(data => setprofile(data.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/followers')
      .then(data => setfollowers(data.data))
      .catch(err => console.log(err));
  }, [unfollowed]);

  function Handleonchange(e) {
    setprofile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleupdate = async () => {
    axios.put('http://localhost:3000/profile', profile)
      .then(() => console.log("Updated"))
      .catch(err => console.log(err));
  };

  const handleUnfollow = async (id) => {
    axios.delete(`http://localhost:3000/followers/${id}`)
      .then(() => {
        alert("UnFollowed");
        setunfollowed(prev => !prev); // ✅ toggle to trigger re-fetch
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='m-5'>
      {profile ? (
        <div>
          <img src={profile.profile_pic} alt="DP" className='profile rounded-circle' />
          <h5>{profile.name}</h5>
          <div className='d-flex'>
          <h4 >Followers <br></br>{followers.length}</h4>
          <h4 className='mx-5'>Following <br /> 4</h4>
          <h4></h4>
          </div>
          <input type="text"
            value={profile.name}
            name="name"
            className='form-control my-4 '
            onChange={Handleonchange}
          />
          <input type="text" name='profile_pic'
            value={profile.profile_pic}
            className='form-control '
            onChange={Handleonchange}
          />
          <button className='btn btn-primary my-4'
            onClick={handleupdate}>Update</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {followers.length > 0 ? (
        followers.map(follower => (
          <div key={follower.id} className='d-flex'>
            {follower.name}
            <button className='btn btn-secondary my-2 ms-auto justify-content-center'
              onClick={() => { handleUnfollow(follower.id) }}>UnFollow</button>
          </div>
        ))
      ) : (
        <div>Loading Followers</div>
      )}
    </div>
  );
}

export default Profile;
