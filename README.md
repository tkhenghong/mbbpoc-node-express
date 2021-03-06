# MBB POC

A Proof of Concept project for building a platform to deploy instances with dynamic Environment/Configuration controls (Different backends for different countries/regions, modify redirect URLs & etc.)

## References:

* [Building in JavaScript with Internationalization (I18N) in Mind](https://phrase.com/blog/posts/node-js-i18n-guide/)
* [The Ultimate Guide to Node.js Internationalization (I18n)](https://phrase.com/blog/posts/node-js-i18n-guide/)
* [Internationalization and Localization in Node.js](https://www.npmjs.com/package/i18n)
* [Nginx and Let’s Encrypt with Docker in Less Than 5 Minutes](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)
* [Setup HTTPS For Nginx On AWS EC2 Linux Instance Using Docker And Certbot](https://www.c-sharpcorner.com/article/setup-https-for-nginx-on-aws-ec2-linux-instance-using-docker-and-certbot/)
## Initial code referenced:

* [node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)

## Deployment

Current Strategy: Access into EC2 instance via SSH and deploy/update the app using Docker Compose.

### Steps:

* Create EC2 instance
* Access instance and
   install [Docker & Docker-compose](https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9)
  * You may experience some issues with Docker-compose like Problem 1
* Insert secrets value into GitHub Actions Secrets:
    * host: ec2-XX-XXX-XXX-XXX.ap-southeast-1.compute.amazonaws.com
    * username: [Default: ec2-user]
    * key: Use the Private Key (PEM) file provided by EC2, copy its value and paste it into GitHub Actions Secret.
    * port: 22
* Set SSH Server Config in the EC2 Instance.
* In Route 53, under your domain name, create TWO(2) records with the following details:
  * Record name: poc.maybankheart.com
     * Record Type: A
     * Routing Policy: Simple
     * Value: 18.139.219.182 (Your EC2 instance public IPv4 address)
  * Record name: www.poc.maybankheart.com
     * Record Type: A
     * Routing Policy: Simple
     * Value: 18.139.219.182 (Your EC2 instance public IPv4 address)
* Start Docker Compose with HTTPS Let's Encrypt. [Link](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)

## Problems
1. Issue where unable to SSH into the EC2 instance from GitHub Action: [Link](https://github.com/appleboy/ssh-action/issues/80#issuecomment-1130407377)
2. docker-compose command not found when using sudo: [Link](https://stackoverflow.com/a/50243566)
3. Let's Encrypt: too many failed authorizations recently... : [Link](https://community.letsencrypt.org/t/error-creating-new-order-too-many-failed-authorizations-recently-see-https-letsencrypt-org-docs-rate-limits/98069)
