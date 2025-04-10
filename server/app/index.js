const dotenv = require("dotenv");
const connectDB = require("./shared/config/database");
const app = require("./app"); // Import the Express app

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
