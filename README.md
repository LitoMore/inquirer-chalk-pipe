# inquirer-chalk-pipe

[![](https://img.shields.io/npm/v/inquirer-chalk-pipe.svg)](https://www.npmjs.com/package/inquirer-chalk-pipe)
[![](https://img.shields.io/npm/l/inquirer-chalk-pipe.svg)](https://github.com/LitoMore/inquirer-chalk-pipe/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A inquirer plugin for input [chalk-pipe](https://github.com/LitoMore/chalk-pipe) style strings

![](https://raw.githubusercontent.com/LitoMore/inquirer-chalk-pipe/master/screenshot.gif)

## Install

```bash
$ npm install inquirer-chalk-pipe
```

## Usage

```javascript
inquirer.registerPrompt('chalk-pipe', require('inquirer-chalk-pipe'));
```

If you are using `inquirer@5.1.0` or later, you don't need to register this plugin, just use the [transformer](https://github.com/SBoudrias/Inquirer.js#question) option in input prompt:

```javascript
const inquirer = require('inquirer')
const chalkPipe = require('chalk-pipe')

inquirer.prompt([
  {
    type: 'input',
    name: 'fav_color',
    message: "What's your favorite color",
    transformer: function(color) {
      return chalkPipe(color)(color);
    }
  }
])
```

## Example

Here is [example](https://github.com/LitoMore/inquirer-chalk-pipe/blob/master/example.js).

## Related

- [chalk-pipe](https://github.com/LitoMore/chalk-pipe) - Create chalk style schemes with simpler style strings
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - A collection of common interactive command line user interfaces

## License

MIT © [LitoMore](https://github.com/LitoMore)
