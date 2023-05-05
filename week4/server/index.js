const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFeedback, changeComment,getFeedback, deleteComment } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/feedback", addFeedback)
app.put("/api/feedback/:id", changeComment)
app.get("/api/feedback", getFeedback)
app.delete("/api/feedback/:id", deleteComment)
 
app.listen(4000, () => console.log("Server running on 4000"));
