import React, { useEffect, useState } from "react"

const Temp3_TEP = () => {
    
  
  const url = "http://localhost:5000"
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [course1, setCourse1] = useState("");
  const [notes, setNotes] = useState("");
  const [credit, setcredit] = useState("");
  const [grade, setGrade] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [preparation, setPreparation] = useState("");

  
  const [TermList, setTermList] = useState([])
  const [ExamList, setExamList] = useState([])

 
  const addToTerm = () => {
    fetch("http://localhost:5000/term/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course1: course1,
        notes: notes,
        credit: credit,
        grade: grade,
      }),
    }).then((res) => {
      fetchTerm()
    })
        
  };
  const addToExam = () => {
    fetch("http://localhost:5000/exam/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course: course,
        date: date,
        preparation: preparation,
      }),
    }).then((res) => {
      fetchExam()
    })
        
  };
  const fetchTerm = () => {
    fetch(url + "/term/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTermList(data)
      })
  }
  const fetchExam = () => {
    fetch(url + "/exam/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setExamList(data)
      })
  }
  const deleteTerm = (id) => {
    fetch(url + "/term/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchTerm();
      })
  }
  const deleteExam = (id) => {
    fetch(url + "/exam/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchExam();
      })
  }
 
 
  useEffect(() => {
    fetchTerm()
    fetchExam()
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
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">TERM PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Name of the Course :</label>
                    <input type="text" placeholder="Enter course" onChange={(event) => {setCourse1(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Important Notes :</label>
                    <input type="text" placeholder="Enter note" onChange={(event) => {setNotes(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Credit of the Course :</label>
                    <input type="text" placeholder="Enter credit" onChange={(event) => {setcredit(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Grade Obtained :</label>
                    <input type="text" placeholder="Enter grade" onChange={(event) => {setGrade(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToTerm}>Add to List</button>
                  </h4>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">EXAM PLANNER</h4>
                  <h5 className="m-0">{new Date().toLocaleDateString()}</h5>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Name of the Course :</label>
                    <input type="text" placeholder="Enter course" onChange={(event) => {setCourse(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Date for the Exam:</label>
                    <input type="text" placeholder="Enter date" onChange={(event) => {setDate(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Preparation for Exam :</label>
                    <input type="text" placeholder="Prep note" onChange={(event) => {setPreparation(event.target.value);}}/>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={addToExam}>Add to List</button>
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
                  <h4 className="m-0">TERM PLAN</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Course</th>
                    <th>Notes</th>
                    <th>Credit</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                  {TermList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.course1}</h4></td>
                        <td><h4>{val.notes}</h4></td>
                        <td><h4>{val.credit}</h4></td>
                        <td><h4>{val.grade}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteTerm(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
                  <h4 className="m-0">EXAM PLAN</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Preparation</th>
                    <th>Actions</th>
                  </tr>
                  {ExamList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.course}</h4></td>
                        <td><h4>{val.date}</h4></td>
                        <td><h4>{val.preparation}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteExam(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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
export default Temp3_TEP;