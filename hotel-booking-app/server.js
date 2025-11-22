// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Update with your MySQL username
  password: '',        // Update with your MySQL password
  database: 'hotel'    // Your existing database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Routes

// Get all room categories
app.get('/api/rooms/categories', (req, res) => {
  const query = 'SELECT * FROM room_category';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Get room category by name
app.get('/api/rooms/categories/:name', (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM room_category WHERE roomname = ?';
  db.query(query, [name], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Room category not found' });
      return;
    }
    res.json(results[0]);
  });
});

// Get all rooms
app.get('/api/rooms', (req, res) => {
  const query = 'SELECT * FROM rooms';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Get available rooms (simplified - in real app, you'd check dates)
app.get('/api/rooms/available', (req, res) => {
  const query = 'SELECT * FROM rooms WHERE book = "false"';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Book a room
app.post('/api/rooms/book', (req, res) => {
  const { checkin, checkout, name, phone, roomname } = req.body;
  
  // First, get the room category to know which room_id to book
  const getRoomQuery = 'SELECT room_id FROM rooms WHERE room_cat = ? AND book = "false" LIMIT 1';
  
  db.query(getRoomQuery, [roomname], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    if (results.length === 0) {
      res.status(400).json({ error: 'No available rooms in this category' });
      return;
    }
    
    const roomId = results[0].room_id;
    
    // Update the room with booking information
    const updateRoomQuery = 'UPDATE rooms SET checkin = ?, checkout = ?, name = ?, phone = ?, book = "true" WHERE room_id = ?';
    
    db.query(updateRoomQuery, [checkin, checkout, name, phone, roomId], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      // Update room category availability
      const updateCategoryQuery = 'UPDATE room_category SET available = available - 1, booked = booked + 1 WHERE roomname = ?';
      db.query(updateCategoryQuery, [roomname], (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        
        res.json({ message: `Room in ${roomname} category booked successfully for ${name}!`, roomId });
      });
    });
  });
});

// Get all managers (for admin functions)
app.get('/api/managers', (req, res) => {
  const query = 'SELECT uid, uname, fullname, uemail FROM manager';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  const query = 'SELECT * FROM manager WHERE uname = ? AND upass = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Add a new room category
app.post('/api/rooms/categories', (req, res) => {
  const { roomname, room_qnty, available, booked, no_bed, bedtype, facility, price } = req.body;
  
  const query = 'INSERT INTO room_category (roomname, room_qnty, available, booked, no_bed, bedtype, facility, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [roomname, room_qnty, available, booked, no_bed, bedtype, facility, price], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Room category added successfully' });
  });
});

// Update a room category
app.put('/api/rooms/categories/:name', (req, res) => {
  const { name } = req.params;
  const { room_qnty, available, booked, no_bed, bedtype, facility, price } = req.body;
  
  const query = 'UPDATE room_category SET room_qnty = ?, available = ?, booked = ?, no_bed = ?, bedtype = ?, facility = ?, price = ? WHERE roomname = ?';
  db.query(query, [room_qnty, available, booked, no_bed, bedtype, facility, price, name], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Room category updated successfully' });
  });
});

// Delete a room category
app.delete('/api/rooms/categories/:name', (req, res) => {
  const { name } = req.params;
  
  const query = 'DELETE FROM room_category WHERE roomname = ?';
  db.query(query, [name], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Room category deleted successfully' });
  });
});

// Get all booked rooms
app.get('/api/rooms/booked', (req, res) => {
  const query = 'SELECT * FROM rooms WHERE book = "true"';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Get all customers (booked rooms with customer details)
app.get('/api/customers', (req, res) => {
  const query = 'SELECT room_id, room_cat, name, phone, checkin, checkout FROM rooms WHERE book = "true"';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Delete a customer booking
app.delete('/api/customers/:roomId', (req, res) => {
  const { roomId } = req.params;
  
  const query = 'UPDATE rooms SET name = "", phone = 0, checkin = "0000-00-00", checkout = "0000-00-00", book = "false" WHERE room_id = ?';
  db.query(query, [roomId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    // Update room category availability
    const getRoomCatQuery = 'SELECT room_cat FROM rooms WHERE room_id = ?';
    db.query(getRoomCatQuery, [roomId], (err, roomResults) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      if (roomResults.length > 0) {
        const roomCat = roomResults[0].room_cat;
        const updateCatQuery = 'UPDATE room_category SET available = available + 1, booked = booked - 1 WHERE roomname = ?';
        db.query(updateCatQuery, [roomCat], (err) => {
          if (err) {
            res.status(500).json({ error: err.message });
            return;
          }
          res.json({ message: 'Customer booking deleted successfully' });
        });
      } else {
        res.json({ message: 'Customer booking deleted successfully' });
      }
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});