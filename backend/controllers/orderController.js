
const pool = require('../database');

const submitOrder = async (req, res) => {
  const { title, description, size, paper_type, volume, deadline } = req.body;

  const query = `
    INSERT INTO orders (title, description, size, paper_type, volume, deadline)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
  `;

  const values = [title, description, size, paper_type, volume, deadline];

  try {
    const result = await pool.query(query, values);
    res.status(200).json({
      message: 'Order submitted successfully',
      orderId: result.rows[0].id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error inserting order', error });
  }
};

const getOrders = async (req, res) => {
  try {
    const query = `
      SELECT 
        id, 
        title, 
        status, 
        created_at as date
      FROM orders
      ORDER BY created_at DESC
    `;
    
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

module.exports = {
  submitOrder,
  getOrders,
};
