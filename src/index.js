/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import github from "./assets/github.svg";
import discord from "./assets/discord.svg";
import fivem from "./assets/fivem.png";
import download from "./assets/download.svg";
import thm from "./assets/thm.png";
import resume from "./assets/resume.pdf";
import lua from "./assets/lua.svg";
import database from "./assets/database.svg";
import server from "./assets/server.svg";
import pp from "./assets/pp.gif";
import metasploit from "./assets/metasploit.png";
import nmap from "./assets/nmap.png";
import giec from "./assets/giec-screen.png";
import externalLink from "./assets/external-link.svg";
import quizScreen from "./assets/quiz-screen.png";
import react from "./assets/react.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import nodejs from "./assets/nodejs.svg";
import javascript from "./assets/javascript.svg";
import adminScreen from "./assets/admin-screen.png";
import discordBot from "./assets/discordbot.png";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Portfolio = () => {
  const githubChartURL = "https://ghchart.rshah.org/43265c/k-3st3ban";
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#0e0a19",
        },
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#fff",
          },
          opacity: 1,
        },
        enable: false,
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      fpsLimit: 120,
      particles: {
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        collisions: {
          absorb: {
            speed: 2,
          },
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },
          enable: true,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "top",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 0.5,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: true,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: true,
        },
        number: {
          density: {
            enable: false,
            width: 1920,
            height: 1080,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 300,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 2,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
      },
    }),
    []
  );
  if (init) {
    return (
      <header>
        <div id="tsparticles"></div>

        <script src="tsparticles.engine.min.js"></script>

        <div className="header">
          <div
            className="navbar"
            style={{ display: "flex" }}>
            <h1 style={{ display: "flex", flexDirection: "row" }}>
              Azuka{" "}
              <img
                src={pp}
                alt="pp"
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "10px 0px 0px 10px",
                  borderRadius: "50%",
                }}
              />
            </h1>
            <a
              href={resume}
              download>
              <button className="navbutton">
                <img
                  src={download}
                  alt="download"
                  style={{
                    width: "20px",
                    height: "20px",
                    margin: "0px 0px 0px 0px",
                  }}
                />
                Resume
              </button>
            </a>
          </div>
          <h2>DEVELOPER / PENSTESTER</h2>
          <p>
            Hello! I started programming at the age of 12, small projects like
            Python programming. After that, I developed servers for FiveM,
            learned Lua, Python, C, C++, SQL, and more.
          </p>

          <h2 style={{ textAlign: "center" }}>About Me</h2>

          {/* Button container for social links and project buttons */}
          <div className="button-container">
            <a href="https://github.com/hunterfuzzo">
              <button className="logoButton">
                <img
                  src={github}
                  alt="GitHub"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://example.com">
              <button className="logoButton">
                <img
                  src={discord}
                  alt="Discord"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="projects.html">
              <button className="logoButton">
                <img
                  src={fivem}
                  alt="FiveM"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={thm}
                  alt="TryHackMe"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
          </div>

          <h2 style={{ textAlign: "center" }}>What I learned</h2>
          <div className="button-container">
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={lua}
                  alt="lua"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={server}
                  alt="server"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={database}
                  alt="database"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={metasploit}
                  alt="metasploit"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
            <a href="https://tryhackme.com/p/Azuka">
              <button className="logoButton">
                <img
                  src={nmap}
                  alt="nmap"
                  style={{ width: "70px", height: "70px", margin: "10px" }}
                />
              </button>
            </a>
          </div>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Projects
          </h2>
          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    Tools for database management for air quality.
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the air quality data management tool developed by
                    DATA-X for the Ministry of Ecology. This repository contains
                    the source code of the application, designed to centralize
                    meteorological data, manage personnel and sensors, and
                    publish air quality reports.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/site-giec-react"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://mr22206.github.io/Air-Quality-Data-Management-Tool/"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={externalLink}
                          alt="deployed site"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Deployed Site
                      </button>
                    </a>
                    <img
                      src={react}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={html}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={css}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={nodejs}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={giec}
                  alt=""
                  style={{ height: "200px", width: "310px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    Quiz TDMK project
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the TDMK Quiz, a collaborative project created by
                    Dylan, Mohammad, Théo, and Kevin. This repository contains
                    the source code for an online quiz, developed as part of an
                    educational project. The quiz is designed to test users'
                    knowledge on various topics through a simple and interactive
                    web interface.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/quiz-tdmk"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://mr22206.github.io/Quiz-TDMK-Site-Web-du-Projet/"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={externalLink}
                          alt="deployed site"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Deployed Site
                      </button>
                    </a>
                    <img
                      src={html}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={css}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={javascript}
                      alt=""
                      style={{ width: "25px", height: "25px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={quizScreen}
                  alt=""
                  style={{ height: "200px", width: "310px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    FiveM Admin Sript
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the FiveM script made in Lua, which includes
                    numerous features, such as warning management stored in the
                    database, as well as ban and kick management, also handled
                    by the database, vehicle management, etc., using the RageUI
                    library for the interface.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/admin-menu"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://www.youtube.com/watch?v=WVoKGRe3T-Q"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={externalLink}
                          alt="Video"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Youtube Video
                      </button>
                    </a>
                    <img
                      src={lua}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                    <img
                      src={database}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={adminScreen}
                  alt=""
                  style={{ height: "200px", width: "290px" }}></img>
              </div>
            </div>
          </div>

          <div className="projects">
            <div
              className="projectFrame"
              style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                <div>
                  <div
                    className="projectText"
                    style={{ maxWidth: "500px", fontSize: "18px" }}>
                    Discord Bot for CESI School
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Welcome to the Discord Bot project, as a early discord
                    developer i had several project on discord, including a
                    discord bot for CESI (my school), made in Javascript using
                    the runtime environment NodeJS. This bot is used for
                    moderation, file sharing, timetable sharing and more.
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <a
                    href="https://github.com/HunterFuzzo/admin-menu"
                    target="_blank"
                    rel="noreferrer">
                    <button
                      className="navbutton2"
                      style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={github}
                        alt="github"
                        style={{
                          width: "20px",
                          height: "20px",
                          margin: "0px 10px 0px 0px",
                        }}
                      />
                      Repository
                    </button>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <a
                      href="https://www.youtube.com/watch?v=WVoKGRe3T-Q"
                      target="_blank"
                      rel="noreferrer">
                      <button
                        className="navbutton2"
                        style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={externalLink}
                          alt="Video"
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                        Invite Server Test
                      </button>
                    </a>
                    <img
                      src={javascript}
                      alt=""
                      style={{ width: "25px", height: "25px" }}></img>
                    <img
                      src={nodejs}
                      alt=""
                      style={{ width: "30px", height: "30px" }}></img>
                  </div>
                </div>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div>
                <img
                  src={discordBot}
                  alt=""
                  style={{ height: "200px", width: "230px" }}></img>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5%",
            }}>
            <img
              src={githubChartURL}
              alt="GitHub Activity Chart"
              style={{
                width: "75%",
                height: "auto",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </div>
          <h3>Copyright © 2024 Azuka</h3>
        </div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </header>
    );
  }
};

// Render the JSX component to the DOM
ReactDOM.render(<Portfolio />, document.getElementById("root"));
