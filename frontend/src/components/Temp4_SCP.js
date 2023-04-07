import React, { useEffect, useState } from "react"

const Temp4_SCP = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [activity, setactivity] = useState("");
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [third, setthird] = useState("");
  const [fourth, setfourth] = useState("");
  const [fifth, setfifth] = useState("");
  const [sixth, setsixth] = useState("");
  const [seventh, setseventh] = useState("");
  const [activityM, setactivityM] = useState("");
  const [firstM, setfirstM] = useState("");
  const [secondM, setsecondM] = useState("");
  const [thirdM, setthirdM] = useState("");
  const [fourthM, setfourthM] = useState("");
  const [fifthM, setfifthM] = useState("");
  const [sixthM, setsixthM] = useState("");
  const [seventhM, setseventhM] = useState("");
  const [inspiration, setsinspiration] = useState("");
  const [affirmation, setaffirmation] = useState("");

  
  const [physicalList, setPhysicalList] = useState([])
  const [mentalList, setMentalList] = useState([])
  const [affirmList, setAffirmList] = useState([])

 
  const addToPhysical = () => {
    fetch("http://localhost:5000/physical/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity: activity,
        first: first,
        second: second,
        third: third,
        fourth: fourth,
        fifth: fifth,
        sixth: sixth,
        seventh: seventh,
      }),
    }).then((res) => {
      fetchPhysical()
    })
        
  };
  const addToMental = () => {
    fetch("http://localhost:5000/mental/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activityM: activityM,
        firstM: firstM,
        secondM: secondM,
        thirdM: thirdM,
        fourthM: fourthM,
        fifthM: fifthM,
        sixthM: sixthM,
        seventhM: seventhM,
      }),
    }).then((res) => {
      fetchMental()
    })
        
  };
  const addToAff = () => {
    fetch("http://localhost:5000/aff/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inspiration: inspiration,
        affirmation: affirmation,
      }),
    }).then((res) => {
      fetchAff()
    })
        
  };
  const fetchPhysical = () => {
    fetch(url + "/physical/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPhysicalList(data)
      })
  }
  const fetchMental = () => {
    fetch(url + "/mental/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMentalList(data)
      })
  }
  const fetchAff = () => {
    fetch(url + "/aff/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAffirmList(data)
      })
  }
  const deletePhysical = (id) => {
    fetch(url + "/physical/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchPhysical();
      })
  }
  const deleteMental = (id) => {
    fetch(url + "/mental/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchMental();
      })
  }
  const deleteAffirm = (id) => {
    fetch(url + "/aff/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchAff();
      })
  }
 
 
  useEffect(() => {
    fetchPhysical()
    fetchMental()
    fetchAff()
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
              <div className="card side-card1">
                <div className="card-header">
                  <h4 className="m-0">PHYSICAL DETOX PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Activity to be performed :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setactivity(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>1st day :</label>
                    <input type="checkbox" onChange={(event) => {setfirst(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>2nd day :</label>
                    <input type="checkbox" onChange={(event) => {setsecond(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>3rd day :</label>
                    <input type="checkbox" onChange={(event) => {setthird(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>4th day :</label>
                    <input type="checkbox" onChange={(event) => {setfourth(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>5th day :</label>
                    <input type="checkbox" onChange={(event) => {setfifth(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>6th day :</label>
                    <input type="checkbox" onChange={(event) => {setsixth(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>7th day :</label>
                    <input type="checkbox" onChange={(event) => {setseventh(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToPhysical}>Add to List</button>
                  </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card side-card1">
                <div className="card-header">
                  <h4 className="m-0">MENTAL DETOX PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Activity to be performed :</label>
                    <input type="text" placeholder="Enter activity" onChange={(event) => {setactivityM(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>1st day :</label>
                    <input type="checkbox" onChange={(event) => {setfirstM(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>2nd day :</label>
                    <input type="checkbox" onChange={(event) => {setsecondM(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>3rd day :</label>
                    <input type="checkbox" onChange={(event) => {setthirdM(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>4th day :</label>
                    <input type="checkbox" onChange={(event) => {setfourthM(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>5th day :</label>
                    <input type="checkbox" onChange={(event) => {setfifthM(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>6th day :</label>
                    <input type="checkbox" onChange={(event) => {setsixthM(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>7th day :</label>
                    <input type="checkbox" onChange={(event) => {setseventhM(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToMental}>Add to List</button>
                  </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card top-card2">
                <div className="card-header">
                  <h4 className="m-0">SELF-CARE PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>INSPIRATION FOR THE WEEK :</label>
                    <input type="text" placeholder="Enter inspiration" onChange={(event) => {setsinspiration(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>AFFIRMATION FOR THE WEEK:</label>
                    <input type="text" placeholder="Enter affirmation" onChange={(event) => {setaffirmation(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToAff}>Add to List</button>
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
                  <h4 className="m-0">PHYSICAL DETOX PLAN</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Activity</th>
                    <th>1st</th>
                    <th>2nd</th>
                    <th>3rd</th>
                    <th>4th</th>
                    <th>5th</th>
                    <th>6th</th>
                    <th>7th</th>
                    <th>Actions</th>
                  </tr>
                  {physicalList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.activity}</h4></td>
                        <td><h4>{val.first}</h4></td>
                        <td><h4>{val.second}</h4></td>
                        <td><h4>{val.third}</h4></td>
                        <td><h4>{val.fourth}</h4></td>
                        <td><h4>{val.fifth}</h4></td>
                        <td><h4>{val.sixth}</h4></td>
                        <td><h4>{val.seventh}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deletePhysical(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
            <div className="row-mt-4">
              <div className="col-md-12">
              <div className="card bottom-card1">
                <div className="card-header">
                  <h4 className="m-0">MENTAL DETOX PLAN</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Activity</th>
                    <th>1st</th>
                    <th>2nd</th>
                    <th>3rd</th>
                    <th>4th</th>
                    <th>5th</th>
                    <th>6th</th>
                    <th>7th</th>
                    <th>Actions</th>
                  </tr>
                  {mentalList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.activityM}</h4></td>
                        <td><h4>{val.firstM}</h4></td>
                        <td><h4>{val.secondM}</h4></td>
                        <td><h4>{val.thirdM}</h4></td>
                        <td><h4>{val.fourthM}</h4></td>
                        <td><h4>{val.fifthM}</h4></td>
                        <td><h4>{val.sixthM}</h4></td>
                        <td><h4>{val.seventhM}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteMental(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
            <div className="row-mt-4">
              <div className="col-md-12">
              <div className="card bottom-card1">
                <div className="card-header">
                  <h4 className="m-0">INSPIRATION/AFFIRMATION TABLE</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Inspiration</th>
                    <th>Affirmation</th>
                    <th>Actions</th>
                  </tr>
                  {affirmList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.inspiration}</h4></td>
                        <td><h4>{val.affirmation}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteAffirm(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
export default Temp4_SCP;