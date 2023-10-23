const router = require('express').Router()
const { generateCoverLetter } = require('./middleware')
const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
  message: "Too many requests, please try again later.",
});

router.post('/', apiLimiter, (req, res, next) => {
    const { 
        position, 
        yourName,
        phone,
        email,
        languages, 
        frameworks, 
        companyName, 
        bootcampName, 
        bootcampYears, 
        schoolName, 
        schoolGraduationYear, 
        degree, 
        fieldOfStudy, 
        githubLink, 
        githubProject1Link, 
        githubProject1Status, 
        githubProject2Link, 
        githubProject2Status, 
        githubProject3Link, 
        githubProject3Status, 
        hiringManagerName 
    } = req.body.state

    try {
        generateCoverLetter({
            position: position,
            yourName: yourName,
            phone: phone,
            email: email,
            languages: languages,
            frameworks: frameworks,
            companyName: companyName,
            bootcampName: bootcampName || 'not applicable',
            bootcampYears: bootcampYears || 'not applicable',
            schoolName: schoolName || 'not applicable',
            schoolGraduationYear: schoolGraduationYear || 'not applicable',
            degree: degree || 'not applicable',
            fieldOfStudy: fieldOfStudy || 'not applicable',
            githubLink: githubLink,
            githubProject1Link: githubProject1Link,
            githubProject1Status: githubProject1Status,
            githubProject2Link: githubProject2Link,
            githubProject2Status: githubProject2Status,
            githubProject3Link: githubProject3Link,
            githubProject3Status: githubProject3Status,
            hiringManagerName: hiringManagerName || 'unknown'
        })
        res.status(200).json({
            message: 'Cover letter generated successfully',
            coverLetter: res.data
        })
    } catch {
        next(err)
    }
})

module.exports = router