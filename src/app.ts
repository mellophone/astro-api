import express from "express";
import cors from "cors";

import httpLogger from "./utils/logger/http-logger";

import indexRoute from "./routes/index";
import memberRoute from "./routes/member";
import eventRoute from "./routes/event";
import transactionsRoute from "./routes/transactions";
import authRoute from "./routes/auth";

const app = express();

// Configuration
app.use(express.json());
app.use(cors());
app.use(httpLogger);

// Routes
app.use("/", indexRoute);
app.use("/member", memberRoute);
app.use("/event", eventRoute);
app.use("/transactions", transactionsRoute);
app.use("/auth", authRoute);

// Default to 404 if Endpoint/Method Not Recognized
app.use((req, res) => res.status(404).json({ message: "Not found" }));

export default app;
