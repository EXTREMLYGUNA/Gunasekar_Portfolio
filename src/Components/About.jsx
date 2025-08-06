function About() {
    return (<>
    <section id="about">
         <h2>About Me</h2>
         <p>I am a passionate developer turning ideas into real-world solutions.</p>
         <a title="Tasks" href="https://gunasekar-resume.netlify.app/" target="_blank" className="resume" rel="noopener"><h3>Resume</h3></a>
         <a href='https://gunasekar.netlify.app/assets/GUNASEKAR.pdf' 
            download 
            className="resume"
            target="_blank" 
            rel="noopener">
             <h3 style={{ padding: "10px",width:'165px'}}>Download(PDF)</h3></a>
    </section>
    </>)
}

export default About;