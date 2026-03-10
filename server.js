require("dotenv").config();
const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

let events = [];

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "skynet-ops-audit-service",
    environment: "dev",
    timestamp: new Date()
  });
});

app.post("/events", (req, res) => {

  const { type, tenantId, severity, message, source } = req.body;

  if (!tenantId || !message) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const event = {
    eventId: uuidv4(),
    type,
    tenantId,
    severity,
    message,
    source,
    storedAt: new Date()
  };

  events.push(event);

  res.status(201).json({
    success: true,
    eventId: event.eventId
  });
});

app.get("/events", (req, res) => {
  res.json({
    items: events,
    total: events.length
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});