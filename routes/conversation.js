const { Router } = require('express');
const router = Router();//Se crea un objeto de tipo Router() para poder crear rutas

require('../model/connection')

const Conversation = require('../model/Conversation');

router.get(
    '/',
    async (req, res) => {
        const conversation = await Conversation.find();
        res.json(conversation);
    }
)

router.post(
    '/',
    async (req,res)=>{
        console.log(req.body);
        const {idUser,idTrainer,messages} = req.body;
        if(idUser && idTrainer && messages){
            const conversation = new Conversation(req.body);
            await conversation.save();
            res.send('Created')
        }else{
            res.status(500).send('There was an error')
        }
    }
)

module.exports = router;