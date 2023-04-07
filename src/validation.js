import { useState } from "react"




function Validation(){
   const [code,setCode]=useState('')
   const [code_e,setCode_e]=useState('')
 function validateCode(){

 
   if (!code.trim()) {
    setCode_e('Please enter your name');
  }else if(code < 6) {
    setCode_e('Password must be at least 8 characters long');
  }else{
    setCode_e('')
  }
 }
   function handleSubmit(event) {
    event.preventDefault(); // prevent form submission
    validateCode();
    // Check if there are any errors before submitting the form
    if (!code_e) {
        //axios
    }
  }

    return(
        <div id="page_inscri">
        <div className="form-structor">
          <div className="signup">
            <h2 className="form-title" id="signup">valide votre compte</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-holder">
                <input type="text" className="input" placeholder="name utilisateur"
                       value={code} onChange={e => setCode(e.target.value)} onBlur={validateCode} />
                {code_e && <span className="error">{code_e}</span>}
              </div>
              <button className="submit-btn">valide</button>
            </form>
          </div>
        </div>
      </div>
    )
}
export default Validation