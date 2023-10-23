const router = require('express').Router()
const { generateCoverLetter } = require('./middleware')

router.post('/', (req, res, next) => {
    const { 
        position, 
        yourName, 
        languages, 
        frameworks, 
        companyName, 
        companyAddress, 
        yourAddress, 
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
            languages: languages,
            frameworks: frameworks,
            companyName: companyName,
            companyAddress: companyAddress || 'unknown',
            yourAddress: yourAddress || 'not given',
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