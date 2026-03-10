# Skynet Ops Audit Service

## Overview

This project implements a small audit logging service for operational events.
It allows storing and retrieving operational events using REST APIs.

The service is containerized using Docker and designed to demonstrate
Cloud Operations practices like configuration management and deployment readiness.

## API Endpoints

### Health Check

GET /health

Example:
http://localhost:3000/health

### Store Event

POST /events

Example request:

{
"type": "roster_update",
"tenantId": "academy_001",
"severity": "info",
"message": "Instructor schedule updated",
"source": "skynet-api"
}

### Retrieve Events

GET /events

Example:
http://localhost:3000/events

## Run Locally

Install dependencies

npm install

Run service

node server.js

Server will run on

http://localhost:3000

## Run With Docker

Build Docker image

docker build -t audit-service .

Run container

docker run -p 3000:3000 audit-service

## Environment Variables

PORT=3000
NODE_ENV=dev
LOG_LEVEL=info
STORE_BACKEND=memory

See `.env.example` file for configuration.

## Project Structure

skynet-ops-audit-service

server.js
Dockerfile
package.json
events.json
.env.example
README.md
