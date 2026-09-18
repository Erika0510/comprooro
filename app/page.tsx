import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  const WHATSAPP_NUMBER = "5930995245969";
  const DISPLAY_WHATSAPP = "+593 099 524 5969";

  return (
    <main className="min-h-screen bg-white text-[#222222]">
      {/* NAVBAR */}
      <header className="w-full border-b border-[#E5E7EB] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-lg font-semibold tracking-wide">
            COMPRO ORO & RELOJES
          </div>

          <div className="hidden items-center gap-4 text-sm md:flex">
            <Link
              href="#servicios"
              className="text-[#6B7280] transition hover:text-[#222222]"
            >
              Servicios
            </Link>

            <Link
              href="#confianza"
              className="text-[#6B7280] transition hover:text-[#222222]"
            >
              Confianza
            </Link>

            <Link
              href="#como-funciona"
              className="text-[#6B7280] transition hover:text-[#222222]"
            >
              Cómo funciona
            </Link>

            <Link
              href="#ubicacion"
              className="text-[#6B7280] transition hover:text-[#222222]"
            >
              Ubicación
            </Link>

            <Link
              href="/cotizar"
              className="rounded-full border border-[#222222] px-4 py-1 text-xs text-[#222222] transition hover:bg-[#222222] hover:text-white"
            >
              Cotizar ahora
            </Link>
          </div>

          {/* BOTÓN MOBILE */}
          <Link
            href="/cotizar"
            className="rounded-full border border-[#222222] px-4 py-2 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white md:hidden"
          >
            Cotizar
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <FadeInSection>
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          {/* IMÁGENES */}
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/image/monedas.webp"
                  alt="Monedas y piezas de oro"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -right-2 top-16 w-36 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-xl md:-right-10 md:w-56">
                <img
                  src="/image/relog.webp"
                  alt="Reloj para valoración en Quito"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXTO HERO */}
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]">
              COMPRA DE ORO · PLATA · RELOJES
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#222222] md:text-5xl">
              Compra y venta de oro, plata y relojes en Quito
            </h1>

            <p className="max-w-xl text-sm leading-6 text-[#6B7280]">
              Negocio físico con atención directa en Quito, Ecuador. Trae tus
              piezas y recibe una cotización según su material, peso,
              características y estado.
            </p>

            {/* BOTONES */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20por%20mi%20oro%20%2F%20plata%20%2F%20reloj.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#222222] px-5 py-2 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
              >
                Hablar por WhatsApp
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="rounded-full border border-[#222222] px-5 py-2 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
              >
                Llamar ahora
              </a>

              <Link
                href="/cotizar"
                className="rounded-full border border-[#222222] px-5 py-2 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
              >
                Enviar datos para cotización
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* SERVICIOS */}
      <FadeInSection>
        <section
          id="servicios"
          className="border-t border-[#E5E7EB] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-3 text-2xl font-semibold text-[#222222]">
              ¿Qué compramos?
            </h2>

            <p className="mb-8 max-w-2xl text-sm leading-6 text-[#6B7280]">
              Evaluamos diferentes tipos de piezas de oro, plata, relojes y
              joyas para ofrecerte una valoración personalizada.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* TARJETA 1 */}
              <FadeInSection>
                <div className="group flex cursor-pointer flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] transition-transform duration-300 group-hover:scale-110">
                      💰
                    </span>

                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#222222]">
                      Compra de oro
                    </h3>
                  </div>
                </div>
              </FadeInSection>

              {/* TARJETA 2 */}
              <FadeInSection>
                <div className="group flex cursor-pointer flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] transition-transform duration-300 group-hover:scale-110">
                      ⛓️
                    </span>

                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#222222]">
                      Compra de plata
                    </h3>
                  </div>
                </div>
              </FadeInSection>

              {/* TARJETA 3 */}
              <FadeInSection>
                <div className="group flex cursor-pointer flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] transition-transform duration-300 group-hover:scale-110">
                      ⌚
                    </span>

                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#222222]">
                      Compra de relojes
                    </h3>
                  </div>
                </div>
              </FadeInSection>

              {/* TARJETA 4 */}
              <FadeInSection>
                <div className="group flex cursor-pointer flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] transition-transform duration-300 group-hover:scale-110">
                      🧩
                    </span>

                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#222222]">
                      Joyas usadas o en mal estado
                    </h3>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CONFIANZA */}
      <FadeInSection>
        <section
          id="confianza"
          className="border-t border-[#E5E7EB] bg-[#FAFAFA]"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF57]">
                Atención clara y directa
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#222222]">
                Tu tranquilidad es parte de la valoración
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#6B7280]">
                Somos un negocio físico en Quito. Puedes visitarnos, conocer
                personalmente dónde estamos y recibir atención directa durante
                la revisión de tus piezas.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* LOCAL FÍSICO */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-2xl">📍</div>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Local físico en Quito
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                    Estamos ubicados en Quito, en Avenida La Coruña y 12 de Octubre,
                    Condominio General Artigas. Nuestro local físico te permite visitarnos,
                    resolver tus dudas personalmente y realizar la valoración de tus piezas
                    de forma directa.
                </p>
              </div>

              {/* VALORACIÓN */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-2xl">⚖️</div>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Valoración personalizada
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Revisamos cada pieza teniendo en cuenta su peso, material,
                  características y estado.
                </p>
              </div>

              {/* CONTACTO */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-2xl">💬</div>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Contacto directo
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Puedes comunicarte directamente con nosotros por WhatsApp o
                  teléfono antes de visitar el local.
                </p>
              </div>

              {/* PROCESO */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-2xl">🔎</div>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Proceso claro
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Te orientamos durante el proceso de revisión para que conozcas
                  los aspectos considerados en tu cotización.
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20valoraci%C3%B3n%20de%20mis%20piezas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#222222] px-6 py-3 text-xs font-semibold text-white transition hover:scale-105 hover:bg-black"
              >
                Resolver mis dudas por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CÓMO FUNCIONA */}
      <FadeInSection>
        <section
          id="como-funciona"
          className="border-t border-[#E5E7EB] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF57]">
                Proceso de valoración
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#222222]">
                ¿Cómo funciona?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#6B7280]">
                Queremos que sepas qué esperar antes de visitarnos.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* PASO 1 */}
              <div className="relative rounded-2xl border border-[#E5E7EB] p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#222222] text-sm font-bold text-white">
                  1
                </span>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Contáctanos o visítanos
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Puedes escribirnos por WhatsApp o acercarte directamente a
                  nuestro local en Quito.
                </p>
              </div>

              {/* PASO 2 */}
              <div className="relative rounded-2xl border border-[#E5E7EB] p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#222222] text-sm font-bold text-white">
                  2
                </span>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Revisamos tu pieza
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Evaluamos aspectos como material, peso, características y
                  estado de la pieza.
                </p>
              </div>

              {/* PASO 3 */}
              <div className="relative rounded-2xl border border-[#E5E7EB] p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#222222] text-sm font-bold text-white">
                  3
                </span>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Recibes tu cotización
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Después de revisar la pieza te comunicamos la valoración
                  correspondiente.
                </p>
              </div>

              {/* PASO 4 */}
              <div className="relative rounded-2xl border border-[#E5E7EB] p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF57] text-sm font-bold text-white">
                  4
                </span>

                <h3 className="mb-2 font-semibold text-[#222222]">
                  Resolvemos tus dudas
                </h3>

                <p className="text-sm leading-6 text-[#6B7280]">
                  Antes de continuar puedes consultarnos cualquier duda sobre
                  la valoración realizada.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/cotizar"
                className="rounded-full bg-[#222222] px-6 py-3 text-xs font-semibold text-white transition hover:bg-black"
              >
                Solicitar cotización
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20proceso%20de%20valoraci%C3%B3n.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#222222] px-6 py-3 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* UBICACIÓN */}
      <FadeInSection>
        <section
          id="ubicacion"
          className="border-t border-[#E5E7EB] bg-white"
        >
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF57]">
                Estamos en Quito
              </p>

              <h2 className="mb-4 text-2xl font-semibold text-[#222222]">
                Ubicación
              </h2>

              <p className="mb-4 text-sm leading-6 text-[#6B7280]">
                Visítanos en nuestro local físico y recibe atención
                personalizada.
              </p>

              <div className="space-y-3 text-sm text-[#6B7280]">
                <p>
                  <span className="font-semibold text-[#222222]">
                    Dirección:{" "}
                  </span>
                  Avenida La Coruña y 12 de Octubre, Condominio General Artigas,
                  Quito, Ecuador
                </p>

                <p>
                  <span className="font-semibold text-[#222222]">
                    Ciudad:{" "}
                  </span>
                  Quito - Pichincha
                </p>

                <p>
                  <span className="font-semibold text-[#222222]">
                    Teléfono:{" "}
                  </span>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="underline hover:text-[#222222]"
                  >
                    {DISPLAY_WHATSAPP}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-[#222222]">
                    WhatsApp:{" "}
                  </span>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#222222]"
                  >
                    {DISPLAY_WHATSAPP}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-[#222222]">
                    Horario:{" "}
                  </span>
                  Lunes a viernes, 9:00 a.m. – 6:00 p.m.
                  <br />
                  Sábados: con cita previa.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/6eHKmesBhQrqJjp39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#222222] px-4 py-2 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
                >
                  Ver ruta en Google Maps
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20saber%20c%C3%B3mo%20llegar%20al%20local.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#222222] px-4 py-2 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
                >
                  Preguntar cómo llegar
                </a>
              </div>
            </div>

            {/* MAPA */}
            <div className="h-[260px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] md:h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63836.6915584475!2d-78.5589818!3d-0.2032265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b8044a4e267%3A0x80b0c013ed71bb4!2sCompro%20Oro!5e0!3m2!1ses-419!2sco!4v1726435867779!5m2!1ses-419!2sco"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Compro Oro & Relojes en Quito"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* PREGUNTAS FRECUENTES */}
      <FadeInSection>
        <section
          id="preguntas"
          className="border-t border-[#E5E7EB] bg-[#FAFAFA]"
        >
          <div className="mx-auto max-w-4xl px-4 py-16">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF57]">
                Preguntas frecuentes
              </p>

              <h2 className="text-3xl font-semibold text-[#222222]">
                Antes de visitarnos
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6B7280]">
                Estas son algunas de las dudas más comunes antes de solicitar
                una valoración.
              </p>
            </div>

            <div className="space-y-4">
              <details className="group rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#222222]">
                  ¿Qué tipo de piezas compran?
                </summary>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Evaluamos oro, plata, relojes, joyas usadas y piezas que se
                  encuentren en mal estado.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#222222]">
                  ¿Dónde están ubicados?
                </summary>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                   Estamos en Avenida La Coruña y 12 de Octubre, Condominio General Artigas,
                    Quito, Ecuador. Puedes visitarnos en nuestro local físico para recibir
                     atención personalizada.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#222222]">
                  ¿Cómo se realiza la cotización?
                </summary>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  La pieza es revisada considerando aspectos como material,
                  peso, características y estado.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#222222]">
                  ¿Puedo contactar antes de ir?
                </summary>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Sí. Puedes escribirnos por WhatsApp o comunicarte por teléfono
                  antes de acercarte al local.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#222222]">
                  ¿Atienden los sábados?
                </summary>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Los sábados atendemos con cita previa. Puedes coordinar tu
                  visita por WhatsApp.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#E5E7EB] bg-white p-5">
                <summary className="cursor-pointer font-semibold text-[#222222]">
                  ¿Puedo enviar información antes de ir al local?
                </summary>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Sí. Puedes utilizar nuestro formulario de cotización o
                  escribirnos directamente por WhatsApp para enviarnos
                  información inicial sobre tu pieza.
                </p>
              </details>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-4 text-sm text-[#6B7280]">
                ¿Tienes otra pregunta?
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20la%20compra%20de%20oro%2C%20plata%20o%20relojes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#222222] px-6 py-3 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA FINAL */}
      <FadeInSection>
        <section className="border-t border-[#E5E7EB] bg-[#222222]">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF57]">
              ¿Tienes una pieza para valorar?
            </p>

            <h2 className="text-3xl font-semibold text-white">
              Hablemos sobre tu oro, plata, joyas o reloj
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#D1D5DB]">
              Escríbenos, envíanos tus datos o visítanos directamente en
              nuestro local en Quito.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20por%20mi%20oro%20%2F%20plata%20%2F%20reloj.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold text-[#222222] transition hover:scale-105"
              >
                Hablar por WhatsApp
              </a>

              <Link
                href="/cotizar"
                className="rounded-full border border-white px-6 py-3 text-xs font-semibold text-white transition hover:bg-white hover:text-[#222222]"
              >
                Enviar datos para cotización
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-xs text-[#6B7280] md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#222222]">
              Compro Oro & Relojes
            </p>

            <p className="leading-5">
              Compra de oro, plata y relojes con atención personalizada en
              nuestro local físico en Quito.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#222222]">Contacto</p>

            <p>
              Teléfono:{" "}
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="underline hover:text-[#222222]"
              >
                {DISPLAY_WHATSAPP}
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#222222]"
              >
                {DISPLAY_WHATSAPP}
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#222222]">Horario</p>

            <p>Lunes a viernes:</p>
            <p>9:00 a.m. – 6:00 p.m.</p>

            <p className="pt-1">Sábados:</p>
            <p>Con cita previa.</p>

            <p className="mt-2 text-[11px]">
              *Horarios especiales en festivos, confirmar por WhatsApp.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#222222]">Ubicación</p>

            <p className="leading-5">
              Av. La Coruña y 12 de Octubre
              <br />
              Condominio General Artigas
              <br />
              Quito - Pichincha
            </p>

            <a
              href="https://maps.app.goo.gl/6eHKmesBhQrqJjp39"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline hover:text-[#222222]"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-[#6B7280] md:flex-row">
            <p>
              © {new Date().getFullYear()} Compro Oro & Relojes. Todos los
              derechos reservados.
            </p>

            <p>
              Desarrollado por{" "}
              <span className="font-medium text-[#222222]">
                Erika Bustamante - Lumicode
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20por%20mi%20oro%20%2F%20plata%20%2F%20reloj.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#222222] text-white shadow-lg transition hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
      >
        <span className="text-2xl">💬</span>
      </a>
    </main>
  );
}