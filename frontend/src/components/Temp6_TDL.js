import React, { useEffect, useState } from "react"

const Temp6_TDL = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [todoText, settodoText] = useState("");
  const [todoText2, settodoText2] = useState("");
 
  
  const [todoArray, settodoArray] = useState([])
  const [todo2Array, settodo2Array] = useState([])

 
  const addtodo = () => {
    fetch("http://localhost:5000/todo/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todoText,
      }),
    }).then((res) => {
      fetchtodos()
    })
  }
  const addtodo2 = () => {
    fetch("http://localhost:5000/todo2/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo2: todoText2,
      }),
    }).then((res) => {
      fetchtodos2()
    })
  }
        
 
  const fetchtodos = () => {
    fetch(url + "/todo/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        settodoArray(data)
      })
  }
  const fetchtodos2 = () => {
    fetch(url + "/todo2/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        settodo2Array(data)
      })
  }
  const deleteTodo = (id) => {
    fetch(url + "/todo/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchtodos();
      })
  }
  const deleteTodo2 = (id) => {
    fetch(url + "/todo2/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchtodos2();
      })
  }
 
  useEffect(() => {
    fetchtodos()
    fetchtodos2()
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
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">Today's Plan / ToDo List</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <input onChange={e => settodoText(e.target.value)} type="text" className="form-control" />
                        <button onClick={addtodo} className="btn btn-secondary"> <i class="fas fa-plus    "></i> </button>
                    </div>
                    <div style={{height : '12rem', overflow: 'auto'}}>
                    <ul className="list-group mt-3">
                      {todoArray.map((val) => (
                        <li className="list-group-item d-flex justify-content-between">
                          <p className="m-0 fw-bold">{val.todo}</p> 
                            &nbsp;&nbsp;&nbsp;<i class="fas fa-trash text-danger" 
                            onClick={e => deleteTodo(val._id)}></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">Very Important To-Dos</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <input onChange={e => settodoText2(e.target.value)} type="text" className="form-control" />
                        <button onClick={addtodo2} className="btn btn-secondary"> <i class="fas fa-plus    "></i> </button>
                    </div>
                    <div style={{height : '12rem', overflow: 'auto'}}>
                    <ul className="list-group mt-3">
                      {todo2Array.map((val) => (
                        <li className="list-group-item d-flex justify-content-between">
                          <p className="m-0 fw-bold">{val.todo2}</p> 
                            &nbsp;&nbsp;&nbsp;<i class="fas fa-trash text-danger" 
                            onClick={e => deleteTodo2(val._id)}></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        
        )
}
export default Temp6_TDL;