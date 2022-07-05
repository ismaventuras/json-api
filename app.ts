import express from "express";

const app = express();

// accept json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ "message": "Hello, World" });
});

export default app

