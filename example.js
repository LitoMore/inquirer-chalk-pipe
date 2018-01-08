'use strict';

const inquirer = require('inquirer');

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
		name: 'photo',
		message: 'Photo color',
		default: 'gray'
	}, {
		type: 'chalk-pipe',
		name: 'timeago',
		message: 'Timeago color',
		default: 'dim.green.italic'
	}
];

inquirer.prompt(promptList).then(res => {
	console.log(res);
});
