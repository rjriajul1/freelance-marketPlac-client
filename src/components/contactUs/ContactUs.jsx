import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-base-200 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          📬 Contact Us
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          Have a question or need support? Fill out the form below and we'll get
          back to you as soon as possible.
        </p>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full md:col-span-2"
          />
          <textarea
            className="textarea textarea-bordered w-full md:col-span-2"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <div className="md:col-span-2 text-center mt-2">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
