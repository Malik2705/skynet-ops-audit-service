# Cost Optimization Report

## Assumptions

This service is designed for pilot-scale usage with approximately:

* 5,000–20,000 API requests per day
* 200–2,000 events stored per day
* Small JSON payloads (0.5 KB – 5 KB)

## Proposed Deployment (AWS Example)

Compute:

* AWS ECS Fargate (small container)

Storage:

* Lightweight storage (JSON / SQLite)

Networking:

* Basic public endpoint

Logging:

* CloudWatch Logs

## Estimated Monthly Cost

| Component                | Estimated Cost |
| ------------------------ | -------------- |
| ECS Fargate (small task) | $15            |
| Storage                  | $3             |
| Logs                     | $5             |
| Network traffic          | $5             |

Estimated total: **$25–$30 per month**

## Cost Optimization Strategies

* Use small container resources
* Scale to zero for dev environments
* Limit log retention to 7–14 days
* Avoid unused resources
* Monitor usage with cloud billing alerts

