import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
       <>
        <div>This is a dummy page
        </div>
        
        <Link className="nav-link mt-2" to="/payments">
          <span className="nav-link-text ml-3 p-2 border rounded bg-lighter">Click here to go to Payments</span>
        </Link>
      </>
    );
  }
  
  export default Home;