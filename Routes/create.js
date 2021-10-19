var nodemailer =require('nodemailer')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const {model} =require('../Mongo/mongo')


const create = async (req,res) =>{

  console.log(req.body);
  const {firstname,lastname,address,pincode,phoneno,alternatephoneno,email} =req.body;

try{
    const task = await model.create(req.body)
    res.status(201).send(task)
    var sender = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'ch20b033@smail.iitm.ac.in',
            pass: ""
        } 
    });
    
    var receiver1 = {
        from:'ch20b033@smail.iitm.ac.in'
        , to: 'tiwaridevang60@gmail.com'
        , subject: 'Sending Email using nodejs',
        html :  `<h3>Hii ${firstname} </h3> <p>This is a testing mail from my side</p>
        <p>Your Credentials are :</p> <p>First-Name: ${firstname} , Last-Name: ${lastname}</p>
        <p>Phone-No: ${phoneno} , Alternate-No: ${alternatephoneno}</p>
        <p>Email: ${email}</p>   <p>Address: ${address} , PIN: ${pincode}</p>`
    }
    
    sender.sendMail(receiver1,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Email sent'+ info.response)
        }
    })
 }
 catch(err){
    res.status(500).send(err)
 }
}

module.exports = {create}
