import hero from "../assets/hero.jpg";

export default function Home() {
  const services = [
    {
      title: "Personalized University Selection",
      intro:
        "We create a focused U.S. school list that reflects your academic profile, goals, and financial plan.",
      bullets: [
        "One on one profile review",
        "Guidance on program and faculty alignment",
        "Budget fit shortlists with funding potential",
        "Advice on city, lifestyle, and internship ecosystems",
        "Application timeline planning"
      ]
    },
    {
      title: "Scholarship and Financial Aid",
      intro:
        "Funding strategy is integrated early. We help you find and apply for scholarships, assistantships, and aid.",
      bullets: [
        "Identify merit and need based scholarships",
        "Plan for RA and TA assistantship opportunities",
        "Refine essays and statements for funding",
        "Budgeting and tuition payment strategies"
      ]
    },
    {
      title: "Application and Visa Guidance",
      intro:
        "Your application and visa materials are polished, consistent, and interview ready.",
      bullets: [
        "SOP, LOR, and resume feedback",
        "Step by step application portal walkthroughs",
        "Visa document checklists and organization",
        "Mock visa interviews and practice Q and A"
      ]
    },
    {
      title: "U.S. Travel Assistance",
      intro:
        "Smooth arrival with practical, real world travel and settlement advice.",
      bullets: [
        "Flight, baggage, and electronics packing tips",
        "Arrival and housing support",
        "Banking, SIM, and essential services setup",
        "Do’s and don’ts for your first month"
      ]
    }
  ];

  const faqs = [
    {
      q: "When should I start my U.S. application prep?",
      a: "Start 9 to 12 months before intake. Early preparation unlocks a wider program range, priority review windows, and better scholarship positioning. It also reduces last minute document stress."
    },
    {
      q: "Do I need GRE or GMAT?",
      a: "Many programs are test optional. A strong score can still help for competitive programs, funding consideration, or when your GPA needs additional evidence of readiness. We decide case by case."
    },
    {
      q: "What documents are must haves for the visa interview?",
      a: "Your I 20, SEVIS fee receipt, DS 160 confirmation, appointment confirmation, financials, and academic transcripts. We also ensure your narrative is consistent: why program, why now, how funded."
    },
    {
      q: "Can I work during studies?",
      a: "Typically up to around 20 hours per week on campus. Off campus authorizations like CPT or OPT depend on program rules and employer compliance. We help you plan timelines to stay eligible and employable."
    },
    {
      q: "How do I maximize scholarships?",
      a: "Target universities with a documented funding history for your profile, build a focused academic story, apply early, and keep documents consistent and well structured."
    }
  ];

  return (
    <div className="home">
      {/* HERO: full bleed, slightly taller, no buttons */}
      <div className="hero hero--compact">
        <img src={hero} alt="Students on campus" />
        <div className="overlay overlay--bottom-left">
          <span className="eyebrow eyebrow--light">Study in the United States</span>
          <h1>Clear, end to end guidance for your university journey</h1>
          <p>From shortlisting to visas and travel, built around your outcomes.</p>
        </div>
      </div>

      {/* ABOUT + MISSION */}
      <section id="about" className="page widest section center">
        <h2 className="xxl">About Us and Mission</h2>
        <p className="lead lead-big">
          We turn ambition into a step by step plan, reducing decision fatigue and accelerating real progress.
        </p>

        <div className="spacer tall" />

        <h3 className="xl">Open doors. Remove friction. Accelerate progress.</h3>
        <p className="jumbo">
          UniPath Consulting helps students navigate U.S. higher education with clarity and confidence. We align your
          background and constraints with the right programs, build a funding strategy early, and guide your application
          and visa process with structured, consistent storytelling. The goal is simple: remove guesswork, reduce stress,
          and help you land where you will thrive.
        </p>
        <p className="jumbo">
          Every plan is personal. We focus on practicality, deadlines, documents, interviews, and the realities of moving
          countries, so you arrive prepared and ready to succeed from day one.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="page widest section center">
        <h2 className="xxl">Services for Studying in the U.S.</h2>
        <p className="lead lead-big">Comprehensive, outcome driven support, end to end.</p>
        <div className="spacer tall" />

        {services.map((s) => (
          <section key={s.title} className="service-block">
            <h3 className="xl">{s.title}</h3>
            <p className="jumbo">{s.intro}</p>
            <ul className="guidance-list">
              {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </section>
        ))}
      </section>

      {/* FAQs */}
      <section id="faqs" className="page widest section center">
        <h2 className="xxl">FAQs — Studying in the United States</h2>
        <div className="spacer tall" />
        <ul className="faq-list faq-list--wide center">
          {faqs.map((f, idx) => (
            <li key={idx} className="faq-item">
              <details>
                <summary>{f.q}</summary>
                <p className="bigtext">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
