import React from 'react';
import  { useReducer ,useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



const initial={
    firstname:'',
    lastname:'',
    email:'',
    password:''

}

const reducer=(state,actions)=>{
    switch (actions.type){
      case 'firstname':{
        return {...state,firstname:actions.firstname}
      }
      case 'lastname':{
        return {...state,lastname:actions.lastname}
      }

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

const Createaccount = () => {
  
    const [state,dispth] =useReducer(reducer,initial)
    const [data,setdata]=useState([])
    const navigate=useNavigate()

        const getdata=()=>{
            return axios.post('http://localhost:8080/data',{
                firstname:state.firstname,
                lastname:state.lastname,
                email:state.email,
                password:state.password
            })
        }


    const handlesubmit=(el)=>{
        el.preventDefault()
        // alert("Your account create ")
        getdata()
        navigate('/login')
        // console.log(state)
    }

    // useEffect(() => {
    //     getdata().then((res)=>{
    //      // console.log(res.data)
    //     //  setdata(res.data)
    //     })
    //     .catch((error)=>{
    //      console.log(error)
    //     })
    //    },[])

    

    const handlefirstname =(el)=>{
        console.log(el.target.value)
        const obj={
            type:'firstname',
            firstname:el.target.value
        }
        dispth(obj)
    }

    const handlelastname =(el)=>{
        const obj={
            type:'lastname',
            lastname:el.target.value
        }
        dispth(obj)
    }
    const handlemail =(el)=>{
        const obj={
            type:'email',
            email:el.target.value
        }
        dispth(obj)
    }
    const handlepassword =(el)=>{
        const obj={
            type:'password',
            password:el.target.value
        }
        dispth(obj)
    }

// 
    return (
        <div>
            
            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="" 
            style={{display:'block',margin:'auto' ,width:'20%'}}
            />
            <form action="" style={{border:''
             ,display:'flex', flexDirection:'column' 
             ,width:'25%' ,margin:'auto' 
             ,height:'320px',padding:'8px',boxShadow: '0px 1px 3px 0px',
             marginTop:'40px',
             borderRadius:'7px'

            }} onSubmit={handlesubmit}
            
            >


                <label>First Name :</label>
                <input placeholder='Enter First name'   type={'text'} name='firstname' onChange={handlefirstname} 
                style={{height:'24px',padding:'4px',fontFamily:'sans-serif',margin:'5px'}}
                />

                <label>Last Name :</label>
                <input placeholder='Enter Last name'   type='text' name='Lastname' onChange={handlelastname}
                style={{height:'24px',padding:'4px',fontFamily:'sans-serif',margin:'5px'}}
                />

                <label>Email :</label>
                <input placeholder='Enter email '  type={'text'} name={'email'} onChange={handlemail}
                style={{height:'24px',padding:'4px',fontFamily:'sans-serif',margin:'5px'}}
                />

                <label>Password:</label>
                <input placeholder='Password'  onChange={handlepassword} type='password' name='password' 
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
                


            </form>
           
        </div>
    );
}

export default Createaccount;







 
