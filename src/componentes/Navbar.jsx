import React, { useState } from "react";

function Navbar(selectedProducts) {
  const [count, setCount] = useState(0);

  const Incrementar = () => {
    setCount(count + 1);
  };

  const Decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="navbar-logo">
          <img 
            src='https://1.bp.blogspot.com/-XTZt_IRapI0/YHIclsUsdoI/AAAAAAABjK8/hWjSyl0oyn4cNVoE_mfWo-0-0ng47KOMACLcBGAsYHQ/s0/Talleres%2Bde%2BCordoba256x.png' 
            alt="Logo" 
            className="logo" 
          />
        </div>
      
        <div className="button1">
          <button onClick={Incrementar}>+</button>
          </div>
          <div className="counter">
          <h2>Cantidad de productos: {count}</h2>
        </div>
          <div className="button2">
          <button onClick={Decrementar}>-</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
