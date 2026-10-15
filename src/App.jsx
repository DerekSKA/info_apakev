import "./App.css";

const principles = [
  {
    number: "01",
    name: "Confidencialidad",
    subtitle: "Solo accede quien tiene autorización",
    color: "blue",
    icon: "lock",
    definition:
      "Garantiza que la información solo sea accesible para las personas, sistemas o entidades autorizadas.",
    example:
      "Tu cuenta bancaria muestra tus movimientos únicamente después de verificar tu identidad.",
    measures: [
      "Usar contraseñas seguras y únicas.",
      "Activar la autenticación multifactor.",
      "Cifrar los datos sensibles.",
      "Limitar los permisos de acceso.",
    ],
  },
  {
    number: "02",
    name: "Integridad",
    subtitle: "La información debe mantenerse correcta",
    color: "green",
    icon: "check",
    definition:
      "Protege la exactitud y la integridad de los datos, evitando modificaciones o eliminaciones no autorizadas.",
    example:
      "La nota registrada en una plataforma educativa no debe cambiar sin una modificación legítima.",
    measures: [
      "Controlar quién puede editar los datos.",
      "Mantener registros de los cambios.",
      "Usar hashes para detectar alteraciones.",
      "Realizar copias de seguridad.",
    ],
  },
  {
    number: "03",
    name: "Disponibilidad",
    subtitle: "La información debe estar accesible",
    color: "amber",
    icon: "server",
    definition:
      "Busca que los sistemas, servicios y datos estén disponibles para los usuarios autorizados cuando los necesiten.",
    example:
      "Puedes consultar tus archivos en la nube cuando los necesitas para estudiar o trabajar.",
    measures: [
      "Mantener sistemas y equipos actualizados.",
      "Crear copias de seguridad.",
      "Preparar planes de recuperación.",
      "Supervisar fallos y posibles ataques.",
    ],
  },
];

const symbols = {
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v3" />
    </>
  ),
  check: (
    <>
      <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.8" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
    </>
  ),
};

function Icon({ name, size = 28 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {symbols[name]}
    </svg>
  );
}

function PrincipleCard({ principle }) {
  return (
    <article className={`principle-card ${principle.color}`}>
      <div className="principle-top">
        <div className="principle-icon">
          <Icon name={principle.icon} size={30} />
        </div>
        <span className="principle-number">{principle.number}</span>
      </div>

      <h3>{principle.name}</h3>
      <p className="principle-subtitle">{principle.subtitle}</p>
      <div className="card-divider" />

      <h4>¿Qué significa?</h4>
      <p>{principle.definition}</p>

      <div className="example-box">
        <strong>Ejemplo cotidiano</strong>
        <p>{principle.example}</p>
      </div>

      <h4>¿Cómo se protege?</h4>
      <ul className="measure-list">
        {principle.measures.map((measure) => (
          <li key={measure}>{measure}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-icon">
            <Icon name="lock" size={21} />
          </span>
          <span>INFO<span className="brand-light">SEC</span></span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#principios">Los principios</a>
          <a href="#ejemplo">Caso práctico</a>
          <a href="#conclusion">Conclusión</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">
              FUNDAMENTOS DE CIBERSEGURIDAD
            </span>

            <h1>
              La tríada de la
              <br />
              <span>seguridad informática</span>
            </h1>

            <p className="hero-description">
              ¿Cómo protegemos la información digital?
              Conoce los tres principios esenciales que ayudan
              a mantener nuestros datos seguros, correctos
              y accesibles.
            </p>

            <a className="primary-link" href="#principios">
              Explorar los principios <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-visual" aria-label="Tres principios conectados">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />

            <div className="hero-center">
              <Icon name="check" size={43} />
              <strong>Seguridad</strong>
              <span>de la información</span>
            </div>

            <div className="orbit-node node-blue">
              <Icon name="lock" size={24} />
              <span>Confidencialidad</span>
            </div>
            <div className="orbit-node node-green">
              <Icon name="check" size={24} />
              <span>Integridad</span>
            </div>
            <div className="orbit-node node-amber">
              <Icon name="server" size={24} />
              <span>Disponibilidad</span>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <span className="section-kicker">CONCEPTO FUNDAMENTAL</span>
          <h2>¿Qué es la tríada CIA?</h2>
          <p>
            Es un modelo de referencia de la seguridad de la información.
            Sus siglas provienen de los términos en inglés
            <em> Confidentiality, Integrity y Availability</em>.
            Estos tres objetivos permiten comprender qué debemos proteger
            al utilizar sistemas digitales.
          </p>
        </section>

        <section className="principles-section" id="principios">
          <div className="section-heading">
            <div>
              <span className="section-kicker">LOS TRES PILARES</span>
              <h2>Tres principios, un objetivo</h2>
            </div>
            <p>
              Cada principio cumple una función distinta y los tres
              se complementan para proteger la información.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <PrincipleCard
                key={principle.number}
                principle={principle}
              />
            ))}
          </div>
        </section>

        <section className="scenario-section" id="ejemplo">
          <div className="scenario-heading">
            <span className="section-kicker">EN LA VIDA REAL</span>
            <h2>Un ejemplo: tu cuenta bancaria</h2>
            <p>
              Imagina que utilizas una aplicación para administrar tu dinero.
              Los tres principios intervienen de la siguiente manera:
            </p>
          </div>

          <div className="scenario-list">
            {principles.map((principle) => (
              <div
                className={`scenario-row ${principle.color}`}
                key={principle.number}
              >
                <div className="scenario-icon">
                  <Icon name={principle.icon} size={25} />
                </div>
                <div>
                  <h3>{principle.name}</h3>
                  <p>
                    {principle.color === "blue" &&
                      "Solo tú y las personas autorizadas pueden consultar tus datos."}
                    {principle.color === "green" &&
                      "Los saldos y movimientos deben ser exactos y no alterarse sin autorización."}
                    {principle.color === "amber" &&
                      "La aplicación debe funcionar cuando necesites consultar o realizar operaciones."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="scenario-note">
            <Icon name="check" size={22} />
            <p>
              <strong>La idea clave:</strong> proteger una cuenta no consiste
              solo en ocultar los datos. También hay que conservar su
              exactitud y permitir el acceso legítimo cuando se necesite.
            </p>
          </div>
        </section>

        <section className="conclusion-section" id="conclusion">
          <span className="section-kicker">PARA RECORDAR</span>
          <h2>La seguridad necesita equilibrio</h2>
          <p>
            La confidencialidad limita el acceso, la integridad protege
            la exactitud y la disponibilidad permite utilizar la información
            cuando corresponde. Ninguno de estos principios sustituye
            a los otros: juntos ofrecen una visión integral de la protección
            de la información.
          </p>
          <div className="memory-line">
            <span>Confidencialidad</span>
            <span className="memory-dot">•</span>
            <span>Integridad</span>
            <span className="memory-dot">•</span>
            <span>Disponibilidad</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-icon">
            <Icon name="lock" size={19} />
          </span>
          <span>INFO<span className="brand-light">SEC</span></span>
        </a>
        <p>Infografía educativa sobre seguridad informática.</p>
        <a href="#inicio">Volver al inicio ↑</a>
      </footer>
    </>
  );
}

export default App;