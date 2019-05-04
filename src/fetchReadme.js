'use strict';

const {
    spawn
} = require('child_process');

module.exports = async (filePath) => {
    const cmd = 'less';

    spawn(cmd, [filePath], {
        stdio: 'inherit'
    });
}
