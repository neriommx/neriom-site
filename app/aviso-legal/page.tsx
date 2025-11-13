"use client";

import { useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // ✔️ Garantiza que canvas no sea null

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✔️ Garantiza contexto válido

    let w = 0,
      h = 0,
      particles: any[] = [];
    const particleCount = 45;

    const init = () => {
      if (!canvas) return; // ✔️ null check extra para TypeScript

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
      if (!ctx) return; // ✔️ null check para animación

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

export default function AvisoLegalPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0A1831] via-[#0F2247] to-[#142F66] text-white overflow-hidden">

      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.22),transparent_70%)]" />

      {/* BOTÓN REGRESAR */}
      <button
        onClick={() => (window.location.href = "/")}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/20 
        backdrop-blur-xl border border-white/30 shadow-xl 
        text-white text-xl flex items-center justify-center
        hover:bg-white/30 hover:scale-110 transition"
      >
        ←
      </button>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="bg-white text-gray-900 p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-xl">

          <h1 className="text-4xl font-bold mb-6">Aviso Legal</h1>

          <p className="text-gray-700 mb-6">
            Este Aviso Legal regula el acceso y uso del sitio web y servicios
            proporcionados por <strong>Neriom</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Titularidad del sitio web</h2>
          <p className="text-gray-700 mb-6">
            El sitio web y plataformas relacionadas con Neriom son propiedad de la empresa desarrolladora.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso permitido</h2>
          <p className="text-gray-700 mb-6">
            El usuario se compromete a utilizar el sitio con fines legítimos.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Exclusión de responsabilidad</h2>
          <p className="text-gray-700 mb-6">
            Las automatizaciones operan con datos proporcionados por el usuario.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Neriom no garantiza resultados con datos incorrectos.</li>
            <li>El usuario es responsable de validar los resultados.</li>
            <li>No se asume responsabilidad por daños derivados del uso.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Propiedad intelectual</h2>
          <p className="text-gray-700 mb-6">
            Todo el contenido es propiedad exclusiva de Neriom.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Contacto</h2>
          <p className="text-gray-700">
            Para dudas, escribe a{" "}
            <a href="mailto:contacto@neriom.mx" className="text-blue-600 underline">
              contacto@neriom.mx
            </a>.
          </p>

          <div className="text-center mt-12">
            <a
              href="/"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all"
            >
              ← Regresar al inicio
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
