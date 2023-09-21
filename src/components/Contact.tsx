"use client";
import React, { useState } from "react";
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
import ButtonFormSubmit from "./Shared/ButtonFormSubmit";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here, you can build the data object to be sent to formsubmit.co
    const formDataForSubmit = {
      name,
      email,

      description,
      // Add other fields as needed
    };

    console.log(formDataForSubmit);

    // Now, you can use this formDataForSubmit to pre-fill the hidden form
    const hiddenForm = document.getElementById("hiddenForm");
    if (hiddenForm) {
      Object.keys(formDataForSubmit).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = formDataForSubmit[key];
        hiddenForm.appendChild(input);
      });
      clearInputForm();
      // Submit the hidden form
      hiddenForm.submit();
    }
  };

  const clearInputForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setDescription("");
  };
  return (
    <section className="text-center flex flex-col items-center w-full ">
      <h3>Contact</h3>

      <motion.div
        className="underline-div"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.2, ease: "linear", duration: 1, type: "spring" }}
      ></motion.div>
      <div className="rounded-lg  grid sm:grid-cols-1 md:grid-cols-2   shadow-inner shadow-slate-700 w-full lg:w-2/3">
        <div
          className="flex flex-col gap-y-8 justify-center px-4 gap-14 py-8 rounded-bl-lg rounded-tl-lg"
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
              <p>
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/jens-erven-9b9758194/"
                >
                  Follow link
                </a>
              </p>
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
              <p>+ 32 491 73 90 78</p>
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
        </div>
        <div className="w-full h-full shadow-slate-400">
          <form onSubmit={handleSubmit} className="text-left p-4">
            <h5>Leave a message</h5>
            <div className="underline-div"></div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Name
              </label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
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
                required
                onChange={(e) => setEmail(e.target.value)}
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
                required
                onChange={(e) => setSubject(e.target.value)}
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
                required
                onChange={(e) => setDescription(e.target.value)}
                id="message"
                name="message"
                rows="5"
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>
            <ButtonFormSubmit text="send message" />
          </form>
        </div>

        {/* Hidden form for formsubmit.co */}
        <form
          id="hiddenForm"
          action="https://formsubmit.co/2559eb5226d88fcf48f2cfe622bfabc4"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://jenserven-portfolio-website.vercel.app/message-send"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="name" />
          <input type="hidden" name="email" />
          <input type="hidden" name="_subject" value={subject} />
          <input type="hidden" name="description" />
          {/* Add other hidden input fields as needed */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
