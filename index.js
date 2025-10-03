
import "./database/db.js";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes/index.js";

import { insertDefaults } from "./utility/defaultData.js";
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["https://admin.playzap.games"], 
  credentials:true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//#region Routes
app.use("/api/admin", adminRoutes);

// Start server and set up webhook
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  insertDefaults();
});

app.get("/", (req, res) => {
  res.send("Server is running");
});


