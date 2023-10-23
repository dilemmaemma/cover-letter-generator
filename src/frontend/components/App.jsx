import React, {useState} from 'react'
import axios from 'axios'

const initialState = {
    position: '',
    yourName: '',
    phone: '',
    email: '',
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
                console.log(res)
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
            state.phone !== '' &&
            state.email !== '' &&
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
                    id='position'
                    value={state.position} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="yourName">Your name*: </label>
                <input
                    type='text'
                    name='yourName'
                    id='yourName'
                    value={state.yourName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Your phone number*: </label>
                <input
                    type='tel'
                    name='phone'
                    id='phone'
                    value={state.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Your email*: </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={state.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="hiringManagerName">Hiring manager's name: </label>
                <input
                    type='text'
                    name='hiringManagerName'
                    id='hiringManagerName'
                    value={state.hiringManagerName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="languages">Languages known (separate with a comma)*: </label>
                <input
                    type='text'
                    name='languages'
                    id='languages'
                    value={state.languages}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="frameworks">Frameworks known (separate with a comma)*: </label>
                <input
                    type='text'
                    name='frameworks'
                    id='frameworks'
                    value={state.frameworks}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="companyName">Company name*: </label>
                <input
                    type='text'
                    name='companyName'
                    id='companyName'
                    value={state.companyName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bootcampName">Bootcamp name (if applicable): </label>
                <input
                    type='text'
                    name='bootcampName'
                    id='bootcampName'
                    value={state.bootcampName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bootcampYears">Bootcamp years (if applicable): </label>
                <input
                    type='text'
                    name='bootcampYears'
                    id='bootcampYears'
                    value={state.bootcampYears}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="schoolName">School name: </label>
                <input
                    type='text'
                    name='schoolName'
                    id='schoolName'
                    value={state.schoolName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="schoolGraduationYear">School graduation year: </label>
                <input
                    type='text'
                    name='schoolGraduationYear'
                    id='schoolGraduationYear'
                    value={state.schoolGraduationYear}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="degree">Degree Type: </label>
                <input
                    type='text'
                    name='degree'
                    id='degree'
                    value={state.degree}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="fieldOfStudy">Field of study: </label>
                <input
                    type='text'
                    name='fieldOfStudy'
                    id='fieldOfStudy'
                    value={state.fieldOfStudy}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubLink">Github link*: </label>
                <input
                    type='text'
                    name='githubLink'
                    id='githubLink'
                    value={state.githubLink}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject1Link">Github First Project Link*: </label>
                <input
                    type='text'
                    name='githubProject1Link'
                    id='githubProject1Link'
                    value={state.githubProject1Link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject1Status">Github First Project Status*: </label>
                <select  
                    name="githubProject1Status" 
                    id="githubProject1Status"
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
                    id='githubProject2Link'
                    value={state.githubProject2Link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject2Status">Github Second Project Status*: </label>
                <select
                    name="githubProject2Status"
                    id="githubProject2Status"
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
                    id='githubProject3Link'
                    value={state.githubProject3Link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="githubProject3Status">Github Third Project Status*: </label>
                <select
                    name="githubProject3Status"
                    id="githubProject3Status"
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