const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created sucessfully"
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password =  req.body.password;

    const user = await Admin.find({
        username,
        password
    })

    if(username){
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    }
    else{
        res.status(403).json({ 
            msg: "Username or password incorrect" 
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
        const title = req.body.title;
        const description = req.body.description;
        const imageLink = req.body.imageLink;
        const price = req.body.price;

        const courseCreate = await Course.create({
            title,
            description,
            imageLink,
            price
        })

        res.json({
            msg: "Course has been created " , CourseID: courseCreate._id
        })
});

router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Admin.find({});

    res.json({
        courses: response,
    });
});


module.exports = router;