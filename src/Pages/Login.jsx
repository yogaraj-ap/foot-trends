// import { useState } from "react";
// import { toast } from "react-toastify";
// import API from "../services/api";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/users/login", {
//         email: email,
//         password: password,
//       });

//       if (res.data) {
//         localStorage.setItem("user", JSON.stringify(res.data));
//         toast.success("Login Successful!");
//       } else {
//         toast.error("Invalid credentials");
//       }

//     } catch (error) {
//       toast.error("Login Failed!");
//       console.error(error);
//     }
//   };

//   return (
//     <form className="form" onSubmit={handleLogin}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;


import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post("/users/login", {
        email,
        password
      });

      const user = response.data;

      if (user && user.id) {

        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Login Successful!");

        // optional redirect
        window.location.href = "/";

      } else {
        toast.error("Invalid Email or Password");
      }

    } catch (error) {

      console.error("Login Error:", error);
      toast.error("Server Error! Please try again.");

    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>

      <h2>Login</h2>

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

      <button type="submit">Login</button>

    </form>
  );
}

export default Login;