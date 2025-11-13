"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------
   PARTICLES — VERSIÓN 100% NULL-SAFE
------------------------------------------- */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      particles: any[] = [];

    const particleCount = 45;

    const init = () => {
      if (!canvas) return;

      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);

    return () => window.removeEventListener("resize", init);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0"></canvas>;
}

/* ------------------------------------------
   PÁGINA
------------------------------------------- */
export default function PrivacidadPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0A1831] via-[#0F2247] to-[#142F66] text-white overflow-hidden">

      {/* Partículas */}
      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.22),transparent_70%)]" />

      {/* BOTÓN DE REGRESO */}
      <button
        onClick={() => (window.location.href = "/")}
        className="
          fixed top-6 left-6 z-50 
          w-12 h-12 rounded-full 
          bg-white/20 backdrop-blur-xl border border-white/30
          shadow-xl text-white text-xl 
          flex items-center justify-center
          hover:bg-white/30 hover:scale-110 
          transition-all cursor-pointer
        "
        title="Volver al inicio"
      >
        ←
      </button>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="bg-white text-gray-900 p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-xl">

          <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>

          <p className="text-gray-700 mb-6">
            En <strong>Neriom</strong> valoramos y respetamos tu privacidad.
            Esta Política describe cómo manejamos tu información personal.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Información que recopilamos</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Nombre, correo electrónico y datos de contacto.</li>
            <li>Datos necesarios para operar nuestros productos.</li>
            <li>Información técnica como IP, navegador y dispositivo.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso de la información</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Mejora y operación de productos (XML, Chatbots, integraciones).</li>
            <li>Soporte técnico y análisis interno.</li>
            <li>Cumplimiento legal.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Protección de los datos</h2>
          <p className="text-gray-700 mb-6">
            Implementamos medidas técnicas, administrativas y físicas para proteger tu información.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Compartición de información</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Proveedores de servicios esenciales.</li>
            <li>Autoridades legales cuando sea requerido.</li>
            <li>Con tu consentimiento explícito.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Tus derechos</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Acceder, rectificar y eliminar tus datos personales.</li>
            <li>Retirar tu consentimiento.</li>
            <li>Solicitar aclaraciones sobre el tratamiento de datos.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contacto</h2>
          <p className="text-gray-700">
            Puedes comunicarte con nosotros a:{" "}
            <a href="mailto:contacto@neriom.mx" className="text-blue-600 underline">
              contacto@neriom.mx
            </a>
          </p>

          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
              text-white font-semibold shadow-lg hover:shadow-blue-900/40 transition-all"
            >
              ← Regresar al inicio
            </a>
          </div>

        </div>
      </div>

    </main>
  );
}
