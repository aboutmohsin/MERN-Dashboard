// import express from "express";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/DB.js";
import Routes from "./routes/route.js";
const app = express();
// Database
Connection();

dotenv.config();

//Routes
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: "https://mern-dashboard-frontend-three.vercel.app/",
    methods: ["GET,POST,PUT,DELETE"],
    credentials: true,
  })
);
app.use("/", Routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running   Successfully on PORT: ${process.env.PORT}`);
});
