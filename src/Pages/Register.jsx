// import { toast } from "react-toastify";
// import "./Register.css";

// function Register() {
//   const handleRegister = (e) => {
//     e.preventDefault();
//     toast.success("Registered Successfully!");
//   };

//   return (
//     <form className="form" onSubmit={handleRegister}>
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" required />
//       <input type="email" placeholder="Email" required />
//       <input type="password" placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;


import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";
import "./Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password
    };

    try {

      await API.post("/users/register", user);

      toast.success("Registered Successfully!");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {

      toast.error("Registration Failed");

    }
  };

  return (
    <form className="form" onSubmit={handleRegister}>

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>

    </form>
  );
}

export default Register;