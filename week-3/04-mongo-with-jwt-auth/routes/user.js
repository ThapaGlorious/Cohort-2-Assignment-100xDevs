const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { JWT_SECRET } = require("../config");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    await User.create({
        username,
        password,
    });

    res.json({
        msg: "User created sucessfully",
    });
});

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const userCourse = await Course.find({});

    res.json({
        courses: userCourse,
    });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    await User.updateOne(
        {
        username: username, // this finds the user having username in the Table, in which the courseID is pushed
        },
        {
        $push: {
            purchasedCourses: courseId, // this code pushes the courseID to the purchased courses array.
        },
        }
    );

    res.json({
        msg: "Course purchased sucessfully",
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username, //finds the user with the id
    });

    const courses = await Course.find({
        _id: {
        $in: user.purchasedCourses,
        },
    });

    res.json({
        courses: courses,
    });
});