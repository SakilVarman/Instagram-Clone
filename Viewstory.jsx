import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'

function Viewstory() {
  const { id,tot } = useParams();
  const [story, setstory] = useState(null);
 const navigate=useNavigate();
  
 useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setstory(data))
      .catch((err) => console.log(err));
  }, [id]);

    if(id>tot || id<=0){
        navigate('/');
    }
  return (
    <div>
      {story ? (
        <div className='d-flex justify-content-center align-items-center' >
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`} ><i class="bi bi-arrow-left-circle-fill"></i></Link>
          <img className='img-fluid vh-100' style={{ maxHeight: "100%", maxWidth: "100%" }} src={story.image} alt="story" />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
      ) : (
        <div className='text-center'>Loading...</div>
      )}
    </div>
  );
}

export default Viewstory;
