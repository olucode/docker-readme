'use strict';

const {
    spawn
} = require('child_process');

module.exports = async (filePath) => {
    const cmd = `w3m -dump ${filePath} | less`;

    const program = spawn(cmd, [], {
        shell: true,
        stdio: 'inherit'
    });

    program.on('error', (err) => {
        throw err;
    });
}
