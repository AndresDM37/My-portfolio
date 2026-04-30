import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import arrowUpIcon from "../assets/icons/arrow-up-right.svg";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    if (success) setSuccess(false);
    if (error) setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

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
      setError(true);
    }
  };

  return (
    <section id="Contact" className="section-spacing pt-12 lg:pt-20">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-300 via-sky-300 to-cyan-300 px-6 py-8 text-gray-950 shadow-2xl shadow-emerald-500/10 md:px-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-gray-950/10 blur-3xl"></div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-gray-950/10 bg-white/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gray-900 backdrop-blur">
                Contacto
              </p>
              <h2 className="head-text">¡Vamos a hablar!</h2>
              <p className="mt-4 text-lg leading-8 text-gray-800/85">
                Si quieres construir un sitio web, mejorar una interfaz o dar vida
                a una idea digital, cuéntame el contexto y vemos cómo hacerlo real.
              </p>
              <div className="mt-8 rounded-3xl border border-gray-950/10 bg-white/35 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900/60">
                  Respuesta
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-950">
                  Te responderé pronto para revisar alcance, objetivos y próximos pasos.
                </p>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col space-y-5 rounded-3xl border border-gray-950/10 bg-gray-950/90 p-5 text-white shadow-2xl shadow-gray-950/20 backdrop-blur md:p-6"
            >
              <label className="space-y-3">
                <span className="text-sm font-semibold text-white/80">Nombre completo</span>
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
                <span className="text-sm font-semibold text-white/80">Correo electrónico</span>
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
                <span className="text-sm font-semibold text-white/80">Mensaje</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="field-input resize-none"
                  placeholder="Hola, me gustaría que hablemos sobre..."
                />
              </label>

              <button
                className={`field-btn z-50 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                  loading
                    ? "cursor-wait opacity-70"
                    : success
                    ? "bg-emerald-500 text-white"
                    : "hover:-translate-y-0.5 hover:bg-white/10"
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
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
                      className="mr-2 h-5 w-5"
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
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <img src={arrowUpIcon} alt="" className="h-4 w-4" />
                  </>
                )}
              </button>

              {success && (
                <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-center text-sm font-semibold text-emerald-100">
                  Gracias por contactarme. Te responderé pronto.
                </p>
              )}
              {error && (
                <p className="rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-center text-sm font-semibold text-red-100">
                  No se pudo enviar el mensaje. Inténtalo nuevamente en unos minutos.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
