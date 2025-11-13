"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------
   PARTICULAS – mismo componente que usas
------------------------------------------- */
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    let w, h, particles;
    const particleCount = 45;

    function init() {
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
    }

    function animate() {
      c.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        c.beginPath();
        c.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        c.fillStyle = "rgba(255,255,255,0.25)";
        c.fill();
      });

      requestAnimationFrame(animate);
    }

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

      {/* BOTÓN FLOTANTE REGRESAR */}
      <button
        onClick={() => (window.location.href = "/")}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/20 
                   backdrop-blur-xl border border-white/30 shadow-xl 
                   text-white text-xl flex items-center justify-center
                   hover:bg-white/30 hover:scale-110 transition"
      >
        ←
      </button>

      {/* CARD DE CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="bg-white text-gray-900 p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-xl">

          <h1 className="text-4xl font-bold mb-6">Aviso Legal</h1>

          <p className="text-gray-700 mb-6">
            Este Aviso Legal regula el acceso y uso del sitio web y servicios proporcionados por 
            <strong> Neriom</strong>. Al navegar o utilizar nuestros productos, aceptas las condiciones
            aquí descritas.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Titularidad del sitio web</h2>
          <p className="text-gray-700 mb-6">
            El sitio web, herramientas y plataformas relacionados con Neriom son titularidad de la empresa
            desarrolladora responsable del software y automatizaciones comercializadas bajo esta marca.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso permitido</h2>
          <p className="text-gray-700 mb-6">
            El usuario se compromete a utilizar el sitio web y los servicios únicos para fines legítimos,
            sin violar derechos de terceros ni realizar usos indebidos de las herramientas.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Exclusión de responsabilidad</h2>
          <p className="text-gray-700 mb-6">
            Las automatizaciones y herramientas ofrecidas por Neriom funcionan en base a datos y archivos 
            proporcionados por el usuario. Por lo tanto:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Neriom no garantiza resultados si los datos proporcionados son incorrectos, incompletos o inválidos.</li>
            <li>Neriom no se hace responsable de daños, pérdidas o errores derivados del uso de automatizaciones.</li>
            <li>La responsabilidad final del uso de los resultados recae exclusivamente en el usuario.</li>
            <li>El usuario debe revisar y validar la información procesada antes de utilizarla en procesos reales.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Propiedad intelectual</h2>
          <p className="text-gray-700 mb-6">
            Todo el contenido, software, interfaces y diseños del sitio son propiedad exclusiva de Neriom
            y están protegidos por la legislación vigente.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Contacto</h2>
          <p className="text-gray-700">
            Si deseas más información sobre este Aviso Legal puedes escribirnos a:{" "}
            <a href="mailto:contacto@neriom.mx" className="text-blue-600 underline">
              contacto@neriom.mx
            </a>
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
