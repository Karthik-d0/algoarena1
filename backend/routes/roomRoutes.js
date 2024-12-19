import express from "express";
import { Room } from '../models/Room.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Route to create a new room
router.post('/', async (req, res) => {
    try {
      // Generate a unique room ID
      const roomId = uuidv4();
      
      // Create a new room document in the database
      const newRoom = new Room({
        roomId,
      });
      
      await newRoom.save(); // Save the room to the database
      
      res.status(201).json({ roomId: newRoom.roomId });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Route to check if a room exists
router.get('/:roomId', async (req, res) => {
    try {
      const room = await Room.findOne({ roomId: req.params.roomId });
      
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
      
      res.status(200).json({ message: 'Room found', roomId: room.roomId });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });

export default router;