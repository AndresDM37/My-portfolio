import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import arrowUpIcon from "../assets/icons/arrow-up-right.svg";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    // Resetear estado de éxito al escribir
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_9dk8ed3",
        "template_tet7jnz",
        {
          from_name: form.name,
          to_name: "Andrés Marchena",
          from_email: form.email,
          to_email: "polimardo2@gmail.com",
          message: form.message,
        },
        "mudUIS_kTp4PzqodA"
      );

      setLoading(false);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setSuccess(false), 5000);
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
          <h2 className="head-text">!Vamos a Hablar¡</h2>
          <p className="text-lg mt-4">
            Si desea crear un nuevo sitio web o dar vida a un proyecto único,
            póngase en contacto conmigo y hablemos de cómo podemos trabajar
            juntos.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg">Nombre Completo</span>
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
              <span className="text-lg">Correo Electronico</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ejemplo@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg">Su Mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input"
                placeholder="Hola, me gustaria que ..."
              />
            </label>

            <button
              className={`field-btn z-50 transition-all duration-300 ${
                loading
                  ? "opacity-70 cursor-wait"
                  : success
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-black-200"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </>
              ) : success ? (
                <>
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  ¡Mensaje Enviado!
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <img src={arrowUpIcon} alt="Arrow" />
                </>
              )}
            </button>

            {/* Mensaje de éxito */}
            {success && (
              <p className="text-center text-lg font-semibold">
                ¡Gracias por contactarme! Te responderé pronto. 👌
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
