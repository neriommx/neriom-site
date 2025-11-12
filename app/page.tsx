export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1831] via-[#0F2247] to-[#142F66] text-white">
      {/* Header */}
      <header className="text-center mb-12 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Neriom<span className="text-blue-400">.</span>
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-200">
          Soluciones de Automatización Inteligente
        </h2>
      </header>

      {/* Descripción */}
      <section className="max-w-3xl text-center text-gray-300 px-6">
        <p className="text-lg leading-relaxed mb-6">
          En <strong className="text-white">Neriom</strong> desarrollamos soluciones de automatización e inteligencia artificial
          diseñadas para optimizar la operación de tu negocio.
        </p>
        <p className="text-lg leading-relaxed mb-10">
          Desde <span className="text-blue-400 font-semibold">chatbots</span> hasta flujos automáticos,
          integramos tecnología que impulsa tu eficiencia sin complicaciones.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contacto@neriom.mx"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-blue-900/30"
          >
            Contáctanos
          </a>
          <a
            href="https://neriom-xml.vercel.app"
            target="_blank"
            className="border border-blue-500 hover:bg-blue-500/20 px-8 py-3 rounded-lg text-white font-semibold transition-all"
          >
            Ir a Neriom XML
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} Neriom. Todos los derechos reservados.
      </footer>
    </main>
  );
}
