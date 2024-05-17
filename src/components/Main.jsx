import PedroVincentyResume from './PedroVincentyResume.pdf'

const Main = ()=>{
    return (
    <div className = 'MainContainer'>
        <h2 className = "Name">Pedro Marcello Vincenty</h2>
        <h3 className = "Title">MBA Candidate</h3>
        <div className = 'button-group'>
            <a className = 'email btn btn-secondary' href="mailto:vincentypedro@gmail.com" target="_blank">e-mail</a>
            <a className='linkedin btn btn-primary' href="https://www.linkedin.com/in/pedro-marcello/" target="_blank">LinkedIn</a>
            <a className='github btn btn-success' href="https://github.com/pedromarcello21" target="_blank">GitHub</a>
            <a className='resume btn btn-info' href= {PedroVincentyResume} target="_blank">Resume</a>

        </div>
        <h4 className = 'about'>About</h4>
        <h3> 
            An MBA candidate at Fordham University with professional experience as a Data Analyst. Currently leveraging Codecademy 
            and Scrimba to pivot into a developer role.</h3>
        <h4 className = 'interests'>Software Proficiencies</h4>
        <h3>Python, SQL, R, HTML, CSS, JavaScript, React</h3>
    </div>
    )
}

export default Main