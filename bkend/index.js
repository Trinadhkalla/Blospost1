require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
const route = require("./routes/route");
let cors = require("cors");
let app = express();

app.use(express.json());
app.use(cors());

// Use MONGO_URI and PORT from .env
mongoose.connect("mongodb://127.0.0.1:27017/postdb").then(() => {
    console.log("Database connected");
});

app.use("/", route);
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
