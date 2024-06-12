class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode; // Assign the value of statusCode parameter to this.statusCode
        this.message = message;
    }
}

module.exports = ExpressError;
