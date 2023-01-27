class ExpressError extends Error{
    constructor(msg, status){
        super();
        this.msg = msg;
        this.status = status;
        //first we need to import from app.js
        console.error(this.stack)
    }   
}

module.exports = ExpressError();