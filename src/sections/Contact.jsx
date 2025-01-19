import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import arrowUpIcon from "../assets/icons/arrow-up-right.svg";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_xi0el4a

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_xi0el4a",
        "template_tet7jnz",
        {
          from_name: form.name,
          to_name: "Andrés Marchena",
          from_email: form.email,
          to_email: "lcrankzaharphite@gmail.com",
          message: form.message,
        },
        "mudUIS_kTp4PzqodA"
      );

      setLoading(false);
      alert("Message sent successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("An error occurred, please try again later");
    }
  };

  return (
    <section id="Contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-800 py-8 px-10 rounded-3xl">
          <h2 className="head-text">Let’s talk</h2>
          <p className="text-lg mt-4">
            Whether you’re looking to build a new website or bring a unique
            project to life, Let’s connect and discuss how we can work together.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Andrés Marchena"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="example@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input"
                placeholder="Hi, I would like to discuss..."
              />
            </label>

            <button className="field-btn z-50" type="submit" disabled={loading}>
              {loading ? "Sending Message..." : "Contact Me"}

              <img src={arrowUpIcon} alt="Arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
