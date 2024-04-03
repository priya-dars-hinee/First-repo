const express=require('express')
const {GetUsers,Createuser,getUser,updateUser,deleteUser}=require('../controller/userControll')

const  router=express.Router()


router.route('/').get(GetUsers).post(Createuser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


module.exports=router