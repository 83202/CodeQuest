const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoutes');
const dbConnect = require('./config/db');
dbConnect.connect();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/search', searchRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
