(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.jsConsole = factory();
	}
})(this, function () {

	var containerHtml = '' + 
	'	<input id="jsmc-button" type="button" value="Run"/>' +
	'	<div id="jsmc-log">' +
	' </div>' +
	'	<div id="jsmc-input-container">' +
	'		<input id="jsmc-input" type="text" placeholder="type your js here"/>' +
	' </div>' +
	'';

	var logElementHtml = '' +
	'	<div class="jsmc-log-text"></div>' +
	'	<div class="jsmc-log-target"></div>' +
	'';

	var jsConsole = {
		show: function(){
			var el = document.getElementById('js-mobile-console');
			if (!el){
				this.$el = {};
				el = this.$el.container = document.createElement('div');
				el.id = 'js-mobile-console';
				el.innerHTML = containerHtml;
				document.body.appendChild(el);
				this.initializeContainers();
				this.bindListeners();
			}
			el.style.display = 'block';
		},

		hide: function(){
			var el = document.getElementById('js-mobile-console');
			if (el){
				el.style.display = 'none';
			}
		},

		destroy: function(){
			var el = document.getElementById('js-mobile-console');
			el.parentNode.removeChild(el);
		},

		initializeContainers: function(){
			this.$el.input = document.getElementById('jsmc-input');
			this.$el.button = document.getElementById('jsmc-button');
			this.$el.log = document.getElementById('jsmc-log');
		},

		bindListeners: function(){
			var self = this;
			this.$el.button.addEventListener('click', function(){
				var val = self.$el.input.value;
				var logEl = document.createElement('div');
				logEl.className = 'jsmc-log-el';
				logEl.innerHTML = logElementHtml;
				var text;
				try {
					text = window.eval(val);
				} catch (e){
					logEl.className += ' jsmc-log-error';
					text = e;
				}
				var logTextEl = logEl.getElementsByClassName('jsmc-log-text')[0];
				logTextEl.innerHTML = text;
				self.appendLogEl(logEl);
			});

			window.onerror = function(erorMessage, file, lineNumber, columnNumber){
				var logEl = document.createElement('div');
				logEl.className = 'jsmc-log-error jsmc-log-el';
				logEl.innerHTML = logElementHtml;
				var logTextEl = logEl.getElementsByClassName('jsmc-log-text')[0];
				var logTargetEl = logEl.getElementsByClassName('jsmc-log-target')[0];
				logTextEl.innerHTML = erorMessage;
				logTargetEl.innerHTML = file + ':' + lineNumber + (columnNumber ? (
					':' + columnNumber) : '');
				self.appendLogEl(logEl);
			};
		},

		appendLogEl: function(el){
			this.$el.log.appendChild(el);
			this.$el.log.scrollTop = this.$el.log.scrollHeight;
		}
	};

	return jsConsole;

});