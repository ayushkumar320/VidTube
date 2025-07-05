import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    crededntials: true,
  })
);

// Common midleware
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// Import Routes

import healthcheckRouter from "./routes/healthcheck.routes.js";

// Routes

app.use("/api/v1/healthcheck", healthcheckRouter);

export {app};
