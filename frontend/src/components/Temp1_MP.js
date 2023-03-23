import TimeAgo from "javascript-time-ago"
import React, { useEffect, useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import { DayPicker } from "@mui/x-date-pickers/internals"


const isWeekend = (date) => {
  const day = date.day()

  return day === 0 || day === 6
}

const Temp1_MP = () => {
    
  const [value, setValue] = React.useState(dayjs())
 
  
  

  const url = "http://localhost:5000"
  const [planText, setPlanText] = useState("")
  const [reminderText, setReminderText] = useState("")
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [noteText, setNoteText1] = useState(currentUser.notes)

  const [planArray, setPlanArray] = useState([])
  const [reminderArray, setReminderArray] = useState([])

  const timeAgo = new TimeAgo("en-US")

  const addPlan = () => {
    fetch("http://localhost:5000/plan/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: planText,
        createdBy: currentUser._id,
        createdAt: new Date(),
      }),
    }).then((res1) => {
      fetchPlans()
    })
  }
 
  const updateNote1 = () => {
    fetch("http://localhost:5000/user/update/" + currentUser._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notes: noteText,
      }),
    }).then((res1) => {
      refreshUser()
    })
  }

  const fetchPlans = () => {
    fetch(url + "/plan/getall")
      .then((res1) => res1.json())
      .then((data) => {
        console.log(data)
        setPlanArray(data)
      })
  }
 
  const refreshUser = () => {
    fetch(url + "/user/getbyid/" + currentUser._id)
      .then((res1) => res1.json())
      .then((data) => {
        console.log(data)
        setCurrentUser(data)
        sessionStorage.setItem("user", JSON.stringify(data))
      })
  }

  useEffect(() => {
    fetchPlans()
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
              <button className="btn btn-outline-primary w-100">
                {" "}
                <a class="text-reset me-3" href="Home">
                <i class="fas fa-home"></i> Home
                </a>
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="#">
                <i></i> Account
                </a>
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <i></i> Settings 
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="Dashboard">
                <i></i> Dashboard
                </a>
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="#">
                <i></i> Templates
                </a>
              </button>
              <button className="btn btn-outline-primary w-100 mt-3">
                {" "}
                <a class="text-reset me-3" href="#">
                <i></i> <i class="fa fa-trash" aria-hidden="true"></i> Trash
                </a>
              </button>
              </div>
          </div>
        </div>
        <div className="col-md-10">
        <div className="row mt-4">
            <div className="col-md-8">
              <div className="card bottom-card">
                <div className="card-header">
                  <h4 className="m-0">Notes</h4>
                </div>
                <div className="card-body">
                  <textarea value={noteText} onChange={(e) => setNoteText1(e.target.value)} className="form-control" rows="8"></textarea>
                  <button className="btn btn-primary float-end mt-3" onClick={updateNote1}>
                    {" "}
                    <i class="fas fa-pen    "></i>{" "}
                  </button>
                </div>
              </div>
              </div>
        </div>
      </div>
 </div>
 </div>
        
        )
}
export default Temp1_MP;