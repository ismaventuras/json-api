import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// accept json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ "message": "Hello, World" });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});