js-mobile-console
=====


## Install
**Zip archive**:
[Download](https://github.com/msemenistyi/js-mobile-console/archive/master.zip)

**Browserify**:
> npm install js-mobile-console

**Bower**:
> bower install js-mobile-console

##Overview

[Live demo](http://msemenistyi.github.io/js-mobile-console/).

###Usage

Console may be used without any modular system:
```html
<script src="./js-mobile-console.js"></script>
```

With help of browserify:
```js
	var mobileConsole = require('js-mobile-console');
```

Or AMD style (RequireJS): 
```js
	define(['js-mobile-console'], function(mobileConsole))
```

The actual usage:
```js
	mobileConsole.show(options);
```

##Contributing
Feel free to open issues and send PRs. 

## License

The MIT License (MIT)

[![Binary Studio](http://www.binary-studio.com/images/logo.gif)](http://binary-studio.com)  
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