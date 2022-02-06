class Others {

    constructor() {

        // Internal Variables
        let ping = require("./others/ping");
        let argsCount = require("./others/argsCount");
        let isNumber = require("./others/isNumber");
        let isString = require("./others/isString");

        this.ping = ping
        this.argsCount = argsCount
        this.isNumber = isNumber
        this.isString = isString

    }

}

module.exports = new Others