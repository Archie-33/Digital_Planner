import React, { useEffect, useState } from "react"

const Temp5_BP = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [income, setIncome] = useState("");
  const [amti, setAmti] = useState("");
  const [saved, setSaved] = useState("");
  const [amts, setAmts] = useState("");
  const [debt, setDebt] = useState("");
  const [amtd, setAmtd] = useState("");
  const [dateexp, setDateexp] = useState("");
  const [item, setItem] = useState("");
  const [categ, setCateg] = useState("");
  const [amt, setAmt] = useState("");
  const [totali, setTotali] = useState("");
  const [totals, setTotals] = useState("");
  const [totald, setTotald] = useState("");
  const [totalsp, setTotalsp] = useState("");

  
  const [BudgetList, setBudgetList] = useState([])
  const [ExpenseList, setExpenseList] = useState([])
  const [TotalList, setTotalList] = useState([])

 
  const addTobudget = () => {
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
      fetchTotal()
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
              <div className="card side1-card">
                <div className="card-header">
                  <h4 className="m-0">BUDGET PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Source of Income :</label>
                    <input type="text" placeholder="Enter income" onChange={(event) => {setIncome(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Income Amount :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setAmti(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Amount Saved for :</label>
                    <input type="text" placeholder="saved for" onChange={(event) => {setSaved(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Amount to be Saved :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setAmts(event.target.value);}}/>                    
                  </h4>
                  <h4 className="m-2">
                    <label>Nature of the Debt :</label>
                    <input type="text" placeholder="Enter debt" onChange={(event) => {setDebt(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Amount of the Debt :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setAmtd(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addTobudget}>Add to List</button>
                    </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">EXPENSE TRACKER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Date of Expense :</label>
                    <input type="text" placeholder="Enter date" onChange={(event) => {setDateexp(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Item of Expense :</label>
                    <input type="text" placeholder="Enter item" onChange={(event) => {setItem(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Category of Item :</label>
                    <input type="text" placeholder="Enter category" onChange={(event) => {setCateg(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Amount of Item :</label>
                    <input type="text" placeholder="Enter amount" onChange={(event) => {setAmt(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToExpense}>Add to List</button>
                    </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">TOTAL</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Total Amount of Income :</label>
                    <input type="text" placeholder="Enter total" onChange={(event) => {setTotali(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Total Amount Saved :</label>
                    <input type="text" placeholder="Enter total" onChange={(event) => {setTotals(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Total Amount of Debt :</label>
                    <input type="text" placeholder="Enter total" onChange={(event) => {setTotald(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Total Amount Spend :</label>
                    <input type="text" placeholder="Enter total" onChange={(event) => {setTotalsp(event.target.value);}}/>
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
                    <th>Income source</th>
                    <th>Amount</th>
                    <th>Saved for</th>
                    <th>Amount</th>
                    <th>Debt</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                  {BudgetList.map((val,key) => {
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
                  {ExpenseList.map((val,key) => {
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
                    <th>Total Saved</th>
                    <th>Total Debt</th>
                    <th>Total Spend</th>
                    <th>Actions</th>
                  </tr>
                  {TotalList.map((val,key) => {
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
export default Temp5_BP;