import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
function Navbar() {

    const {user} = useContext(AuthContext);


console.log(user)
 
  return (
    <div>
      {user?(
        <h2>welcome {user.name}</h2>
      ):(
        <p>please Login</p>
      )}
    </div>
  );
}

export default Navbar;
