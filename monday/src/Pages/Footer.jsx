import React from 'react'
import {BsFacebook, ReactIcons,BsTwitter } from "react-icons/bs"
// import { AiFillLinkedin, } from "react-icons/ai"
import { FaYoutube ,FaInstagram,FaTiktok,FaLinkedin,FaReddit,FaGooglePlay,FaAppStore} from "react-icons/fa"

export default function Footer() {
  return (
    <div style={{marginTop:'30px'}}>
      <div>

        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="footerlogo" width={'10%'}/>

      </div>

        {/* outer box for footer its display is flex and direction is row.. */}
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:''}}>
          <div>
            <h5>Features</h5>
            <p>Docs</p>
            <p>Integrations</p>
            <p>Automations</p>
            <p>Files</p>
            <p>Dashboards</p>
            <p>Kanban</p>
            <p>Gantt</p>
          </div>

          <div>
            <h5>monday products</h5>
            <p>monday work managemnet </p>
            <p>monday sales CRM</p>
            <p>monday marketer</p>
            <p>monday projects</p>
            <p>monday dev</p>
            <br/>

            <h5>More by monday.com</h5>
            <p>Canvas</p>
            <p>WorksForms</p>
          </div>

          <div>
            <h5>Use cases</h5>
            <p>Marketing</p>
            <p>Project Managemnet</p>
            <p>Sales</p>
            <p>Developers</p>
            <p>HR</p>
            <p>IT</p>
            <p>Operations</p>
            <p>Constraction</p>
          </div>


          <div>
            <h5>Company</h5>
            <p>Abouts us</p>
            <p>Careers - We're hiring</p>
            <p>monday-U</p>
            <p>Press</p>
            <p>Customer stories</p>
            <p>Becomes a partner</p>
            <p>Sustainability & ESG</p>
            <p>Affiliates</p>
            <p>Digital Lift</p>
            <p>Investor relations</p>
          </div>


          <div>
            <h5>Resources</h5>
            <p>Help Center</p>
            <p>Community</p>
            <p>Blog</p>
            <p>Webinars</p>
            <p>Startup for startup</p>
            <p>Global events</p>
            <p>App development</p>
            <p>Find a partner</p>
            <p>Compare</p>
          </div>
      </div>
      <hr  style={{marginLeft:'30px',marginRight:'30px'}}/>

      <div style={{display:'',justifyContent:''}}>
        <div style={{display:'flex',justifyContent:'space-around',width:'23%',margin:'auto'}}>
            <FaReddit></FaReddit>
            <BsFacebook></BsFacebook>
            <FaLinkedin></FaLinkedin>
            <FaYoutube></FaYoutube>
            <BsTwitter></BsTwitter>
            <FaInstagram></FaInstagram>
            <FaTiktok></FaTiktok>
          <FaGooglePlay></FaGooglePlay>
          <FaAppStore></FaAppStore>
        </div>

        <div style={{}}>
        </div>
        
      </div>
    </div>
  )
}
