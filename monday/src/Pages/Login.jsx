import React, { useReducer ,useState ,useEffect} from 'react';
import { useContext } from 'react';
import { LoginContext } from '../ContextApi/Context';
import axios  from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// export const userdetailsContext=React.createContext()

const initial={
  firstname:'',
  lastname:'',
  email:'',
  password:''

}

const reducer=(state,actions)=>{
  switch (actions.type){
    case 'email':{
      return {...state,email:actions.email}
    }
    case 'password':{
      return {...state,password:actions.password}
    }
    default:{
      return state
    }
  }

  

}

const Login = () => {

  const {auth,login}=useContext(LoginContext)
  // console.log(auth)

  const [state,dispth] =useReducer(reducer,initial)
  const [details,setdetails]= useState([])
  const navigate=useNavigate()
  // const [dfname,setdfname]=useState([])
  // const [demail,setdemail]=useState([])

  const [data,setdata]=useState([])
  const getdata=()=>{
    return axios.get('http://localhost:8080/data')
  }

  const handlemail=(el)=>{
    const obj={
      type:'email',
      email:el.target.value,
    }
    // console.log(obj)
    dispth(obj)
  }

  const handlpass=(el)=>{
    const obj={
      type:'password',
      password:el.target.value
    }

    dispth(obj)
  }

  
  useEffect(() => {
     getdata().then((res)=>{
      // console.log(res.data)
      setdata(res.data)
     })
     .catch((error)=>{
      console.log(error)
     })
    },[])

    const handlesubmit =(el)=>{
        el.preventDefault()
      
        console.log("helo")
        for(var i=0;i<data.length;i++){
          
          if(state.email==data[i].email  && state.password==data[i].password){
            login()
            // console.log(auth)
            // setauth(true)
            // setdfname(state.firstname)
            // setdemail(state.email)
            alert("You Login")
            navigate('/')
            return
            
          }   
          
        }
        alert("Please enter correct details")

        
    }

  


  // console.log(state)



  return (
    <div> 
      {/* <userdetailsContext.Provider value={{dfname,demail}}>{children}</userdetailsContext.Provider> */}
      {/* <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="" width={'15%'} margin='auto' left="43%"/> */}
      
      <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="" 
      style={{display:'block',margin:'auto' ,width:'20%'}}
            />

      <form action="" style={{border:''
             ,display:'flex', flexDirection:'column' 
             ,width:'25%' ,margin:'auto' 
             ,height:'200px',padding:'8px',boxShadow: '0px 1px 3px 0px',
             marginTop:'39px',
             borderRadius:'7px'

            }}
      onSubmit={handlesubmit}>

        <label>Email :</label>
        <input placeholder='Enter Email' 
         onChange={handlemail} type='email'
          name='email'
          style={{height:'24px',padding:'4px',fontFamily:'sans-serif',margin:'5px'}}
          />
        <label>Password:</label>
        <input placeholder='Password '
          onChange={handlpass}
           type='password'
            name='password'
            style={{height:'24px',padding:'4px',fontFamily:'sans-serif',margin:'5px'}}
            />
        <button
        style={{height:'30px'
        ,padding:'4px',fontFamily:'sans-serif'
        ,margin:'5px' 
        ,backgroundColor:'#1e3dea',
        cursor:'pointer',
        borderRadius:'6px'
        
        
        ,color:'white'}}
        
        >Submit</button>

      <Link to="/createaccount" style={{textDecoration:'none',textAlign:'center'}}>CreateAccount</Link>
      </form>

    
    </div>


  );
}

export default Login;




  



