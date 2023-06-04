

export const Counter = () =>{
    return(
        <div className="text-center m-3">
            <div d-flex flex-column mb-3>
                <textarea name="userText" id="userText" 
                placeholder="Type or paste your text here..." 
                cols="50" rows="10"></textarea>
            </div>
            <div>Word Count:0</div>
        </div>

    )
}