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
   PÁGINA DE TÉRMINOS — CORREGIDA
------------------------------------------- */
export default function TerminosPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0A1831] via-[#0F2247] to-[#142F66] text-white overflow-hidden">

      {/* Fondo partículas */}
      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.22),transparent_70%)]" />

      {/* BOTÓN FLOTANTE */}
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

          <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>

          <p className="text-gray-700 mb-6">
            Al acceder o utilizar los servicios, productos y plataformas de{" "}
            <strong>Neriom</strong>, aceptas estos Términos y Condiciones.
            Si no estás de acuerdo, no debes utilizar nuestros servicios.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Uso de los servicios</h2>
          <p className="text-gray-700 mb-6">
            Los servicios de Neriom están destinados a empresas y usuarios que utilicen
            herramientas de automatización, chatbots, integraciones y procesamiento de datos.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Responsabilidad del usuario</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Garantizar el derecho legal para procesar la información subida al sistema.</li>
            <li>No subir datos ilícitos o confidenciales sin autorización.</li>
            <li>Ser responsable por el uso que colaboradores hagan de la plataforma.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Limitación de responsabilidad</h2>
          <p className="text-gray-700 mb-6">Neriom no será responsable por:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Daños indirectos o consecuenciales.</li>
            <li>Pérdida de datos por factores externos.</li>
            <li>Errores causados por datos ingresados por el usuario.</li>
            <li>Interrupciones por mantenimiento o fallas de terceros.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Propiedad intelectual</h2>
          <p className="text-gray-700 mb-6">
            Todo software, código, marcas y sistemas desarrollados por Neriom
            son propiedad exclusiva de la empresa.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Uso de archivos y datos</h2>
          <p className="text-gray-700 mb-6">
            Los archivos proporcionados (ej. XMLs) se procesan únicamente para la
            ejecución solicitada y no se almacenan permanentemente sin autorización previa.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Suspensión o terminación</h2>
          <p className="text-gray-700 mb-6">
            Neriom puede suspender o restringir el acceso por uso indebido o violación de estos términos.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">7. Cambios a los términos</h2>
          <p className="text-gray-700 mb-6">
            Los términos pueden cambiar. La versión vigente siempre estará publicada en esta página.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">8. Ley aplicable</h2>
          <p className="text-gray-700 mb-6">Estos términos se rigen por las leyes de México.</p>


          {/* NUEVA SECCIÓN QUE TÚ AGREGASTE */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            9. Responsabilidad sobre automatizaciones y procesamiento de datos
          </h2>

          <p className="text-gray-700 mb-6">
            Las herramientas desarrolladas por <strong>Neriom</strong> procesan la información
            proporcionada por el usuario. El usuario reconoce que:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Debe verificar que los archivos y datos sean correctos y completos.</li>
            <li>Los resultados dependen totalmente de lo que ingresa el usuario.</li>
            <li>Neriom no es responsable por errores derivados de archivos incorrectos, datos incompletos, configuraciones erróneas o interpretaciones incorrectas.</li>
            <li>Los resultados deben revisarse antes de usarse en procesos operativos o legales.</li>
            <li>El usuario deslinda a Neriom de responsabilidad por decisiones tomadas basadas en automatizaciones.</li>
          </ul>

          <p className="text-gray-700 mb-6">
            El usuario acepta que los flujos automáticos son herramientas de apoyo
            y que el uso final de los resultados es su propia responsabilidad.
          </p>


          <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contacto</h2>
          <p className="text-gray-700">
            Puedes escribirnos a:{" "}
            <a href="mailto:contacto@neriom.mx" className="text-blue-600">
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
