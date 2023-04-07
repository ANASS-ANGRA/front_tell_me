import axios from "axios";
import { useState , useEffect} from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




function Validation(){
   const [code,setCode]=useState('')
   const [code_e,setCode_e]=useState('')
   const email=useSelector(state=>state.Info.email) 
   const navigate=useNavigate()

   useEffect(() => {
    if (email === null) {
      console.log(email);
      navigate('/');
    }
  }, [email]);

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
      const data={
        email:email,
        code:code
      }
        axios.post("http://127.0.0.1:8000/api/code_validation",data).then((Response)=>{
          console.log(Response)
           if(Response.data=="email_verifie"){
             navigate("/login")
           }else{
            console.log(Response.data)
            setCode_e(Response.data)
           }
        }).catch((Response)=>{
          setCode_e(Response.message)
        })
    }
  }

    return(
        <div id="page_inscri">
        <div className="form-structor">
          <div className="signup">
            <h2 className="form-title" id="signup">valide votre compte</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-holder">
                <input type="text" className="input" placeholder="code validation"
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