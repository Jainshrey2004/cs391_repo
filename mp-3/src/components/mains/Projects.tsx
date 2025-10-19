export default function Projects() {
    return (
        <main>
            <title>Project | Resume</title>
            <h2>Projects</h2>

            <h3>Ticket Manager — Task Assignment System</h3>
            <ul>
                <li>Built a React/Node/Mongo tool to track incoming tickets and assignments.</li>
                <li>Reduced tracking errors and improved turnaround by introducing a clear workflow.</li>
            </ul>

            <h3>Vision Crafter — AI-Powered Content Automation</h3>
            <ul>
                <li>Generated and curated marketing images with an OpenAI-powered pipeline.</li>
                <li>Improved design workflow efficiency and page-load times using a CDN.</li>
            </ul>

            <h3>Calculator — Basic Arithmetic Operations</h3>
            <div id="calc">
                <h3 id="calc-title">Calculator</h3>
                <p>Enter two numbers and choose an operation.</p>
                <label htmlFor="one">Enter Number 1: </label><input type="text" id="one"/>
                <label htmlFor="two">Enter Number 2: </label><input type="text" id="two"/>

                <h3 id="output">Result</h3>

            </div>
        </main>
    )

}