# Operations Runbook

## Service Down

Steps:

1. Check container status
2. Restart container
3. Check logs for errors

Command example:

docker ps
docker restart <container_id>

## High Latency

Possible causes:

* High request load
* Storage slowdown

Actions:

* Check CPU usage
* Review logs
* Restart service if needed

## Cost Spike

Steps:

1. Check running cloud resources
2. Identify idle instances
3. Remove unused resources

## Deployment Failure

Steps:

1. Check Docker build logs
2. Verify environment variables
3. Rebuild container image
