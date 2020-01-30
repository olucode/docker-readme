'use strict';

const fs = require('fs-extra');

const { CACHE_FOLDER } = require('./config');

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = async (filepath, image) => {
    try {
        // Get Markdown file
        const file = await fs.readFile(filepath, 'utf8');
        const html = md.render(file);

        const path = `${CACHE_FOLDER}/${image}.html`;

        await fs.outputFile(path, html);

        return path;
    } catch (error) {
        throw error;
    }
}
