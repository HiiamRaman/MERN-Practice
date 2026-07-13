import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    age: "",
    terms: false,
    gender: "",
    country: "",
  });

  const[error,setError] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);

    
      setFormData((previous) => ({
        ...previous,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      }));
    
  }



  function handleSubmit(event){
    event.preventDefault();

    console.log("form submitted")
    const newErrors=  {};
    console.log("newErrors",newErrors);

    if(formData.fullName === ''){
        newErrors.fullName = 'FullName is required !!'
    }
    if(formData.email === ''){
        newErrors.email = 'email is required !!'
    }
    if(formData.password === ''){
      newErrors.password= 'password is required'
    }


    setError(newErrors);
    console.log("error",error);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""> Full name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={formData.password}
        placeholder="Enter password"
        onChange={handleChange}
      />
      <input
        type="text"
        name="confirmPassword"
        value={formData.confirmPassword}
        placeholder="Enter confirmPassword"
        onChange={handleChange}
      />
      <input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        placeholder="Enter phoneNumber"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={formData.age}
        placeholder="Enter age"
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="terms"
       
        onChange={handleChange}
      />

      <label htmlFor="">
        {" "}
        Male{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="">
        {" "}
        Female{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />{" "}
      </label>

      <select name="country" value={formData.country} onChange={handleChange} id="">
    <option value="Nepal">Nepal</option>
    <option value="Australia">Australia</option>
    <option value="Thailand">Thailand</option>

      </select>

      <button type="submit">Submit</button>
    </form>

  );
}

export default Register;
