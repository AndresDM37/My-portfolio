/**
 * Tarjeta de estadística: número con gradiente de marca + etiqueta.
 * Usada en el resumen de la sección Experiencia.
 */
const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-3xl border border-line/10 bg-surface/5 p-5 text-center">
      <p className="text-gradient-brand text-3xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-fg/60">{label}</p>
    </div>
  );
};

export default StatCard;
