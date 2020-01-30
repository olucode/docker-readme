'use strict';

const path = require('path');
const fs = require('fs-extra');

const {
    DoesNotExist,
    ImageDoesNotExist
} = require('./errors');

const convert = require('./convert');
const config = require('./config');
const util = require('./utils');

const getRootDocPath = async () => {
    try {
        if (await util.pathExists(config.DOC_PATH)) {
            return config.DOC_PATH;
        }

        throw new DoesNotExist();
    } catch (error) {
        throw error;
    }
}

const getMarkdownFile = async (image) => {
    try {
        const rootPath = await getRootDocPath();
        const markdownFile = `${rootPath}/${image}/README.md`;

        if (await util.pathExists(markdownFile)) {
            return markdownFile;
        }

        throw new ImageDoesNotExist(image);
    } catch (error) {
        throw error;
    }
}

const getImagePath = async (image) => {
    try {
        const markdownFile = await getMarkdownFile(image);

        let cachedImage = `${config.CACHE_FOLDER}/${image}.html`;

        if (!await util.pathExists(cachedImage)) {
            cachedImage = convert(markdownFile, image);
        }

        return cachedImage;
    } catch (error) {
        throw error;
    }
}

const listDocs = async () => {
    try {
        let dirs = [];
        const docPath = config.DOC_PATH;

        for (const file of await fs.readdir(docPath)) {
            if ((await fs.stat(path.join(docPath, file))).isDirectory()) {
                dirs = [...dirs, file]
            }
        }

        // Remove hidden directories
        return dirs.filter((directory) => !directory.startsWith('.')).sort();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getRootDocPath,
    getMarkdownFile,
    getImagePath,
    listDocs
};
