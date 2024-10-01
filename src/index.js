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

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const Portfolio = () => {
  const githubChartURL = "https://ghchart.rshah.org/43265c/k-3st3ban";
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
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
        image: "",
        position: "",
        repeat: "",
        size: "",
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
      detectRetina: false,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onDiv: {
            selectors: {},
            enable: false,
            mode: {},
            type: "circle",
          },
          onHover: {
            enable: false,
            mode: {},
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: {},
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 100,
            links: {
              blink: false,
              consent: true,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 10,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: {},
            },
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
          absorbers: {
            color: {
              value: "#000000",
            },
            draggable: true,
            opacity: 1,
            destroy: true,
            orbits: true,
            size: {
              value: 50,
              density: 5,
              limit: {
                radius: 0,
                mass: 0,
              },
            },
          },
        },
      },
      manualParticles: [],
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
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: {},
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
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
        reduceDuplicates: false,
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
        stroke: {
          width: 0,
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              value: 3,
            },
            rate: {
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false,
          },
          duration: {
            value: 0,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: "#fff",
          },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      name: "Absorbers",
      absorbers: {
        color: {
          value: "#000000",
        },
        draggable: true,
        opacity: 1,
        destroy: true,
        orbits: false,
        size: {
          value: {
            min: 100,
            max: 1000,
          },
          density: 1000,
          limit: {
            radius: 10,
            mass: 0,
          },
        },
        position: {
          x: 50,
          y: 50,
        },
      },
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
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
                    Outil de Gestion des Données sur la Qualité de l'Air
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Bienvenue sur le dépôt GitHub de l'outil de gestion des
                    données sur la qualité de l'air développé par DATA-X pour le
                    compte du Ministère de l'Écologie. Ce dépôt contient le code
                    source de l'application, conçue pour centraliser les données
                    météorologiques, gérer le personnel et les capteurs, et
                    publier des rapports sur la qualité de l'air.
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

                  <a
                    href="https://deployed-site-link.com" /* Lien du site déployé */
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
                    Outil de Gestion des Données sur la Qualité de l'Air
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      textTransform: "none",
                      fontSize: "12px",
                      maxWidth: "500px",
                    }}>
                    Bienvenue sur le dépôt GitHub de l'outil de gestion des
                    données sur la qualité de l'air développé par DATA-X pour le
                    compte du Ministère de l'Écologie. Ce dépôt contient le code
                    source de l'application, conçue pour centraliser les données
                    météorologiques, gérer le personnel et les capteurs, et
                    publier des rapports sur la qualité de l'air.
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

                  <a
                    href="https://deployed-site-link.com" /* Lien du site déployé */
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
