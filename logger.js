const logger = (req,res,next)=>{
console.log("welcome to middleware")
next();
}
module.exports = {logger}