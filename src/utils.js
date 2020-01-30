'use strict';

const fs = require('fs-extra');

const pathExists = async (filePath) => {
    try {
        await fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK);

        return true;
    } catch (error) {
        if (error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}

module.exports = {
    pathExists
}
