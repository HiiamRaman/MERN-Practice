import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth.context";

function Login() {

  const {user,login} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    console.log("value ", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    const newErrors = {};

    if (formData.email === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required ";
    }
    if (formData.firstname === "") {
      newErrors.firstname = "Firstname is required";
    }
    if (formData.lastname === "") {
      newErrors.lastname = "last name is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const fakeUser = {
        id: 1,
        name: formData.firstname,
        email: formData.email,
      };
      login(fakeUser)
      setLoading(false);
    }, 2000);
    console.log("Error ", newErrors);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="text"
        name="firstname"
        value={formData.firstname}
        placeholder="Enter first name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        value={formData.lastname}
        placeholder="Enter last name"
        onChange={handleChange}
      />
      <input
        className="border"
        name="email"
        type="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="border"
        name="password"
        type="password"
        placeholder="Enter Your password "
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "loggginng innn" : "Log in"}
      </button>
    </form>
  );
}

export default Login;
