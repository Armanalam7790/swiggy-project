const STATS = [
  { num: "500+", label: "Restaurants" },
  { num: "50K+", label: "Happy orders" },
  { num: "30 min", label: "Avg delivery" },
  { num: "4.8★", label: "App rating" },
];

const MISSIONS = [
  { icon: "🚀", bg: "bg-orange-50", title: "Fast delivery", desc: "Real-time tracking and optimised routes for deliveries under 30 minutes." },
  { icon: "🥗", bg: "bg-green-50", title: "Fresh food", desc: "Partner restaurants with quality checks and hygiene ratings you can trust." },
  { icon: "💳", bg: "bg-blue-50", title: "Easy payments", desc: "UPI, cards, wallets, COD — pay however you want, no friction." },
  { icon: "🤝", bg: "bg-purple-50", title: "Fair for all", desc: "We support local restaurants and ensure fair pay for every delivery partner." },
];

const TIMELINE = [
  { year: "Jan '24", title: "The idea.", desc: "Three developers, one hackathon, zero sleep. We cloned Swiggy's UI in 48 hours as a learning project." },
  { year: "Mar '24", title: "Redux added.", desc: "State management was a mess. We rewrote the cart logic with Redux Toolkit — finally it made sense." },
  { year: "Jun '24", title: "Tailwind overhaul.", desc: "Replaced all custom CSS with Tailwind. The codebase shrank by 40%. Design got 10x better." },
  { year: "Now", title: "Open source.", desc: "200+ GitHub stars. People are using it to learn full-stack React. That's the best reward." },
];

const TEAM = [
  { initials: "AK", name: "Arjun Kumar", role: "Founder & Lead Dev", tag: "React wizard", color: "bg-[#FC8019]" },
  { initials: "PS", name: "Priya Sharma", role: "UI/UX Designer", tag: "Tailwind pro", color: "bg-[#1D9E75]" },
  { initials: "RV", name: "Rahul Verma", role: "Backend & API", tag: "Node guru", color: "bg-[#378ADD]" },
  { initials: "SM", name: "Sneha Mehta", role: "Redux & State", tag: "Redux queen", color: "bg-[#7F77DD]" },
];

const VALUES = [
  { num: "01", title: "Speed first", desc: "Every millisecond matters — for the app and the delivery." },
  { num: "02", title: "Open code", desc: "We share what we learn. Knowledge grows when it's shared." },
  { num: "03", title: "User love", desc: "If a 60-year-old can order in under a minute, we've won." },
  { num: "04", title: "Keep building", desc: "Ship, learn, improve. Never stop at \"good enough\"." },
];

const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold tracking-widest text-[#FC8019] uppercase mb-2">{children}</p>
);

const Divider = () => <div className="h-px bg-gray-100 my-8" />;

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pb-16">

      {/* Hero */}
      <div className="bg-[#1C1C1C] rounded-2xl p-10 text-center relative overflow-hidden mb-8 mt-4">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, #FC8019 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#2a1a0a] border border-[#FC8019] text-[#FC8019] text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FC8019] animate-pulse" />
            Est. 2024
          </div>
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-3">
            Khana jo aaye<br />
            <span className="text-[#FC8019]">ghar tak, seedha</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
            A food delivery app built with love, React, Redux, and Tailwind CSS — bringing your favourite restaurants closer to your doorstep.
          </p>
          <div className="flex justify-center divide-x divide-gray-700">
            {STATS.map((s, i) => (
              <div key={i} className="px-6 text-center">
                <div className="text-2xl font-extrabold text-[#FC8019]">{s.num}</div>
                <div className="text-[11px] text-gray-500 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <SectionLabel>What we do</SectionLabel>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Our mission, in 4 words</h2>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        We connect hungry people with great food. That's it. Everything else — the tech, the logistics, the design — exists to serve that one goal.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-3xl">
        {MISSIONS.map((m, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl p-4 border  border-gray-100">
            <div className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center text-xl mb-3`}>
              {m.icon}
            </div>
            <p className="text-[20px] font-bold text-gray-800 mb-1">{m.title}</p>
            <p className="text-[14px] text-gray-500 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <Divider />

      

     

      <Divider />

      {/* Values */}
      <SectionLabel>What we believe</SectionLabel>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Our values</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {VALUES.map((v, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl p-4 flex gap-3 items-start bg-white">
            <span className="text-2xl font-extrabold text-[#FC8019] leading-none">{v.num}</span>
            <div>
              <p className="text-[13px] font-bold text-gray-800 mb-1">{v.title}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#FC8019] rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-2">Bhookh lagi hai? 🍛</h2>
        <p className="text-sm text-orange-100 leading-relaxed mb-6">
          500+ restaurants. 30-minute delivery. Free on your first 3 orders.<br />
          Order now and taste the difference.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-white text-[#FC8019] text-sm font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
            Browse restaurants →
          </button>
          <button className="border-2 border-white/50 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:border-white transition-colors">
            Join as partner
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;