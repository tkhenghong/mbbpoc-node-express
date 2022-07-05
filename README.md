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
### GitHub Actions


### Build Amazon EC2 with Amazon Linux 2 with Docker and Docker Compose
* [Amazon Linux 2 - install docker & docker-compose using 'sudo amazon-linux-extras' command](https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9)
  * Create public-private key pair
    * ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    * cat .ssh/id_rsa.pub | ssh b@B 'cat >> .ssh/authorized_keys2'
    * clip < ~/.ssh/id_rsa
    * Copy the private key value from the last command and paste it in GitHub Actions Secret



