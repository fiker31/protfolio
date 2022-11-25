import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import pro from "../public/pro.png";
import Link from "next/link";
import duapp from "../public/duapp.jpg";
import { BiCodeAlt } from "react-icons/bi";
import {
  AiOutlineMobile,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiHackaday } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";

export default function Home() {
  const [pshow, setPshow] = useState("RNC");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showmessage, setShowmessage] = useState({ show: false, data: "" });

  const submitMessage = () => {
    if (
      /^[a-zA-Z]{0,}$/g.test(name) &&
      /^[a-zA-Z0-9]{3,}\@[a-z]{1,}\.[a-z]{2,}$/g.test(email) &&
      /^[a-zA-Z0-9@,'.\\;\"() ]{2,}$/g.test(message)
    ) {
      fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((j) => {
          setShowmessage({ show: true, data: j.message });
          setTimeout(
            () => setShowmessage({ show: false, ...showmessage }),
            3000
          );
        });
    }
    console.log(/^[a-zA-Z0-9@,'.\\;\"()]{2,}$/g.test(message));
  };
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Natnael Tilahun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className={
            showmessage.show
              ? "fixed translate-y-2 transition-transform top-5 left-1/3 w-1/3 right-1/3 bg-white text-center text-teal-900"
              : "hidden"
          }
        >
          <h1>helo</h1>
        </div>
        <section
          className="flex min-h-fit md:min-h-screen sec1bg w-full p-10 flex-col bg-white"
          id="home"
        >
          <nav className="flex w-full justify-between">
            <h1 className="font-bold text-2xl text-white">Natnael Tilahun</h1>
            <ul className="flex-row items-center hidden md:flex text-white">
              <li className="mx-3 text-lg underline underline-offset-8 text-green-600">
                <a href="#home">Home</a>
              </li>
              <li className="mx-3 text-lg">
                <a href="#about">About</a>
              </li>
              <li className="mx-3 text-lg">
                <a href="#services">Services</a>
              </li>
              <li className="mx-3 text-lg">
                <a href="#protfolio">Portfolio</a>
              </li>
              <li className="mx-3 text-lg">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="mt-16 md:mt-40 text-white">
            <h1 className="text-5xl font-bold">I'm Natnael Tilahun</h1>
            <h2 className="text-2xl font-bold mt-2 mb-5">Software Developer</h2>
            <a
              className="py-3 px-5 bg-green-600 text-sm rounded-3xl"
              href="#about"
            >
              Read More
            </a>
          </div>
        </section>
        <section
          id="about"
          className="mt-10 w-full h-fit px-10 relative overflow-hidden flex flex-col md:flex-row items-center"
        >
          <Image
            src={pro}
            objectFit="contain"
            className="bg-black rounded-sm"
          />
          <div className="ml-5 md:w-5/6 py-10">
            <h1 className="text-4xl font-semibold mb-5 ">About Me</h1>
            <h3 className="text-lg font-semibold mb-2">
              Hello I'm <span className="text-green-600">Natnael Tilahun</span>
            </h3>
            <p className="text-gray-400">
              I'm intuitive problem solver with GPA of 3.9, who exposed himself
              to different technologies and platforms concerining web and mobile
              application development. Bringing forth experties in design,
              installation, testing and maintainance of web and mobile system.
              Proficient in assortment of technologies, including JavaScript,
              Python, C#, React, Node. Able to effectively self-manage during
              independent project, as well as collaborate in a team setting.
              <br></br>
              <br></br>
              Beside technical skill, I was a team leader of one on the group in
              my class while I was studying Computer Engneering in Bahir Dar
              University. There I developed team leading, problem solving,
              crtitical thinking and communication skill. Also the unviersity
              offfered me an internship at Dilla University, where I made couple
              of problem solving projects that in which two of them favoured the
              ICT team.
            </p>
            <br></br>
            <Link href="/Natnael_Tilahun_CV.pdf" locale={false}>
              <a className="p-3 bg-green-600 rounded-full">Download Resume</a>
            </Link>
          </div>
        </section>
        <section
          className="p-10 flex items-center flex-col mt-20 gap-5"
          id="services"
        >
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-semibold">My Services</h1>
            <div className="w-20 bg-green-600 h-0.5"></div>
          </div>

          <p className="text-gray-400">
            The service I'm experienced and can provide.
          </p>
          <div className="lg:flex-row flex flex-col gap-5 mt-5">
            <div className="flex items-center flex-col bg-zinc-900 lg:w-1/4 rounded-lg p-5 gap-2">
              <BiCodeAlt size={40} />
              <h3 className="text-center font-bold text-lg mb-2">
                Web Development
              </h3>
              <p className="text-center text-gray-500">
                I develope web application using different technologies like
                Django(python), Node, React, PHP, and C#. I'm proficient in
                back-end devlopment as well as front-end development
              </p>
            </div>
            <div className="flex items-center flex-col bg-zinc-900 lg:w-1/4 rounded-lg p-5 gap-2">
              <AiOutlineMobile size={40} />
              <h3 className="text-center font-bold text-lg mb-2">
                Mobile Application Development
              </h3>
              <p className="text-center text-gray-500">
                Create an interactive fully functional app using React-Native. I
                can integrate state mangement, API call, storage managment and
                native functionality into the app. I can deliver a very
                beautiful UI given the design. Beside developing the app, I can
                also deploy it on PlayStore.
              </p>
            </div>
            <div className="flex items-center flex-col bg-zinc-900 lg:w-1/4 rounded-lg p-5 gap-2">
              <SiHackaday size={40} className="text-white" />
              <h3 className="text-center font-bold text-lg mb-2">
                Penetration Test
              </h3>
              <p className="text-center text-gray-500">
                I'm certified Penetration tester who can perform both black box
                and white box testing including code review. I can test web
                applications, andorid application, networks and binary files and
                excutables. I can also integrate this skill into the development
                phase.
              </p>
            </div>
            <div className="flex items-center flex-col bg-zinc-900 lg:w-1/4 rounded-lg p-5 gap-2">
              <RiComputerLine size={40} />
              <h3 className="text-center font-bold text-lg mb-2">
                Machine Learning &amp; AI
              </h3>
              <p className="text-center text-gray-500">
                Develope ML models and perform model optimzation and
                quantization. Proficient in Data collection and preparation on
                both NLP task and Computer vision task. I use
                Tensorflow(python).
              </p>
            </div>
          </div>
        </section>
        <section
          id="protfolio"
          className="p-10 w-full flex flex-col items-center gap-5"
        >
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-semibold">Portfolio</h1>
            <div className="w-20 bg-green-600 h-0.5"></div>
          </div>
          <p>Projects I made over the years</p>
          <div className="flex flex-row  md:flex-col gap-5 items-center">
            <ul className="flex flex-col md:flex-row gap-5">
              <li
                className={
                  pshow == "RNC"
                    ? "py-2 px-4 bg-green-600 font-semibold rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("RNC")}
              >
                React Native + C#(API)
              </li>
              <li
                className={
                  pshow == "RN"
                    ? "py-2 px-4 bg-green-600 font-semibold rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("RN")}
              >
                React Native
              </li>

              <li
                className={
                  pshow == "DJ"
                    ? "py-2 px-4 bg-green-600 font-semibold rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("DJ")}
              >
                Django
              </li>
              <li
                className={
                  pshow == "PHP"
                    ? "py-2 px-4 bg-green-600 font-semibold rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("PHP")}
              >
                PHP
              </li>
              <li
                className={
                  pshow == "RD"
                    ? "py-2 px-4 bg-green-600 rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("RD")}
              >
                React + Django
              </li>
              <li
                className={
                  pshow == "RND"
                    ? "py-2 px-4 bg-green-600 font-semibold rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("RND")}
              >
                React + Node
              </li>
              <li
                className={
                  pshow == "MA"
                    ? "py-2 px-4 bg-green-600 font-semibold rounded-2xl cursor-pointer"
                    : "py-2 px-4 font-semibold rounded-2xl cursor-pointer"
                }
                onClick={() => setPshow("MA")}
              >
                Machine Learning &amp; AI
              </li>
            </ul>
            <div
              className={
                pshow == "RNC" ? "md:flex gap-10 w-full max-h-96" : "hidden"
              }
            >
              <Link href="h">
                <Image
                  src={duapp}
                  className="cursor-pointer"
                  objectFit="contain"
                />
              </Link>
            </div>
          </div>
        </section>
        <section
          className="bg-zinc-900 w-full flex flex-col items-center p-10 gap-5"
          id="contact"
        >
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-semibold">Get in touch</h1>
            <div className="w-20 bg-green-600 h-0.5"></div>
          </div>
          <p className="text-gray-400 text-center">
            I'm available anytime. You can use on of the following options to
            contact me.<br></br> Thank your for visiting my protfolio.
          </p>
          <div className="flex flex-col md:flex-row gap-20 mt-10">
            <div className="flex items-center flex-col gap-3">
              <div className="w-10 h-10 bg-white"></div>
              <h2 className="text-lg font-semibold">Call Me</h2>
              <div className="text-gray-400 text-center">
                <p>+251926600549</p>
                <p>+251938969676</p>
              </div>
            </div>
            <div className="flex items-center flex-col gap-3">
              <div className="w-10 h-10 bg-white"></div>
              <h2 className="text-lg font-semibold">Location</h2>
              <p className="text-gray-400">Alem Bank, Addis Abeba, Ethiopia</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <div className="w-10 h-10 bg-white"></div>
              <h2 className="text-lg font-semibold">Email</h2>
              <div className="text-center text-gray-400">
                <p>natnaeltilahun157@gmail.com</p>
                <p>m4lik147@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/3 gap-5 mt-10">
            <div className="flex gap-3">
              <input
                name="name"
                className="flex-1 bg-zinc-800 p-3"
                placeholder="Your name"
                type={"text"}
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                name="email"
                placeholder="Your Email"
                className="flex-1 bg-zinc-800 p-3"
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              className="bg-zinc-800 p-3 w-full h-48"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="py-3 px-5 bg-green-600 w-fit self-center rounded-full"
              onClick={submitMessage}
            >
              Send Message
            </button>
          </div>
        </section>
      </main>
      <footer className="flex p-10 justify-between items-center">
        <div className="flex gap-3">
          <Link href="https://github.com/natnael340/">
            <AiFillGithub size={20} className="cursor-pointer" />
          </Link>

          <AiFillLinkedin size={20} />
          <BsFacebook size={20} />
          <AiFillTwitterCircle size={20} />
        </div>
        <h2 className="text-gray-400">
          Natnael Tilahun 2022 All Rights Reserved
        </h2>
      </footer>
    </div>
  );
}
