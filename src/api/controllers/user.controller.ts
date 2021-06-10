import {Request, Response} from 'express'
import {User} from '../../models/user.model'

// import {Usr, User} from '../../models/user.model'


// export const createUser = async(req: Request, res: Response) => {
//   const {name, phone, email}= req.body
//   const users = await User.find({})
//   let user = new Usr()
//   user.name = name
//   user.phone= phone
//   user.email = email
//   user.id = (users.length +1).toString()
//   await User.insertMany(user)
//   return res.status(201).send('Created Successful !')
// }

export const getUser = async (req:Request ,res:Response  )=>{
  const users = await User.find();
  res.json(users);
}

export const createUser = async (req:Request,res:Response)=>{

  const user = await User.create(req.body)
  .catch(err => res.send(err))
  .then(()=>
  res.status(201).send('Created Successful'))
 ;

 return user;
}

// export const updateUser = async(req:Request,res:Response){
  
// }

