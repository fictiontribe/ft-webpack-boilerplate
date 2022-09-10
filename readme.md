# Fiction Tribe Webpack

![Screenshot](https://i.imgur.com/X3GMYrh.png)

A creative agency landing page boilerplate with webpack. <br/>
### [Check out our page](https://ftwebpackboilerplatev2.surge.sh/) <br/> <br/>

## Installation
Clone the boilerplate:
```
git clone https://github.com/fictiontribe/ft-webpack-boilerplate.git
```
and use Node Package Manager to install dependencies:

```
npm install
```

## Features
* Organize and structure landing page development
* Preload project with SASS and GSAP
* Development and production build processes
* Optimize Javascript, CSS, and static assets
* Reusable mixins
* Reusable GSAP animations
* Surge deploy

## Usage

Spin up a development server:

```
npm run start
```

Create a production build:

```
npm run build
```
To deploy site, updatet script in package.json 
```
"deploy": "surge --project ./dist/ --domain YOURSITENAME.surge.sh",
```
Deploy to surge:

```
npm run deploy
```




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits
* [Connor Burgess](mailto:connor@fictiontribe.com) - [<img src="./src/images/github-icon.svg">](http://github.com/connorburgess)
* [Misha Petrov](mailto:misha@fictiontribe.com) - [<img src="./src/images/github-icon.svg">](http://github.com/mishapetrov)
* Insiration from [Static Site Boilerplate](https://github.com/ericalli/static-site-boilerplate)



## License
```
MIT
```