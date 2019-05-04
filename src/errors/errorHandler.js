'use strict';

const aargh = require('aargh');
const chalk = require('chalk');

const logError = chalk.bold.red;

const {
    DoesNotExist,
    ImageDoesNotExist
} = require('./errors');

const showDockerInitError = () => {
    console.log(logError(`Docker docs do not exist, please run the ${chalk.green('docker-readme init')} command to set it up.`));
}

module.exports = (error) => {
    aargh(error)
        .type(ImageDoesNotExist, (e) => {
            console.error(logError(e));
        })
        .type(DoesNotExist, () => {
            showDockerInitError();
        })
        .others((e) => {
            console.error(logError(e));
        });
}
