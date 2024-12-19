import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      alert(response.data.message);
      navigate("/create-join"); // Redirect to login page after signup
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Email might already be in use.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h1 style={styles.heading}>Signup</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#121212', // Dark background
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e', // Darker container for form
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    marginBottom: '15px',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #444',
    borderRadius: '5px',
    outline: 'none',
  },
  button: {
    padding: '14px 0',
    fontSize: '1.1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff5722',
    color: '#fff',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
  },
};

export default SignupPage;
