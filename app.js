const express = require('express'); 
const dotenv = require('dotenv');

dotenv.config()

const app = express(); app.use(express.urlencoded({ extended: true }));

const PORT = 4000; app.listen(PORT, 
  () => { console.log(`Server running on port ${PORT}`); });
