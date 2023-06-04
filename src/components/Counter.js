import {useState} from "react"

export const Counter = () =>{
    // declare the sets
    const [wordCount, setWordCount] = useState(0);
    //handler function connected to  the textholder onchange event
    const handleStateChange = (event) =>{
        //get words from text area
        const value = event.target.value
        console.log(value)
       //clean the sentences to only one space between words using a regular expression
       //  (/\s+g, " ") replaces spaces with a single space
       const noExtraSpaces = value.replace(/\s+/g, " ");
       
        //count the words
        const words = noExtraSpaces.split(" ")
       

        // set the count in state
        const wordLength = words.length;
        setWordCount(wordLength)
        
        
    }
    return(
        <div className="text-center m-3">
            <div className ="d-flex flex-column mb-3">
                <textarea name="userText" id="userText" 
                placeholder="Type or paste your text here..." 
                cols="50" rows="10" 
                className="p-2"
                onChange={handleStateChange}
                ></textarea>
            </div>
            <div className ="d-flex justify-content-end m-3 fs-4 ">Word Count: <span className ="text-primary ms-2 fw-bold">{wordCount}</span></div>
        </div>

    )
}