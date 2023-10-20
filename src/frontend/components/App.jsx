import React, {useState} from 'react'
import axios from 'axios'

const initialState = {
    position: '',
    yourName: '',
    languages: '',
    frameworks: '',
    companyName: '',
    companyAddress: '',
    yourAddress: '',
    bootcampName: '',
    bootcampYears: '',
    schoolName: '',
    schoolGraduationYear: '',
    degree: '',
    fieldOfStudy: '',
    githubLink: '',
    githubProject1Link: '',
    githubProject1Status: '',
    githubProject2Link: '',
    githubProject2Status: '',
    githubProject3Link: '',
    githubProject3Status: '',
    hiringManagerName: '',
}

const App = () => {

    const [state, setState] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api', {state})
            .then(res => {
                console.log(res.data)
                setState({...state, coverLetter: res.data.choices[0].text})
            })
            .catch(err => console.log(err))
    }

    const isDisabled = () => {
        return state.position !== '' &&
            state.yourName !== '' &&
            state.languages !== '' &&
            state.frameworks !== '' &&
            state.companyName !== '' &&
            state.githubLink !== '' &&
            state.githubProject1Link !== '' &&
            state.githubProject1Status !== '' &&
            state.githubProject2Link !== '' &&
            state.githubProject2Status !== '' &&
            state.githubProject3Link !== '' &&
            state.githubProject3Status !== '' ? false : true
    }

    const handleReset = (e) => {
        e.preventDefault()
        setState(initialState)
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div>
                <label htmlFor="position">Position*: </label>
                <input 
                    type="text" 
                    name="position" 
                    value={state.position} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="yourName">Your name*: </label>
                <input
                    type='text'
                    name='yourName'
                    value={state.yourName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="hiringManagerName">Hiring manager's name: </label>
                <input
                    type='text'
                    name='hiringManagerName'
                    value={state.hiringManagerName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="languages">Languages known (separate with a comma)*: </label>
                <input
                    type='text'
                    name='languages'
                    value={state.languages}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="frameworks">Frameworks known (separate with a comma)*: </label>
                <input
                    type='text'
                    name='frameworks'
                    value={state.frameworks}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="companyName">Company name*: </label>
                <input
                    type='text'
                    name='companyName'
                    value={state.companyName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="companyAddress">Company address: </label>
                <input
                    type='text'
                    name='companyAddress'
                    value={state.companyAddress}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="yourAddress">Your address: </label>
                <input
                    type='text'
                    name='yourAddress'
                    value={state.yourAddress}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bootcampName">Bootcamp name (if applicable): </label>
                <input
                    type='text'
                    name='bootcampName'
                    value={state.bootcampName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bootcampYears">Bootcamp years (if applicable): </label>
                <input
                    type='text'
                    name='bootcampYears'
                    value={state.bootcampYears}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="schoolName">School name: </label>
                <input
                    type='text'
                    name='schoolName'
                    value={state.schoolName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="schoolGraduationYear">School graduation year: </label>
                <input
                    type='text'
                    name='schoolGraduationYear'
                    value={state.schoolGraduationYear}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="degree">Degree Type: </label>
                <input
                    type='text'
                    name='degree'
                    value={state.degree}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="fieldOfStudy">Field of study: </label>
                <input
                    type='text'
                    name='fieldOfStudy'
                    value={state.fieldOfStudy}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubLink">Github link*: </label>
                <input
                    type='text'
                    name='githubLink'
                    value={state.githubLink}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject1Link">Github First Project Link*: </label>
                <input
                    type='text'
                    name='githubProject1Link'
                    value={state.githubProject1Link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject1Status">Github First Project Status*: </label>
                <select 
                    id="githubProject1Status" 
                    name="githubProject1Status" 
                    value={state.githubProject1Status} 
                    onChange={handleChange}
                >
                    <option>-- Select Status --</option>
                    <option value="complete">Completed</option>
                    <option value="inProduction">In Production</option>
                </select>
            </div>
            <div>
                <label htmlFor="githubProject2Link">Github Second Project Link*: </label>
                <input
                    type='text'
                    name='githubProject2Link'
                    value={state.githubProject2Link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject2Status">Github Second Project Status*: </label>
                <select
                    id="githubProject2Status"
                    name="githubProject2Status"
                    value={state.githubProject2Status}
                    onChange={handleChange}
                >
                    <option>-- Select Status --</option>
                    <option value="complete">Completed</option>
                    <option value="inProduction">In Production</option>
                </select>
            </div>
            <div>
                <label htmlFor="githubProject3Link">Github Third Project Link*: </label>
                <input
                    type='text'
                    name='githubProject3Link'
                    value={state.githubProject3Link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject3Status">Github Third Project Status*: </label>
                <select
                    id="githubProject3Status"
                    name="githubProject3Status"
                    value={state.githubProject3Status}
                    onChange={handleChange}
                >
                    <option>-- Select Status --</option>
                    <option value="complete">Completed</option>
                    <option value="inProduction">In Production</option>
                </select>
            </div>
            <small>
                * Required
            </small>
            <br/>
            <div>
                <button disabled={isDisabled()} id='SubmitForm'>Submit</button>
                <button id='ResetForm'>Reset</button>
            </div>
        </form>
    )
}

export default App

// Needed:

/*
    Position
    Your name
    Languages known
    Frameworks known
    Company name
    Company address
    Your address
    School name
    School graduation year
    Degree
    Field of study
    Github link
    Github project 1 link
    Github project 1 status
    Github project 2 link
    Github project 2 status
    Github project 3 link
    Github project 3 status
    Hiring manager's name
*/