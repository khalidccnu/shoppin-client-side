import React, { useState } from "react";
import { IKContext, IKImage } from "imagekitio-react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleContact = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target;

    setInput({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/khalidccnu">
      <section className="py-10">
        <div className="container">
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center max-w-sm sm:max-w-3xl mx-auto">
            <div className="w-full mt-5 sm:mt-0 sm:mr-5">
              <h1 className="hidden sm:block text-3xl font-bold text-[#35bef0]">
                Get in Touch
              </h1>
              <form
                className="form-control sm:mt-3 space-y-4"
                onSubmit={handleContact}
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={input.name}
                  className="input input-sm input-bordered w-full"
                  onChange={changeInput}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  className="input input-sm input-bordered w-full"
                  onChange={changeInput}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={input.subject}
                  className="input input-sm input-bordered w-full"
                  onChange={changeInput}
                />
                <textarea
                  rows="5"
                  placeholder="Type a message"
                  name="message"
                  value={input.message}
                  className="textarea textarea-sm textarea-bordered w-full resize-none"
                  onChange={changeInput}
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-sm bg-[#35bef0] border-none rounded-lg normal-case w-full"
                >
                  Send
                </button>
              </form>
            </div>
            <figure className="max-w-xs sm:max-w-sm">
              <IKImage
                path="/shoppin/contact.png"
                className="w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>
    </IKContext>
  );
};

export default Contact;
