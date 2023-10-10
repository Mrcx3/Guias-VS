import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <div>
        <h1>Navbar</h1>   
        <ul>
          {/* lista que contiene un componente Link. Cuando haces clic en este enlace, te lleva a la ruta /main1 */}
          <li><Link to="/main1">Main 1</Link></li>
          <li><Link to="/main2">Main 2</Link></li>         
        </ul>     
      </div>
    );
  }
  
  export default Navbar;