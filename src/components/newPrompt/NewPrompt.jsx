import React, { useEffect, useRef } from "react";
import "./newPrompt.css"
const NewPrompt = () => {

    const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({behavior:"smooth"})
  }, [])

  return (
    <>
        {/* Add new chat  */}
        <div className="endChat" ref={endRef}></div>
        

        <form className='newForm'>
            <label htmlFor="file">
                <img src="/attachment.png" alt="" />
            </label>
            <input type="file"  multiple={false} hidden id='file'/>
            <input type="text" placeholder='Ask me anything...' />
            <button>
                <img src="/arrow.png" alt="arrow" />
            </button>
        </form>
    </>
  )
}

export default NewPrompt