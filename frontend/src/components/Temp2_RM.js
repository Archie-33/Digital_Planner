import React, { useEffect, useState } from "react"

const Temp2_RM = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [time, settime] = useState("");
  const [monday, setmonday] = useState("");
  const [tuesday, settuesday] = useState("");
  const [wednesday, setwednesday] = useState("");
  const [thursday, setthursday] = useState("");
  const [friday, setfriday] = useState("");
  const [saturday, setsaturday] = useState("");
  const [sunday, setsunday] = useState("");
  
  const [routineList, setRoutineList] = useState([])

 
  const addToList = () => {
    fetch("http://localhost:5000/routine/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: time,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      }),
    }).then((res) => {
      fetchRoutine()
    })
        
  };
  const fetchRoutine = () => {
    fetch(url + "/routine/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRoutineList(data)
      })
  }
  const deleteRoutine = (id) => {
    fetch(url + "/routine/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchRoutine();
      })
  }
 
 
  useEffect(() => {
    fetchRoutine()
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
                <a class="text-reset me-3" href="#">
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
                <i></i> <i class="fa fa-phone" aria-hidden="true"></i> Contact Us
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
                  <h4 className="m-0">DAY ROUTINE MAPPING</h4>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>TIME OF THE DAY :</label>
                    <input type="text" placeholder="Enter time" onChange={(event) => {settime(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>MONDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setmonday(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>TUESDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {settuesday(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>WEDNESDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setwednesday(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>THURSDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setthursday(event.target.value);}}/>
                  </h4>
                  <h4 className="m-2">
                    <label>FRIDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setfriday(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>SATURDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setsaturday(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>SUNDAY ACTIVITY :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setsunday(event.target.value);}}/>
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
                  <h4 className="m-0">DAY ROUTINE</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Time</th>
                    <th>Mon</th>
                    <th>Tues</th>
                    <th>Wed</th>
                    <th>Thurs</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                    <th>Actions</th>
                  </tr>
                  {/* {mealList.map((val,key) => {
                    return <div key={key}>
                      <td>
                        <tr>
                      <h4>{val.meal}</h4>
                      </tr>
                      <tr>
                      <h4>{val.dishName}</h4>
                      </tr>
                      <tr>
                      <h4>{val.recipe}</h4>
                      </tr>
                      <tr>
                      <h4>{val.ingredients}</h4>
                      </tr>
                      </td>
                      </div>
                  })} */}
                  {routineList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.time}</h4></td>
                        <td><h4>{val.monday}</h4></td>
                        <td><h4>{val.tuesday}</h4></td>
                        <td><h4>{val.wednesday}</h4></td>
                        <td><h4>{val.thursday}</h4></td>
                        <td><h4>{val.friday}</h4></td>
                        <td><h4>{val.saturday}</h4></td>
                        <td><h4>{val.sunday}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteRoutine(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
export default Temp2_RM;