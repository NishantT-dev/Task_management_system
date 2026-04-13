import express from "express";
import router from "./routes/taskRoutes.js";
import morgan from "morgan";
import path from "path"
import cors from "cors"
const app = express();

// app level middlewares
app.use(cors());             
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public"))); // put HTML files in /public

app.use("/api", router);

export default app;
