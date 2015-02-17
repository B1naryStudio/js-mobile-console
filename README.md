js-mobile-console
=====

![js-mobile-console](mobile_screen.png)

## Install
**Zip archive**:
[Download](https://github.com/msemenistyi/js-mobile-console/archive/master.zip)

**Browserify**:
> npm install js-mobile-console

[![NPM](https://nodei.co/npm/js-mobile-console.png)](https://nodei.co/npm/js-mobile-console/)

**Bower**:
> bower install js-mobile-console

##Overview

[Live demo](http://b1narystudio.github.io/js-mobile-console/).

It is extremely nice, that we are on the road of specifying and unifying remote
debugging protocol and we can already remotely debug web applications on desktop 
chrome, but what if we want to get it working also on Android browser or 
Safari for iOs?

MobileConsole can be embedded within any page for debugging, it will catch errors
and behave exactly as native js console in browser. It also outputs all the logs
you've written via an API of window.console. 

###How is it different from all the existing instruments?

There are already plenty of ways for testing mobile applications. The most 
advanced is at the moment Chrome remote debugging. Still it is available only 
Chrome to Chrome.

Another way is to use [weinre](http://people.apache.org/~pmuellr/weinre-docs/latest/) - 
tool for remote debugging. It is quite nice and suggest rich functionality. Still 
it seems quite heavy for me. You should setup server, run it and many other stuff.

js-mobile-console is instead lightweight and requires almost no configuration,
you can just include it into your page and debug it when error appears.

*stevemao* also stated that it may come handy for debugging 
[web views](https://github.com/B1naryStudio/js-mobile-console/issues/1).

###Loading
Css file should be included within html:
```html
<link rel="stylesheet" href="./style/mobile-console.min.css">
```
Console may be used without any modular system:
```html
<script src="./mobile-console.min.js"></script>
```

With help of browserify:
```js
var mobileConsole = require('js-mobile-console');
```

Or AMD style (RequireJS): 
```js
define(['js-mobile-console'], function(mobileConsole))
```

###Usage

Simple usage:
```js
mobileConsole.show();
```

Advanced usage: 
```js
mobileConsole.options({
	showOnError: true,
	proxyConsole: false,
	isCollapsed: true,
	catchErrors: true
});
```

Conditional toggling:
```js
if (condition) {
	mobileConsole.show();
} else {
	mobileConsole.hide();
}
```

Commands specifying:
```js
mobileConsole.commands({
	'check': 'var a = 10; a;',
	'run': '10/5'
});
```

###API

- **show** - show console with default options.
- **hide** - hide console.
- **options** - method to initialize console, by default will show console, 
accepts hash of options.
- **commands** - method to specify a hash of commands, which later can be 
executed within console.

###Options

- **showOnError** - *Default* false. Console will be hidden if no show method 
was called, but it will appear if any error occurs.
- **proxyConsole** - *Default* true. Determines if window.console methods are 
proxied to mobile console.
- **isCollapsed** - *Default* false. Determines if Console is collpased on startup.
- **catchErrors** - *Default* false. Determines if Console is registring 
window.onerror method in order to catch errors.

##Created by [msemenistyi](https://github.com/msemenistyi)  

##Changelog

### 0.3.0 (2014-11-11)
- add possibility to specify commands;
- add JSON.stringifying for logging;
- set z-index to console
- fix startup error on logValue

##Contributing
Feel free to open issues and send PRs. 


## License

The MIT License (MIT)

[![Binary Studio](http://www.binary-studio.com/wp-content/uploads/2014/11/logo.gif)](http://binary-studio.com)  
Copyright (c) 2014 Semenistyi Mykyta nikeiwe@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
