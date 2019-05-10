'use strict';

const ora = require('ora');
const spinner = ora();

const {
    getRootDocPath,
    getImagePath
} = require('./readFile');
const runCommand = require('./runCommand');
const render = require('./render');

const errorHandler = require('./errors/errorHandler');

const config = require('./config');


const init = async () => {
    try {
        const libPath = await getRootDocPath();
        spinner.start('Downloading Official Docker Docs \n');

        await runCommand(`git clone ${config.DOCKER_LIB_REMOTE} ${libPath}`)
        spinner.succeed();
    } catch (error) {
        errorHandler(error);
    }
}

const show = async (image) => {
    try {
        const imagePath = await getImagePath(image);
        await render(imagePath);
    } catch (error) {
        errorHandler(error);
    }
}

const update = async () => {
    try {
        spinner.start('Updating Docker Docs \n');

        const libPath = await getRootDocPath();

        await runCommand(`cd ${libPath} && git pull -q`);
        spinner.succeed();
    } catch (error) {
        errorHandler(error);
    }
}

const list = async () => {
    // Does Image exist
}

module.exports = {
    init,
    show,
    update,
    list
}
