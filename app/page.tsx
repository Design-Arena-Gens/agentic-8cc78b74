const highlights = [
  {
    title: "Signature Style",
    description:
      "Meticulous color grading, evocative motion graphics, and orchestral sound design merge to immerse audiences in every frame.",
  },
  {
    title: "Story Architecture",
    description:
      "We sculpt introductions that unfold like cinema—hooking with intrigue, building tension, and resolving with a memorable brand crescendo.",
  },
  {
    title: "Global Collaborations",
    description:
      "Trusted by visionaries across tech, luxury, education, and entertainment to translate identity into moving visuals.",
  },
];

const timeline = [
  {
    step: "Discovery",
    copy:
      "Curate the brand universe through interviews, references, and narrative workshops that align on voice and emotion.",
  },
  {
    step: "Concept Lab",
    copy:
      "Build fleshed-out concept treatments, motion boards, and sonic palettes that map the introduction arc beat-by-beat.",
  },
  {
    step: "Production",
    copy:
      "Capture cinematic footage, studio interviews, and bespoke foley while orchestrating lighting, choreography, and ambience.",
  },
  {
    step: "Final Cut",
    copy:
      "Precision edit with layered graphics, immersive audio, and final mastering to deliver a launch-ready introduction film.",
  },
];

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Countries Featured", value: "18" },
  { label: "Average Turnaround", value: "21 days" },
  { label: "Client Satisfaction", value: "4.9/5" },
];

export default function Page() {
  return (
    <main>
      <section className="section hero">
        <span className="hero__eyebrow">Amruthsai Studio</span>
        <h1 className="hero__title">
          Cinematic introductions that launch brands into unforgettable first impressions.
        </h1>
        <p className="hero__subtitle">
          We are a boutique film collective crafting high-impact introduction videos for founders, creators, and companies ready to command attention. Each frame is engineered with narrative intention, elevating brand stories into immersive experiences.
        </p>
        <div className="hero__cta">
          <a
            className="button button--primary"
            href="https://calendly.com/amruthsai-studio/intro"
            target="_blank"
            rel="noreferrer"
          >
            Book a creative session
          </a>
          <a className="button button--secondary" href="#showcase">
            Watch the introduction
          </a>
        </div>
      </section>

      <section id="showcase" className="section video-grid">
        <div className="cta-highlight">2024 Signature Introduction</div>
        <div className="video-player">
          <iframe
            src="https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&showinfo=0&color=white"
            title="Amruthsai Studio Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-details">
          <h2 className="video-title">Introducing Amruthsai Studio</h2>
          <p className="video-description">
            Step into our world of evocative storytelling. This introduction film bridges documentary intimacy with cinematic spectacle—showcasing our hybrid production workflow, signature lighting blueprints, and emotive scorecraft.
          </p>
          <div className="video-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span>{stat.label}</span>
                <span>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mosaic">
        {highlights.map((item) => (
          <article key={item.title} className="tile">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="section timeline">
        <div className="cta-highlight">Our Filmmaking Flow</div>
        {timeline.map((item) => (
          <article key={item.step} className="timeline-step">
            <h4>{item.step}</h4>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="section footer">
        <p>
          Ready to engineer your next unforgettable first impression? Reach us at
          <a href="mailto:hello@amruthsaistudio.com"> hello@amruthsaistudio.com</a> or dial +91 99887 00123.
        </p>
        <p>
          Studio locations in Hyderabad · Bangalore · Remote productions worldwide.
        </p>
      </section>
    </main>
  );
}
