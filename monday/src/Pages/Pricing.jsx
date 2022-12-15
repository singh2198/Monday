import React from 'react'
import { useState } from 'react';

export default function Pricing() {

    const[price,setprice ] = useState(1);

    const handleprice=(el)=>{
        // console.log(el.target.value)
        setprice(el.target.value)
    }






  return (
    <div style={{position:'static'}}>

        <div style={{border:'1px solid red',width:'90%',top:'',margin:'auto',height:'100px' ,textAlign:'center'}}>
            

            <h3>Supercharge your teamwork.Start free</h3>
            <p>Unlimited boards and workflows. No credit card needed.</p>
            
            
        </div>

        <div style={{border:'1px solid red',width:'90%',top:'',margin:'auto',height:'100px' ,display:'flex',justifyContent:'space-between'}}>
            
                 <span>
                    <label>Chhose team size:</label>
                    <select onChange={handleprice}>
                        <option  value={'3'}>3 seats</option>
                        <option  value={'5'}>5 seats</option>
                        <option  value={'10'}>10 seats</option>
                        <option  value={'15'}>15 seats</option>
                        <option  value={'20'}>20 seats</option>
                        <option value={'25'}>25 seats</option>
                        <option value={'30'}>30 seats</option>
                        <option value={'40'}>40 seats</option>
                        <option value={'50'}>50 seats</option>
                    </select>
                </span>

                <span margin='0px'>
                    <p>Yearly Save 18% | Monthly</p>
                </span>       
            
        </div>

        {/* Payment plane */}
            <div style={{border:'1px solid red',width:'90%',top:'',margin:'auto',height:'auto' ,display:'flex',justifyContent:'space-evenly'}}>
            
               

            <div style={{border:'1px solid red' ,height:'auto',width:'15%'}}>
                {/* div one */}
                <div>
                        <h4>Individual</h4>
                        <h3>$ 0 free forever</h3>
                        
                        <br />
                        <h4>upto to 2 seats</h4>

            
                        <br />
                        <br />
                        <p>For individuals looking to keep track of their work</p>

                </div>
                <hr/>
                <div>

                    <h4>Individual Plan includes:</h4>
                    <p>Up to 3 boards</p>
                    <p>Unlimited docs</p>
                    <p>200+ templates</p>
                    <p>Over 20 column types</p>
                    <p>up to 2 team members</p>
                    <p>iOS and Android apps</p>


                </div>


            </div>

            <div style={{border:'1px solid red' ,height:'auto',width:'15%'}}>
                {/* div one */}
                <div>
                        <h4>Basic</h4>
                        <h3>$ 8 seat/ month</h3>
                        
                        <h4>Total ${price*8}/month</h4>
                        <p>Billed annually</p>
                        <button>Buy</button>

            
                        <br />
                        <p>Manage all your teams’ work in one place</p>

                </div>
                <hr/>
                <div>

                    <h4>Includes Individual Plus:</h4>
                    <p>Unlimited free viewers</p>
                    <p>Unlimited items</p>
                    <p>5 GB filles storage</p>
                    <p>Prioritised customer support</p>
                    <p>Create a dashboard based on 1 board</p>
                    {/* <p>iOS and Android apps</p> */}


                </div>


            </div>

            <div style={{border:'1px solid red' ,height:'auto',width:'15%'}}>
                {/* div one */}
                <div>
                        <h4>Standard</h4>
                        <h3>$ 10 seat/month</h3>

                        <h4>Total ${price*10}/month</h4>
                        <p>Billed annually</p>
                        <button>Buy</button>

            
                        <br />
                        <p>Collaborate and optimize your team processes</p>

                </div>
                <hr/>
                <div>

                    <h4>Includes Basic,plus:</h4>

                    <p>Timeline & Gantt views</p>
                    <p>Calendar view</p>
                    <p>Guest access</p>
                    <p>Automations(250 actions per month)</p>
                    <p>Create a dashboard that combines up to 5 boards</p>
                    {/* <p>iOS and Android apps</p> */}


                </div>


            </div>


            <div style={{border:'1px solid red' ,height:'auto',width:'15%'}}>
                {/* div one */}
                <div>
                        <h4>Pro</h4>
                        <h3>$ 16 seat/month</h3>

                        <h4>Total ${price*16}/month</h4>
                        <p>Billed annually</p>
                        <button>Buy</button>
            
                        <br />
                        <p>Streamline and run your teams’ complex workflows</p>

                </div>
                <hr/>
                <div>

                    <h4>Individual Plan includes:</h4>
                    <p>Private boards and docs</p>
                    <p>Time tracking</p>
                     
                    <p>Formula column</p>
                    <p>Dependency column</p>
                    <p>Automations(25,000 actions per month)</p>
                    <p>Integrations(25,000 actions per month)</p>
                

                </div>


            </div>

            {/* <div style={{border:'1px solid red' ,height:'auto',width:'15%'}}>
                
                <div>
                        <h4>Enterprise</h4>
                        <h3>$ 0 free forever</h3>
                        
                        <br />
                        <h4>upto to 2 seats</h4>

            
                        <br />
                        <br />
                        <p>For individuals looking to keep track of their work</p>

                </div>
                <hr/>
                <div>

                    <h4>Individual Plan includes:</h4>
                    <p>Up to 3 boards</p>
                    <p>Unlimited docs</p>
                    <p>200+ templates</p>
                    <p>Over 20 column types</p>
                    <p>up to 2 team members</p>
                    <p>iOS and Android apps</p>


                </div>


            </div> */}









       
            </div>



            {/* costumer details  */}
            <div style={{border:'1px solid red',width:'100%',top:'',margin:'',height:'auto' ,textAlign:'center'}}>


                <div>
                    <p>Over 152,000 customers worldwide rely on monday.com</p>
                                                                
                </div>

                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png" alt="" width={'8%'} sizes={''} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png" alt="" width={'8%'}  height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png" alt="" width={'8%'} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png" alt="" width={'8%'} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png" alt="" width={'8%'} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png" alt="" width={'8%'} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png" alt="" width={'8%'} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png" alt="" width={'8%'} height={'50px'}/>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png" alt="" width={'8%'} height={'50px'}/>
                </div>
            </div>



    </div>
  )
}
