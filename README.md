# README

This is a template repository for running hyper63 on render.

* It uses [Render Disks](https://render.com/docs/disks) for persistent storage.
* hyper63 runs in your [Render private network](https://render.com/docs/private-services) so it isn't exposed to the public internet.

## Deployment

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## Environment

When deployed, go to Environment and grap the SECRET value, this secret will be used to validate JWT Tokens for 
the service.

> NOTE: this deployment plan will create 5 services on render, 4 will cost $15/mo and 1 will cost $7/mo.
