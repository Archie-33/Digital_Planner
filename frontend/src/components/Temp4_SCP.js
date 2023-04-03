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
        fetchBudget();
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
                  <h4 className="m-0">SELF-CARE PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>SOURCE OF INCOME :</label>
                    <input type="text" placeholder="Enter income" onChange={(event) => {setincome(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>AMOUNT OF INCOME :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setamti(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>AMOUNT SAVED FOR :</label>
                    <input type="text" placeholder="Saved for" onChange={(event) => {setsaved(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>AMOUNT TO BE SAVED :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setamts(event.target.value);}}/>                   
                  </h4>
                  <h4 className="m-2">
                    <label>NATURE OF THE DEBT :</label>
                    <input type="text" placeholder="Enter debt" onChange={(event) => {setdebt(event.target.value);}}/>
                  </h4>
                  <h4 className="m-2">
                    <label>AMOUNT OF THE DEBT :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setamtd(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToBudget}>Add to List</button>
                    </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">SELF-CARE PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>DATE OF THE EXPENSE :</label>
                    <input type="text" placeholder="Enter date" onChange={(event) => {setdateexp(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>ITEM FOR EXPENSE:</label>
                    <input type="text" placeholder="Enter item" onChange={(event) => {setitem(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>CATEGORY OF EXPENSE :</label>
                    <input type="text" placeholder="Enter category" onChange={(event) => {setcateg(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>AMOUNT OF EXPENSE :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setamt(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToExpense}>Add to List</button>
                    </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card top-card1">
                <div className="card-header">
                  <h4 className="m-0">SELF-CARE PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>TOTAL AMOUNT OF INCOME :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {settotali(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>TOTAL AMOUNT OF SAVING:</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {settotals(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>TOTAL AMOUNT OF DEBT :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {settotald(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>TOTAL AMOUNT OF SPEND :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {settotalsp(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToTotal}>Add to List</button>
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
                  <h4 className="m-0">BUDGET PLAN</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Income</th>
                    <th>Amt</th>
                    <th>Saved for</th>
                    <th>Amt</th>
                    <th>Debt</th>
                    <th>Amt</th>
                    <th>Actions</th>
                  </tr>
                  {budgetList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.income}</h4></td>
                        <td><h4>{val.amti}</h4></td>
                        <td><h4>{val.saved}</h4></td>
                        <td><h4>{val.amts}</h4></td>
                        <td><h4>{val.debt}</h4></td>
                        <td><h4>{val.amtd}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteBudget(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
                  <h4 className="m-0">EXPENSE TRACK</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                  {expenseList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.dateexp}</h4></td>
                        <td><h4>{val.item}</h4></td>
                        <td><h4>{val.categ}</h4></td>
                        <td><h4>{val.amt}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteExpense(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
                  <h4 className="m-0">TOTAL TABLE</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Total Income</th>
                    <th>Total Saving</th>
                    <th>Total Debt</th>
                    <th>Total Spend</th>
                    <th>Actions</th>
                  </tr>
                  {totalList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.totali}</h4></td>
                        <td><h4>{val.totals}</h4></td>
                        <td><h4>{val.totald}</h4></td>
                        <td><h4>{val.totalsp}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteTotal(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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