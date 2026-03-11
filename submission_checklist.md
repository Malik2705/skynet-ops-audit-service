## 1) Candidate & Submission Info

Name: Malik  
Email: malikibrahimat89@gmail.com

Chosen Cloud Platform: AWS  

Assessment Level Submitted: Level 1 + Level 2  

Level 2 option chosen: Option B – CI/CD for Safe Cloud Deployments

Implemented a GitHub Actions pipeline that automatically runs on push to the main branch to validate and build the service.  

GitHub Repo Link:
https://github.com/Malik2705/skynet-ops-audit-service

Demo Video Link:
<https://drive.google.com/file/d/1psR3wZ8Uczgzs9ufrd2Re9o8DNFQemqY/view?usp=sharing>

Submission Date (UTC):
11 March 2026

## 2) What I Implemented

### Level 1

✔ Minimal Node.js service with endpoints:
- GET /health
- POST /events
- GET /events

✔ Dockerized service with Dockerfile

✔ CI pipeline using GitHub Actions

✔ Basic cost awareness notes

✔ Observability documentation

✔ Security and secrets approach (.env.example)

✔ Operational runbook

✔ README with setup instructions

## 3) Repository Structure

Service Code
Service path: /
Main entry file: server.js
Local run command: node server.js

Docker
Dockerfile path: ./Dockerfile
.dockerignore path: Not included

Infrastructure as Code
IaC tool used: None (local deployment demonstration)

Docs
README path: ./README.md
Cost report path: ./docs/cost-report.md
Runbook path: ./docs/runbook.md
Observability notes path: ./docs/observability.md

Level 2
Implementation path: .github/workflows/main.yml
Documentation path: README.md

## 4) Local Run Instructions

Prerequisites
- Node.js installed
- Docker installed
- Git installed

Local Setup

git clone https://github.com/Malik2705/skynet-ops-audit-service
cd skynet-ops-audit-service
npm install

Run Service Locally

node server.js

Test Endpoints

curl http://localhost:3000/health

curl -X POST http://localhost:3000/events \
-H "Content-Type: application/json" \
-d '{"type":"roster_update","tenantId":"academy_001","severity":"info","message":"Instructor schedule updated","source":"skynet-api"}'

curl http://localhost:3000/events


## 6) Cloud Deployment Summary

Deployment Type
Local container deployment using Docker

Compute: Containerized Node.js service
Logging: Application console logs
Container Image: Built locally using Docker
CI/CD: GitHub Actions workflow
Version Control: GitHub repository

Why I chose this architecture
- Simple microservice architecture
- Easy container deployment
- Lightweight service for audit events
- Easy to extend for cloud deployment (ECS, Kubernetes)

Pilot Cost Awareness Notes
- Use serverless containers like ECS Fargate to reduce idle costs
- Use log retention policies
- Use auto-scaling for traffic spikes

## 7) Cost Optimization Report

Cost Controls Implemented

- Use lightweight Node.js container
- Avoid large compute instances
- Log retention limits
- Auto-scaling recommendation
- Monitoring usage metrics

Common Cost Traps

1. Idle compute resources
2. Unlimited log retention
3. Large container images
4. Unused cloud storage
5. Over-provisioned instances
6. Unmonitored API traffic
7. Missing cost alerts
8. Lack of auto-scaling

## 8) Observability & Monitoring

Logging
- Structured logs implemented
- Console logging used for API events
- Logs include request details and status

Metrics
- Request count monitoring
- API error rate tracking
- Health endpoint monitoring
- Latency monitoring for API requests

Alerts
Alert #1: Service health endpoint failure
Alert #2: High error rate

Evidence
- Logs generated during API calls
- Monitoring configuration documented in observability.md

## 9) Security / Secrets / IAM

Secrets
- No secrets committed to repository
- .env.example provided

IAM / Access Control
- Repository access limited to owner
- Least privilege principle recommended

Security Basics
- Containerized application
- No public secrets exposed

## 10) Ops Runbook

Covered scenarios

- Service down / health check failure
- High latency
- Sudden spike in API traffic
- Failed deployment rollback
- Misconfiguration troubleshooting

## 13) AI Tool Usage Disclosure

AI tools used
- ChatGPT

What I used AI for
- Understanding DevOps concepts
- Guidance on project structure
- Help writing documentation

What I manually verified
- API endpoints
- Docker container build
- GitHub Actions pipeline
- Service functionality


## 14) Final Notes

This project demonstrates a simple DevOps audit logging service with containerization, CI/CD pipeline, and operational documentation. The architecture is designed to be easily extendable for cloud deployment.

Future improvements:
- Deploy the container on AWS ECS or Kubernetes
- Add centralized logging and monitoring dashboards
- Implement auto-scaling policies
