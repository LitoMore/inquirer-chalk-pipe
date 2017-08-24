'use strict';

const util = require('util');
const chalkPipe = require('chalk-pipe');
const Base = require('inquirer/lib/prompts/base');
const observe = require('inquirer/lib/utils/events');

/**
 * Module exports
 */

module.exports = Prompt;

/**
 * Constructor
 */

function Prompt() {
	return Base.apply(this, arguments);
}
util.inherits(Prompt, Base);

/**
 * Start the Inquiry session
 * @param  {Function} cb      Callback when prompt is done
 * @return {this}
 */

Prompt.prototype._run = function (cb) {
	this.done = cb;

  // Once user confirm (enter key)
	const events = observe(this.rl);
	const submit = events.line.map(this.filterInput.bind(this));

	const validation = this.handleSubmitEvents(submit);
	validation.success.forEach(this.onEnd.bind(this));
	validation.error.forEach(this.onError.bind(this));

	events.keypress.takeUntil(validation.success).forEach(this.onKeypress.bind(this));

  // Init
	this.render();

	return this;
};

/**
 * Render the prompt to screen
 * @return {Prompt} self
 */

Prompt.prototype.render = function (error) {
	let bottomContent = '';
	let message = this.getQuestion();

	if (this.status === 'answered') {
		message += chalkPipe(this.answer)(this.answer);
	} else {
		message += this.rl.line;
	}

	if (error) {
		bottomContent = chalkPipe('red')('>> ') + error;
	}

	this.screen.render(message, bottomContent);
};

/**
 * When user press `enter` key
 */

Prompt.prototype.filterInput = function (input) {
	if (!input) {
		return this.opt.default === null ? '' : this.opt.default;
	}
	return input;
};

Prompt.prototype.onEnd = function (state) {
	this.answer = state.value;
	this.status = 'answered';

  // Re-render prompt
	this.render();

	this.screen.done();
	this.done(state.value);
};

Prompt.prototype.onError = function (state) {
	this.render(state.isValid);
};

/**
 * When user press a key
 */

Prompt.prototype.onKeypress = function () {
	this.render();
};
