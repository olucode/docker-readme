'use strict';

const fs = require('fs');
const fsPromises = require('fs/promises');

const {
    DoesNotExist,
    ImageDoesNotExist
} = require('./errors');

const {
    docPath
} = require('./config');

const getRootDocPath = async () => {
    try {
        await fsPromises.access(docPath, fs.constants.R_OK | fs.constants.W_OK);

        return docPath;
    } catch (error) {
        if (error.code === "ENOENT") {
            throw DoesNotExist("File Does Not Exist");
        }
        throw error;
    }
}

const getImagePath = async (image) => {
    try {
        const rootPath = await getRootDocPath();
        const imagePath = `${rootPath}/${image}`;

        await fsPromises.access(imagePath, fs.constants.R_OK);

        return imagePath;
    } catch (error) {
        if (error.code === "ENOENT") {
            throw ImageDoesNotExist(image);
        }
        throw error;
    }
}

module.exports = {
    getRootDocPath,
    getImagePath
};
