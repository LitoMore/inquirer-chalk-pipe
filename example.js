'use strict';

const inquirer = require('inquirer');
const chalkPipe = require('chalk-pipe');

inquirer.registerPrompt('chalk-pipe', require('.'));

const promptList = [
	{
		type: 'chalk-pipe',
		name: 'text',
		message: 'Text color',
		default: '#cccccc'
	}, {
		type: 'chalk-pipe',
		name: 'name',
		message: 'Name color',
		default: 'green'
	}, {
		type: 'chalk-pipe',
		name: 'at',
		message: 'ATs color',
		default: 'cyan'
	}, {
		type: 'chalk-pipe',
		name: 'link',
		message: 'Link color',
		default: 'cyan.underline'
	}, {
		type: 'chalk-pipe',
		name: 'tag',
		message: 'Tag color',
		default: 'orange.bold'
	}, {
		type: 'chalk-pipe',
		name: 'timeago',
		message: 'Timeago color',
		default: 'dim.green.italic'
	}
];

inquirer.prompt(promptList).then(res => {
	const {
		text,
		name,
		at,
		link,
		tag,
		timeago
	} = res;

	const textStyle = chalkPipe(text);
	const nameStyle = chalkPipe(name);
	const atStyle = chalkPipe(at);
	const linkStyle = chalkPipe(link);
	const tagStyle = chalkPipe(tag);
	const timeagoStyle = chalkPipe(timeago);

	console.log('');
	console.log(textStyle('Hi Lito'));
	console.log(nameStyle('LitoMore'));
	console.log(atStyle('@LitoMore'));
	console.log(linkStyle('https://github.com/LitoMore/chalk-pipe'));
	console.log(tagStyle('#inquirer-chalk-pipe#'));
	console.log(timeagoStyle('(just now)'));
});
