const {model} =require('../Mongo/mongo')


const findall = async(req,res)=>{
    const {sort} = req.query
    try{
        const items = await model.find({ phoneno: { $gt :565} })
        .select('firstname lastname email phoneno college address')

        if(sort){
            const sortlist =sort.split(',').join(' ')
            console.log(sortlist)
            const newitems =await model.find({})
            .select('firstname lastname email, phoneno college address')
            .limit(4).sort(sortlist)
           return res.status(200).json({nbHits:newitems.length,newitems})
        }
        console.log(sort)
        res.status(200).json({nbHits:items.length,items})
}
catch(err){
    res.status(500).send(err)
}
    }

    const findone = async(req,res)=>{
        const taskid = req.params.id;
        try{
            const items = await model.findOne({_id:taskid})
            if(items){
                res.status(200).json({items})
            }
            else{
              
                res.status(404).send(`No such taskid with value ${taskid} exists`)
            }
           
    }
    catch(err){
        console.log('There was an error')
        res.status(500).json({err})
    }
        }

        const delet = async(req,res)=>{
            const taskid = req.params.id;
            try{
                const items = await model.findOneAndDelete({_id:taskid})
                if(items){
                    res.status(200).json({items})
                }
                else{
                    res.status(404).send(`No such taskid with value ${taskid} exists`)
                }
        }
        catch(err){
            console.log('There was an error')
            res.status(500).json({err})
        }
            }

            const update = async(req,res)=>{
                const taskid = req.params.id;
                try{
                    const items = await model.findOneAndUpdate({_id:taskid},req.body,{
                        new:true, runValidators:true
                    })
                    if(items){
                        res.status(200).json({items})
                    }
                    else{
                        res.status(404).send(`No such taskid with value ${taskid} exists`)
                    }
            }
            catch(err){
                console.log('There was an error')
                res.status(500).json({err})
            }
                }

                const findbyquery = async(req,res)=>{
                    const {firstname,lastname,passoutyear} = req.query
                    let search ={}
                   
                    if(firstname) search.firstname = {$regex:firstname, $options:'i'}
                    if(lastname) search.lastname =    {$regex:lastname, $options:'i'}
                    if(passoutyear) search.passoutyear =  passoutyear
                  
                    try{
                        const items = await model.find(search)
        
                            res.status(200).json({nbHits:items.length,items})
                        
                }
                catch(err){
                    console.log('There was an error')
                    res.status(500).json({err})
                }
                    }

module.exports ={update,findone,delet,findall,findbyquery}
  