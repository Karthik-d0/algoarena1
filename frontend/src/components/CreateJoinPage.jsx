import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { createRoom, joinRoom } from '../api/roomService';

const CreateJoinPage = () => {
  const navigate = useNavigate();
  const [roomIdInput, setRoomIdInput] = useState("");

  const handleCreateRoom = async () => {
    try {
      const response = await createRoom();
      const { roomId } = response.data;
      navigate(`/room/${roomId}`);
    } catch (error) {
      console.error('Error creating room:', error);
      alert('Failed to create room. Please try again.');
    }
  };

  const handleJoinRoom = async () => {
    try {
      const response = await joinRoom(roomIdInput);
      navigate(`/room/${roomIdInput}`);
    } catch (error) {
      console.error('Error joining room:', error);
      alert('Room not found. Please check the room ID.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Algo Arena</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomIdInput}
          onChange={(e) => setRoomIdInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleJoinRoom} style={styles.button}>Join Room</button>
        <button onClick={handleCreateRoom} style={styles.button}>Create New</button>
      </div>
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
  title: {
    fontSize: '3rem',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#ff5722',
    letterSpacing: '2px',
  },
  formContainer: {
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
  input: {
    width: '100%',
    padding: '12px 20px',
    marginBottom: '20px',
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
    marginBottom: '15px', // Margin to space out buttons
  },
};

export default CreateJoinPage;
