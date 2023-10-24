const router = require('express').Router()
const { generateCoverLetter } = require('./middleware')

router.post('/', (req, res, next) => {
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
            message: res,
            info: 'Please make sure to check your junk mail if the email does not appear in your inbox in the next few minutes.',
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router