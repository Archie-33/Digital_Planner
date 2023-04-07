import React, { useEffect, useState } from "react"

const Temp7_WP = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [day, setday] = useState("");
  const [bodypart, setbodypart] = useState("");
  const [exercise1, setexercise1] = useState("");
  const [exercise2, setexercise2] = useState("");
  const [exercise3, setexercise3] = useState("");
  const [exercise4, setexercise4] = useState("");
  const [exercise5, setexercise5] = useState("");
  const [exercise6, setexercise6] = useState("");
  
  const [workoutList, setWorkoutList] = useState([])

 
  const addToList = () => {
    fetch("http://localhost:5000/workout/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: day,
        bodypart: bodypart,
        exercise1: exercise1,
        exercise2: exercise2,
        exercise3: exercise3,
        exercise4: exercise4,
        exercise5: exercise5,
        exercise6: exercise6,
      }),
    }).then((res) => {
      fetchWorkout()
    })
        
  };
  const fetchWorkout = () => {
    fetch(url + "/workout/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setWorkoutList(data)
      })
  }
  const deleteWorkout = (id) => {
    fetch(url + "/workout/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchWorkout();
      })
  }
 
 
  useEffect(() => {
    fetchWorkout()
  }, [])


  
  return (
    
    <div className="main-bg p-4">
      <div className="row" style={{ minHeight: "93vh" }}>
        <div className="col-md-2">
          <div className="card">
            <div className="card-body">
              <img style={{ borderRadius: "100px" }} className="d-block img-fluid w-50 m-auto" src="avatar2.jpg" alt="" />
              <h5 className="card-title text-center m-0">{currentUser.name}</h5>
            </div>
            <hr className="m-0" />
            <div className="card-body">
              <button className="btn btn-outline-secondary w-100">
                {" "}
                <a class="text-reset me-3" href="Home">
                <i class="fas fa-home"></i> Home
                </a>
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="accountPg">
                <i></i> Account
                </a>
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <i></i> Settings 
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="Dashboard">
                <i></i> Dashboard
                </a>
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="templates">
                <i></i> Templates
                </a>
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="#">
                <i></i> <i class="fa fa-trash" aria-hidden="true"></i> Trash
                </a>
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="aboutUs">
                <i></i> About Us
                </a>
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="contactUs">
                <i></i><i class="fa fa-phone" aria-hidden="true"></i>Contact Us
                </a>
              </button>
              </div>
              
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="card side-card">
                <div className="card-header">
                  <h4 className="m-0">WORKOUT PLANNER</h4>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>DAY OF THE WEEK:</label>
                    <input type="text" placeholder="Enter day" onChange={(event) => {setday(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>PART OF THE BODY:</label>
                    <input type="text" placeholder="Enter body part" onChange={(event) => {setbodypart(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>EXERCISE NUMBER 1 :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setexercise1(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>EXERCISE NUMBER 2 :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setexercise2(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>EXERCISE NUMBER 3 :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setexercise3(event.target.value);}}/>
                  </h4>
                  <h4 className="m-2">
                    <label>EXERCISE NUMBER 4 :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setexercise4(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>EXERCISE NUMBER 5 :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setexercise5(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>EXERCISE NUMBER 6 :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setexercise6(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToList}>Add to List</button>
                    </h4>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
            <div className="row-mt-4">
              <div className="col-md-12">
              <div className="card bottom-card1">
                <div className="card-header">
                  <h4 className="m-0">WORKOUT PLAN</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Day</th>
                    <th>Body Part</th>
                    <th>Ex 1</th>
                    <th>Ex 2</th>
                    <th>Ex 3</th>
                    <th>Ex 4</th>
                    <th>Ex 5</th>
                    <th>Ex 6</th>
                    <th>Actions</th>
                  </tr>
                  {workoutList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.day}</h4></td>
                        <td><h4>{val.bodypart}</h4></td>
                        <td><h4>{val.exercise1}</h4></td>
                        <td><h4>{val.exercise2}</h4></td>
                        <td><h4>{val.exercise3}</h4></td>
                        <td><h4>{val.exercise4}</h4></td>
                        <td><h4>{val.exercise5}</h4></td>
                        <td><h4>{val.exercise6}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteWorkout(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
                        </td>
                      </tr>
                    )
                  })

                  }
                  </tbody>
                </table>
              
                </div>
              </div>
            </div>

        
 </div>
 </div>
        
        )
}
export default Temp7_WP;