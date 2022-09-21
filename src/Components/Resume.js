import React from "react";
import pdf from "../Resume_Phase-2_Project.pdf"

function Resume() {
    function handleClick(e) {
        console.log(e.target.value)
        return (
            <div>
                <img src={pdf} />
            </div>
        )
        
    }

    return(
        <div className="hero container">
            <h1>Click here to view my resume!</h1>
            <button onClick={handleClick} className="btn">Resume</button>
        </div>
    )
}

export default Resume;