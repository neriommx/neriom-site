"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ------------------------------------------
   PARTICLES – FIX 100% SEGURO PARA TYPESCRIPT
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
   3D TILT COMPONENT
------------------------------------------- */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * 10;
    const rotateY = ((x - rect.width / 2) / rect.width) * -10;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
    >
      {children}
    </div>
  );
}

/* ------------------------------------------
   MAIN PAGE
------------------------------------------- */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -40]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -20]);

  return (
    <main className="scroll-smooth min-h-screen flex flex-col bg-gradient-to-br from-[#0A1831] via-[#0F2247] to-[#142F66] text-white relative overflow-hidden">

      <Particles />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.22),transparent_70%)]" />

      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight">
            Neriom<span className="text-white">™</span>
          </h1>

          <div className="hidden sm:flex space-x-8 text-gray-300 font-medium text-sm">
            {["inicio", "soluciones", "productos", "contacto"].map((sec) => (
              <a key={sec} href={`#${sec}`} className="hover:text-white transition-colors">
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section
        id="inicio"
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 relative z-10"
      >
        <motion.h1
          style={{ y: titleY }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Neriom<span className="text-white">™</span>
        </motion.h1>

        <motion.h2
          style={{ y: subtitleY }}
          className="mt-4 text-xl md:text-2xl font-light text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Soluciones de Automatización Inteligente
        </motion.h2>

        <motion.div
          className="max-w-3xl text-gray-300 text-center mt-14"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <p className="text-lg leading-relaxed mb-6">
            En <strong className="text-white">Neriom</strong> creamos soluciones empresariales
            que eliminan trabajo manual y aumentan la eficiencia.
          </p>

          <p className="text-lg leading-relaxed mb-10">
            Desde <span className="text-blue-300 font-semibold">chatbots</span> hasta flujos inteligentes,
            conectamos tecnología con tu operación real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@neriom.mx"
              className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 font-semibold shadow-md hover:bg-white/20 transition-all"
            >
              Contáctanos
            </a>

            <a
              href="https://neriom-xml.vercel.app"
              target="_blank"
              className="px-8 py-3 rounded-xl border border-blue-400 text-blue-200 hover:bg-blue-400/20 hover:text-white transition-all"
            >
              Ir a Neriom XML
            </a>
          </div>
        </motion.div>
      </section>

      {/* SOLUCIONES */}
      <section id="soluciones" className="py-32 px-6 max-w-6xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          Soluciones
        </motion.h2>

        <p className="text-gray-200 max-w-2xl mx-auto mb-16">
          Herramientas diseñadas para automatizar procesos y reducir errores.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Automatización XML", desc: "Procesamiento, validación y renombrado inteligente de XMLs." },
            { title: "Chatbots Inteligentes", desc: "Bots para atención, ventas y flujos empresariales." },
            { title: "Flujos Empresariales", desc: "Integraciones internas personalizadas para tu operación." },
          ].map((card, i) => (
            <TiltCard key={i}>
              <motion.div
                className="p-10 bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-200"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-5">{card.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-32 px-6 bg-white/10 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            Productos
          </motion.h2>

          <p className="text-gray-200 max-w-2xl mx-auto mb-16">
            Tecnología lista para usarse.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* PRODUCTO 1 */}
            <TiltCard>
              <motion.div
                className="p-10 bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-200"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              >
                <h3 className="text-2xl font-semibold mb-5">Neriom XML</h3>
                <p className="text-gray-600 text-base mb-8">Automatización total del flujo XML.</p>

                <a href="https://neriom-xml.vercel.app" target="_blank" className="text-blue-600 font-medium hover:text-blue-800">
                  Abrir producto →
                </a>
              </motion.div>
            </TiltCard>

            {/* PRODUCTO 2 */}
            <TiltCard>
              <motion.div
                className="p-10 bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-200"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-5">Neriom Chatbots</h3>
                <p className="text-gray-600 text-base mb-8">Chatbots conectados a flujos empresariales reales.</p>

                <a href="#contacto" className="text-blue-600 font-medium hover:text-blue-800">
                  Solicitar demo →
                </a>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 px-6 text-center">
        <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          Contacto
        </motion.h2>

        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          ¿Quieres implementar automatización en tu empresa? Escríbenos y te ayudamos.
        </p>

        <a href="mailto:contacto@neriom.mx" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg transition-all">
          contacto@neriom.mx
        </a>
      </section>

      {/* CTA FLOTANTE */}
      <button
        onClick={() => (window.location.href = "#contacto")}
        className="fixed bottom-6 right-6 z-50 bg-white text-[#0A1831] w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-all border border-gray-200"
      >
        ⚡
      </button>

      {/* FOOTER CORPORATIVO */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-[#0A1831]/40 backdrop-blur-xl mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-3 gap-10 text-gray-300">
          
          {/* Columna 1 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Neriom</h3>
            <p className="text-sm text-gray-400">Automatización real para empresas reales.</p>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
              <li><a href="#soluciones" className="hover:text-white">Soluciones</a></li>
              <li><a href="#productos" className="hover:text-white">Productos</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacidad" className="hover:text-white">Política de Privacidad</a></li>
              <li><a href="/terminos" className="hover:text-white">Términos y Condiciones</a></li>
              <li><a href="/aviso-legal" className="hover:text-white">Aviso Legal</a></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-10">
          © {new Date().getFullYear()} Neriom. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
