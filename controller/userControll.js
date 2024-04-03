const User = require('../model/userModel')
const asyncwarraper=require('../middleware/aayn')
const {createCustomError}=require('../error/custom-error')

const GetUsers =asyncwarraper( async (req, res) => {


        const users = await User.find({})
        res.status(200).json({ users: users })
   

})

const Createuser = asyncwarraper( async (req, res) => {
    
        const users = await User.create(req.body)
        res.status(201).json({ users })
    


})

const getUser = asyncwarraper( async (req, res) => {


        const { id: userID } = req.params
        const user = await User.findOne({ _id: userID })
        if (!user) {
            return next(createCustomError)(`No User with id:${userID}`,404)
        
        }
        res.status(200).json({ user })
    
})



const updateUser = asyncwarraper( async (req, res,next) => {
    
        const { id: userID } = req.params

        const user = await User.findByIdAndUpdate({ _id: userID }, req.body,{
            new:true,
            runValidator:true
        })
            
        

        if (!user) {
            return next(createCustomError)(`No User with id:${userID}`,404)
        }
        res.status(200).json({ user })

   
})

const deleteUser = asyncwarraper( async (req, res) => {

        const { id: userID } = req.params
        const user = await User.findOneAndDelete({ _id: userID })


        if (!user) {
            return next(createCustomError)(`No User with id:${userID}`,404)
        }
        res.status(200).json({ user })
    
})

module.exports = { GetUsers, Createuser, getUser, updateUser, deleteUser }