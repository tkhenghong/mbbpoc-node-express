# MaybankHeart POC

A Proof of Concept project for building a platform to provide

* Language translation (i18n/i10n)
* Configuration controls (Different backends for different countries/regions, modify redirect URLs & etc.)

## References:

* [Building in JavaScript with Internationalization (I18N) in Mind](https://phrase.com/blog/posts/node-js-i18n-guide/)
* [The Ultimate Guide to Node.js Internationalization (I18n)](https://phrase.com/blog/posts/node-js-i18n-guide/)
* [Internationalization and Localization in Node.js](https://www.npmjs.com/package/i18n)

## Initial code referenced:

* [PhraseApp-Blog/nodejs-i18n](https://github.com/PhraseApp-Blog/nodejs-i18n)
* [node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)

## Deployment

Current Strategy: Access into EC2 instance via SSH and deploy/update the app using Docker Compose.

### Steps:

* Create EC2 instance
* Access instance and
   install [Docker & Docker-compose](https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9)
* Insert secrets value into GitHub Actions Secrets:
    * host: ec2-XX-XXX-XXX-XXX.ap-southeast-1.compute.amazonaws.com
    * username: [Default: ec2-user]
    * key: Use the Private Key (PEM) file provided by EC2, copy its value and paste it into GitHub Actions Secret.
    * port: 22
* Set SSH Server Config in the EC2 Instance.
  See [here](https://github.com/appleboy/ssh-action/issues/80#issuecomment-1130407377).
* Start Docker Compose with HTTPS Let's Encrypt. Reference [link](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)