import React from "react";
import {
  FaAddressBook,
  FaAddressCard,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa";
import ButtonRegular from "./Shared/ButtonRegular";

const Contact = () => {
  return (
    <section className="text-center flex flex-col items-center w-full ">
      <h3>Contact</h3>

      <div className="underline-div"></div>
      <div className="rounded-lg  grid sm:grid-cols-1 md:grid-cols-2 w-2/3 shadow-inner shadow-slate-700">
        <div
          className="flex flex-col gap-y-8 justify-center px-14 sm:px-5 gap-14 py-8 rounded-bl-lg rounded-tl-lg"
          style={{ backgroundColor: "#242e47" }}
        >
          <div className="flex flex-row gap-y-4 gap-x-4">
            <div
              className="w-14 h-14 bg-slate-900 rounded-full  ease-in-out 1s justify-center items-center flex p-4"
              style={{ boxShadow: "2px 1px 1px #f9a082" }}
            >
              <FaVoicemail size={40} className="fill-slate-100" />
            </div>
            <div className="text-left">
              <h5>Email</h5>
              <p>jens.erven@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-y-4 gap-x-4">
            <div
              className="w-14 h-14 bg-slate-900 rounded-full  ease-in-out 1s justify-center items-center flex p-4"
              style={{ boxShadow: "2px 1px 1px #f9a082" }}
            >
              <FaLinkedin size={40} className="fill-slate-100" />
            </div>
            <div className="text-left">
              <h5>LinkedIn</h5>
              <p>jens.erven@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-y-4 gap-x-4">
            <div
              className="w-14 h-14 bg-slate-900 rounded-full  ease-in-out 1s justify-center items-center flex p-4"
              style={{ boxShadow: "2px 1px 1px #f9a082" }}
            >
              <FaPhone size={40} className="fill-slate-100" />
            </div>
            <div className="text-left">
              <h5>Number</h5>
              <p>0491739078</p>
            </div>
          </div>
          <div className="flex flex-row gap-y-4 gap-x-4">
            <div
              className="w-14 h-14 bg-slate-900 rounded-full  ease-in-out 1s justify-center items-center flex p-4"
              style={{ boxShadow: "2px 1px 1px #f9a082" }}
            >
              <FaMapMarked size={40} className="fill-slate-100" />
            </div>
            <div className="text-left">
              <h5>Adress</h5>
              <p>Belgium, Leuven</p>
            </div>
          </div>
          <div className="flex flex-row gap-y-4 gap-x-4">
            <div
              className="w-14 h-14 bg-slate-900 rounded-full  ease-in-out 1s justify-center items-center flex p-4"
              style={{ boxShadow: "2px 1px 1px #f9a082" }}
            >
              <FaLinkedin size={40} className="fill-slate-100" />
            </div>
            <div className="text-left">
              <h5>LinkedIn</h5>
              <p>jens.erven@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full shadow-slate-400">
          <form action="" className="text-left p-4">
            <h5>Leave a message</h5>
            <div className="underline-div"></div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-white font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>
            <ButtonRegular text="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
