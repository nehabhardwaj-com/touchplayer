import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor(){
        super();
        console.log("I am in constructo2r");
        this.state = {
            articles: [],
            loading: false,
            page :1,
        }
    }
   
  render() {
    return ( 
          
              <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-dark my-3" type="button"> Sports </button>
  <button className="btn btn-dark my-3" type="button"> Movies </button>
  <button className="btn btn-dark my-3" type="button">Political</button>
  <button className="btn btn-dark my-3" type="button">Bussiness</button>
</div>
          
        
      )
  }
}

export default Sidebar
