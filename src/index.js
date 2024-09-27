import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';  
import github from './assets/github.svg';
import discord from './assets/discord.svg';
import fivem from './assets/fivem.png';
import download from './assets/download.svg';
import thm from './assets/thm.png';
import resume from './assets/resume.pdf';
import lua from './assets/lua.svg';
import database from './assets/database.svg';
import server from './assets/server.svg';
import pp from './assets/pp.gif';
import { tsParticles } from "@tsparticles/engine";

const Portfolio = () => {
  const githubChartURL = 'https://ghchart.rshah.org/43265c/hunterfuzzo';
  
  return (
    <header>
      <div id="tsparticles"></div>

      <script src="tsparticles.engine.min.js"></script> 

      <div className="header">
        <div className="navbar" style={{display:'flex'}}>
          
          <h1 style={{display:'flex', flexDirection:'row'}}>Azuka <img src={pp} alt="pp" style={{ width: '80px', height: '80px', margin: '10px 0px 0px 10px', borderRadius:"50%"}} /></h1>
          <a href={resume} download>
            <button className='navbutton'>
              <img src={download} alt="download" style={{ width: '20px', height: '20px', margin: "0px 0px 0px 0px"}} />Resume
            </button>
          </a>
      
        </div>
        <h2>DEVELOPER / PENSTESTER</h2>
        <p>
          Hello! I started programming at the age of 12, small projects like Python programming.
          After that, I developed servers for FiveM, learned Lua, Python, C, C++, SQL, and more.
        </p>

        <h2 style={{textAlign:'center'}}>About Me</h2>

        {/* Button container for social links and project buttons */}
        <div className="button-container">
          <a href="https://github.com/hunterfuzzo">
            <button className="logoButton">
              <img src={github} alt="GitHub" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
          <a href="https://example.com">
            <button className="logoButton">
              <img src={discord} alt="Discord" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
          <a href="projects.html">
            <button className="logoButton">
              <img src={fivem} alt="FiveM" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
          <a href="https://tryhackme.com/p/Azuka">
            <button className="logoButton">
              <img src={thm} alt="TryHackMe" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
        </div>

        <h2 style={{textAlign:'center'}}>What I learned</h2>
        <div className="button-container">
          <a href="https://tryhackme.com/p/Azuka">
            <button className="logoButton">
              <img src={lua} alt="lua" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
          <a href="https://tryhackme.com/p/Azuka">
            <button className="logoButton">
              <img src={server} alt="server" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
          <a href="https://tryhackme.com/p/Azuka">
            <button className="logoButton">
              <img src={database} alt="database" style={{ width: '70px', height: '70px', margin: '10px' }} />
            </button>
          </a>
        </div>
        {/* GitHub Chart */}
        <div style={{display:'flex', justifyContent:'center',paddingTop:'5%'}}>
          <img src={githubChartURL} alt="GitHub Activity Chart" style={{ width: '75%', height: 'auto', userSelect: 'none', pointerEvents: 'none'}} />
        </div>
        <h3>Copyright © 2024 Azuka</h3>
      </div>
    </header>
  );
};

// Render the JSX component to the DOM
ReactDOM.render(<Portfolio />, document.getElementById('root'));
