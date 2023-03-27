import React from "react"
import "./Templates.css"

const Templates = () => {
    
    return(
        <div class="body">
        <div class="container">
    <h1 class="text-center">TEMPLATES</h1>
    <hr/>
    <div class="row">
        <div class="col-sm-6 col-md-4 mt-4 col-lg-3">
            <div class="card">
               <div class="card-header">
                    <h4>Template 1</h4>

                </div>
                
                <div class="card-body">
                    <img class="card-img" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4e40d1c-1e7a-48cc-acce-fab5b858c93b/air-jordan-1-zoom-cmft-shoes-mDxHSk.png"></img>
                    <i class="fas fa-star text-warning"></i>
                    <span>4.5<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" /></span>
                    <h4>Nike Shoes</h4>
                    <p class="text-muted">Tennis Shoes</p>                    
                    <button class="btn btn-primary">Buy Now
                    <i class="fa-solid fa-cart-shopping"></i>
                    </button>

                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
    )
}
export default Templates;