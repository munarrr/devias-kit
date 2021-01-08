import React from 'react'

const Pages = () => {
     return (
          <div className="App">
          <Header  />
          <div className="col-3">
          <Sidebar /> 
          </div>
          <div className="col-9">
          <Route  exact  path="/Dashboard" component={Dashboard}/>
          <Route  path="/users" component={manage}/>
          <Route  path="/products" component={Products}/>
          </div>
      </div>
     )
}

export default Pages

