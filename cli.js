'use strict';
const meow = require('meow');
const makeDirRange = require('make-dir-range');

const cli = meow(`
	Usage
	  $ make-dir-range <int>-<int> 
	Options
      --destination, -d  Destination for dirs
      --prepend, -p  Prepend to dir name
      --append, -a  Append to dir name
	Example
	  $ make-dir-range 1-50,55-60
`, {
    flags: {
        append: {
            type: 'string',
            default: '',
            alias: 'a'
        },
        prepend: {
            type: 'string',
            default: '',
            alias: 'p'
        },
        destination: {
            type: 'string',
            default: '',
            alias: 'd'
        }
    }
});

const input = cli.input;

if (input.length === 0) {
    console.error('No args provided');
    process.exit(1);
}

makeDirRange(input, cli.flags)