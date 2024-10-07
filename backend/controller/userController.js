const User=require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function userLogin(req,res){
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ user_id: user.user_id, role: user.role }, '123456', { expiresIn: '1h' });
        
        res.json({ token, role: user.role,msg:"Login Successful" });
    } catch (error) {
        res.status(500).json({ msg: 'Server error'+error });
    }
}


async function userSignup(req,res){
 //   console.log(req.body);
    const { name, email, password, phone, address } = req.body;
     const role=req.body.role?req.body.role:'client'
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser= {
            name,
            email,
            password:hashedPassword,
            phone,
            address,
            role
        };

        await User.create(newUser);

        // if (role === 'admin') {
        //     const newAdmin = new Admin({
        //         user_id: newUser.user_id,
        //         role: 'superadmin' // Can change based on logic
        //     });
        //     await newAdmin.save();
        // }

        res.status(201).json({ msg: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error'+error });
    }
}

module.exports={userLogin,userSignup};