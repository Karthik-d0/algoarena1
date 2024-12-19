import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@monaco-editor/react';

const RoomPage = () => {
  const { roomId } = useParams();
  const [code, setCode] = useState('// Start coding here!');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Room</h1>
      <p style={styles.roomId}>Room ID: {roomId}</p>
      <div style={styles.editorContainer}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={(value) => setCode(value)}
          options={{
            wordWrap: 'on',
            minimap: { enabled: false },
          }}
        />
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
    fontWeight: 'bold',
    color: '#ff5722',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  roomId: {
    fontSize: '1rem', // Smaller font size for the room ID
    color: '#ccc',
    marginBottom: '30px',
  },
  editorContainer: {
    margin: '0 auto',
    width: '90vw', // Set width to 90% of the viewport width
    height: '400px', // Fixed height for the editor
    border: '1px solid #444', // Dark border to match the theme
    borderRadius: '5px',
  },
};

export default RoomPage;
