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
        meal: meal,
        dishName: dishName,
        recipe: recipe,
        ingredients: ingredients,
      }),
    }).then((res) => {
      fetchMeals()
    })
        
  };
  const fetchMeals = () => {
    fetch(url + "/meal/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMealList(data)
      })
  }
  const deleteMeal = (id) => {
    fetch(url + "/meal/delete/" + id, {method : 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        fetchMeals();
      })
  }
 
 
  useEffect(() => {
    fetchMeals()
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
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <i></i> About Us
              </button>
              <button className="btn btn-outline-secondary w-100 mt-3">
                {" "}
                <i></i> <i class="fa fa-phone" aria-hidden="true"></i> Contact Us
              </button>
              </div>
              
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="card top-card">
                <div className="card-header">
                  <h4 className="m-0">DAY ROUTINE MAPPING</h4>
                  </div>
                  <div className="card-header">
                  <h4 className="m-2">
                    <label>Time :</label>
                    <input type="text" placeholder="Enter time" onChange={(event) => {setMeal(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Name of the Dish :</label>
                    <input type="text" placeholder="Dish name" onChange={(event) => {setdishName(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Recipe of the Dish :</label>
                    <input type="text" placeholder="Enter recipe" onChange={(event) => {setrecipe(event.target.value);}}/>
                    </h4>
                    <h4 className="m-2">
                    <label>Main Ingredients :</label>
                    <input type="text" placeholder="Enter ingredients" onChange={(event) => {setingredients(event.target.value);}}/>
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
                  <h4 className="m-0">MEAL LIST</h4>
                </div>
                <table border={1} width="100%" cellPadding={10}>
                  <tbody>
                  <tr>
                    <th>Meal</th>
                    <th>Dish Name</th>
                    <th>Recipe</th>
                    <th>Ingredients</th>
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
                  {mealList.map((val,key) => {
                    return(
                      <tr key={key}>
                        <td><h4>{val.meal}</h4></td>
                        <td><h4>{val.dishName}</h4></td>
                        <td><h4>{val.recipe}</h4></td>
                        <td><h4>{val.ingredients}</h4></td>
                        <td><button className="btn btn-outline-secondary w-30 mt-2" onClick={() => deleteMeal(val._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>            
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