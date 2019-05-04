'use strict';

class DoesNotExist extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "DoesNotExist"; // (2)
    }
}

class ImageDoesNotExist extends DoesNotExist {
    constructor(image) {
        super(`Sorry! You don't have that image`);
        this.name = "ImageDoesNotExist"
        this.image = image;
    }
}

module.exports = {
    DoesNotExist,
    ImageDoesNotExist
}
