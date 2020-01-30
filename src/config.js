'use strict';

const os = require('os');

module.exports = {
    CACHE_FOLDER: `${os.homedir()}/.config/docker-readme/cache`,
    DOC_PATH: `${os.homedir()}/.config/docker-readme/library/dockerhub-docs`,
    DOCKER_LIB_REMOTE: 'https://github.com/docker-library/docs.git'
}
