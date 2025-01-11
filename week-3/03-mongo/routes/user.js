const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg: "User created sucessfully"
    })
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const userCourse = await Course.find({});

    res.json({
        courses: userCourse,
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username,
    },{
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "Course purchased sucessfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })

});

module.exports = router