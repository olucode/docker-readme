'use strict';

const ora = require('ora');
const spinner = ora();

const {
    getRootDocPath,
    getImagePath,
    listDocs
} = require('./readFile');
const runCommand = require('./runCommand');
const render = require('./render');

const errorHandler = require('./errors/errorHandler');
const config = require('./config');
const util = require('./utils');


const init = async () => {
    try {
        if (util.pathExists(config.DOC_PATH)) {
            console.log(`Everything's great!`)
            return;
        }

        spinner.start('Downloading Official Docker Docs \n');

        await runCommand(`git clone ${config.DOCKER_LIB_REMOTE} ${config.DOC_PATH}`)
        spinner.succeed("Init successful!");
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
        spinner.succeed("Update Finished");
    } catch (error) {
        errorHandler(error);
    }
}

const list = async () => {
    const availableDocs = await listDocs();

    let docs = typeof availableDocs === 'object' ? Object.values(availableDocs) : availableDocs;

    console.log(docs.join(', '));
}

module.exports = {
    init,
    show,
    update,
    list
}
