import React, { useEffect, useState } from "react"

const Temp5_BP = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [income, setincome] = useState("");
  const [amti, setamti] = useState("");
  const [saved, setsaved] = useState("");
  const [amts, setamts] = useState("");
  const [debt, setdebt] = useState("");
  const [amtd, setamtd] = useState("");
  const [dateexp, setdateexp] = useState("");
  const [categ, setcateg] = useState("");
  const [item, setitem] = useState("");
  const [amt, setamt] = useState("");
  const [totali, settotali] = useState("");
  const [totals, settotals] = useState("");
  const [totald, settotald] = useState("");
  const [totalsp, settotalsp] = useState("");

  
  const [budgetList, setBudgetList] = useState([])
  const [expenseList, setExpenseList] = useState([])
  const [totalList, setTotalList] = useState([])

 
  const addToBudget = () => {
    fetch("http://localhost:5000/budget/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        income: income,
        amti: amti,
        saved: saved,
        amts: amts,
        debt: debt,
        amtd: amtd,
      }),
    }).then((res) => {
      fetchBudget()
    })
        
  };
  const addToExpense = () => {
    fetch("http://localhost:5000/expense/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateexp: dateexp,
        item: item,
        categ: categ,
        amt: amt,
      }),
    }).then((res) => {
      fetchExpense()
    })
        
  };
  const addToTotal = () => {
    fetch("http://localhost:5000/total/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totali: totali,
        totals: totals,
        totald: totald,
        totalsp: totalsp,
      }),
    }).then((res) => {
      fetchBudget()
    })
        
  };
  const fetchBudget = () => {
    fetch(url + "/budget/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBudgetList(data)
      })
  }
  const fetchExpense = () => {
    fetch(url + "/expense/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setExpenseList(data)
      })
  }
  const fetchTotal = () => {
    fetch(url + "/total/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTotalList(data)
      })
  }
  const deleteBudget = (id) => {
    fetch(url + "/budget/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchBudget();
      })
  }
  const deleteExpense = (id) => {
    fetch(url + "/expense/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchExpense();
      })
  }
  const deleteTotal = (id) => {
    fetch(url + "/total/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchTotal();
      })
  }
 
 
  useEffect(() => {
    fetchBudget()
    fetchExpense()
    fetchTotal()
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
                  <h4 className="m-0">BUDGET PLANNER</h4>
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
                  <h4 className="m-0">EXPENSE PLANNER</h4>
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
                  <h4 className="m-0">TOTAL</h4>
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


        
 </div>
 </div>
        
        )
}
export default Temp5_BP;