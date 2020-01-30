'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const runCommand = async (command, opts = []) => {
    const {
        stdout,
        stderr
    } = await exec(command, opts);

    if (stderr) {
        console.error(stderr);        
    }

    console.log(stdout);
}

module.exports = runCommand;
