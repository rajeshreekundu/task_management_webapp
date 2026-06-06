const userModal = require('../modals/user.modal');


const registerUser = async (req, res) =>{
    try{
        const {name, email, password} = req.body;
        const existingUser = await userModal.findOne({email}) // `$or:[{email}, {phone}]` //[use in future to check both either email or phone]

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: `User already existed`
            });
        }

        const newUser = await userModal.create({
            name, email, password
        });

        res.status(201).json({
            success: true,
            message : "User created successfully",
            user: newUser,
        })



    }catch(err){
        console.error(err);

        res.status(500).json({
            success: false,
            message: `Server error ${err}`
        })
    }
};


const loginUser = async (res, req) =>{
    const {email, password} = req.body;

    const userExist = await userModal.findOne({email});

    if(!userExist){
        return res.status(400).json({
            success: false,
            message: `User not found`
        })
    }
}

module.exports = {registerUser, loginUser}



