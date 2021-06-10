import {Request, Response} from 'express'
import {User} from '../../models/user.model'

export const getUser = async (req:Request ,res:Response  )=>{
  await User.find({},(err,data)=>{
    if(err)
      res.send(err);
    else
      res.json(data);
  });
}

export const getOneUser = async(req:Request, res:Response) => {
  const id = req.params.id;
  const user = await User.find({"_id" : id},(err,data)=>{
    if(err)
      res.send(err);
    else
      res.json(data);
  });
}

export const createUser = async (req:Request,res:Response)=>{

  const user = await User.create(req.body)
  .catch(err => res.send(err))
  .then(()=>
    res.status(201).send('Created Successful')
  );

 return user;
}

export const updateUser = async(req:Request,res:Response)=>{
  const id = req.params.id;
  await User.findByIdAndUpdate({"_id" : id},{$set : req.body},(err,data)=>{
    if(err)
      res.send(err);
    else
      res.send('Updated Successful')
  })
}

export const deleteUser = async(req:Request,res:Response)=>{
  const id = req.params.id;

  await User.deleteOne({"_id" : id});
  return res.send('Deleted Successful')
}

