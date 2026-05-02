import { useState } from "react";

const INFO = [
  { icon: "📧", bg: "bg-orange-50", label: "Email", val: "support@swiggy-clone.com", sub: "Reply within 2 hours" },
  { icon: "📞", bg: "bg-green-50", label: "Phone", val: "1800-123-4567", sub: "Mon–Sun, 8am–11pm" },
  { icon: "📍", bg: "bg-blue-50", label: "Office", val: "Koramangala, Bengaluru", sub: "Karnataka, India 560034" },
];

const CHANNELS = [
  { icon: "💬", name: "Live chat", time: "Avg wait: 1 min", badge: "Fastest" },
  { icon: "📱", name: "WhatsApp", time: "+91 98765 43210", badge: "24/7" },
  { icon: "🐦", name: "Twitter / X", time: "@SwiggyClone", badge: "Public" },
  { icon: "📧", name: "Email", time: "Reply in 2 hrs", badge: "Detailed" },
];

const TOPICS = [
  "🛵 Delivery issue", "💳 Payment failed", "🍽️ Wrong order",
  "♻️ Refund request", "🏪 Restaurant issue", "💬 General query",
];

const FAQS = [
  { q: "Mera order late ho raha hai, kya karoon?", a: "App mein 'Track Order' tab mein jaao — live location milegi. Agar 15 min zyada late ho toh support chat pe aao, hum turant delivery partner se connect karte hain." },
  { q: "Payment kat gayi par order confirm nahi hua?", a: "99% cases mein 24 ghante mein auto-refund ho jaata hai. Agar nahi hua toh Payment Failed section mein apna Order ID daalo — hum manually verify karenge." },
  { q: "Galat item mila — refund milega?", a: "Bilkul! 'Wrong Order' topic select karo form mein, photo attach karo. 1-2 business days mein wallet mein refund aa jaayega." },
  { q: "Restaurant ne order accept karke cancel kar diya?", a: "Yeh kabhi kabhi peak hours mein hota hai. Aapko full refund milega aur ek free delivery coupon bhi — hum sorry bolte hain is inconvenience ke liye." },
  { q: "Delivery partner se contact nahi ho raha?", a: "App ke 'Help' section mein 'Delivery Partner Issue' choose karo. Hum immediately ek alternate partner assign karte hain ya full refund process karte hain." },
];

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-bold tracking-widest text-[#FC8019] uppercase mb-2">{children}</p>
);

const Divider = () => <div className="h-px bg-gray-100 my-6" />;

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-100 last:border-none">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center px-4 py-3.5 text-left text-[13px] font-semibold text-gray-800 hover:text-[#FC8019] transition-colors"
    >
      <span>{faq.q}</span>
      <span className={`text-gray-400 text-base transition-transform duration-200 ml-3 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}>▼</span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-3" : "max-h-0"}`}>
      <p className="text-[12px] text-gray-500 leading-relaxed px-4">{faq.a}</p>
    </div>
  </div>
);

const Contact = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", orderId: "", message: "", urgency: "high" });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="max-w-3xl mx-auto px-4 pb-16">

      {/* Hero */}
      <div className="bg-[#1C1C1C] rounded-2xl p-10 text-center relative overflow-hidden mb-6 mt-4">
        <div
          className="absolute inset-0 opacity-12"
          style={{ backgroundImage: "radial-gradient(circle, #FC8019 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#2a1a0a] border border-[#FC8019] text-[#FC8019] text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Support online · avg reply 2 min
          </div>
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-3">
            Hum yahan hain,<br />
            <span className="text-[#FC8019]">aapke liye 24/7</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
            Koi bhi problem ho — order, payment, delivery — hum seconds mein resolve karte hain.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {INFO.map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-2">
            <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center text-lg`}>{item.icon}</div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 tracking-wide uppercase mb-0.5">{item.label}</p>
              <p className="text-[13px] font-semibold text-gray-800 leading-snug">{item.val}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Channels */}
      <SectionLabel>Support channels</SectionLabel>
      <h2 className="text-xl font-extrabold text-gray-900 mb-4">Choose how you want to reach us</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {CHANNELS.map((c, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl p-4 text-center bg-white hover:border-[#FC8019] hover:bg-orange-50 transition-all cursor-pointer">
            <div className="text-2xl mb-2">{c.icon}</div>
            <p className="text-[12px] font-bold text-gray-800 mb-0.5">{c.name}</p>
            <p className="text-[11px] text-gray-400">{c.time}</p>
            <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-800">{c.badge}</span>
          </div>
        ))}
      </div>

      <Divider />

      {/* Contact Form */}
      <SectionLabel>Send a message</SectionLabel>
      <div className="bg-white border border-gray-100 rounded-2xl p-7 mb-6">
        {!submitted ? (
          <>
            <h2 className="text-[17px] font-extrabold text-gray-900 mb-1">Hume seedha likho 📝</h2>
            <p className="text-[12px] text-gray-400 mb-5">Sabse zyada detail doge, sabse fast resolve hoga.</p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-gray-500">Your name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" required
                    className="px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] bg-gray-50 outline-none focus:border-[#FC8019] transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-gray-500">Email address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rahul@email.com" required
                    className="px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] bg-gray-50 outline-none focus:border-[#FC8019] transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-gray-500">Phone number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                    className="px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] bg-gray-50 outline-none focus:border-[#FC8019] transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-gray-500">Order ID (optional)</label>
                  <input name="orderId" value={form.orderId} onChange={handleChange} placeholder="#SW123456"
                    className="px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] bg-gray-50 outline-none focus:border-[#FC8019] transition-colors" />
                </div>
              </div>

              {/* Topic selector */}
              <p className="text-[12px] font-semibold text-gray-500 mb-2">What is this about?</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {TOPICS.map((t, i) => (
                  <button key={i} type="button" onClick={() => setSelectedTopic(t)}
                    className={`py-2 px-1 border rounded-xl text-[11px] font-semibold text-center transition-all ${
                      selectedTopic === t
                        ? "border-[#FC8019] text-[#FC8019] bg-orange-50"
                        : "border-gray-200 text-gray-500 bg-gray-50 hover:border-[#FC8019] hover:text-[#FC8019] hover:bg-orange-50"
                    }`}
                  >{t}</button>
                ))}
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <label className="text-[12px] font-semibold text-gray-500">Describe your issue</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                  placeholder="Tell us what happened. More detail = faster resolution..."
                  className="px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] bg-gray-50 outline-none focus:border-[#FC8019] transition-colors resize-none leading-relaxed" />
              </div>

              <div className="flex flex-col gap-1 mb-5">
                <label className="text-[12px] font-semibold text-gray-500">How urgent is this?</label>
                <select name="urgency" value={form.urgency} onChange={handleChange}
                  className="px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] bg-gray-50 outline-none focus:border-[#FC8019] transition-colors cursor-pointer">
                  <option value="low">🟢 Low — just a question</option>
                  <option value="medium">🟡 Medium — order in progress</option>
                  <option value="high">🔴 High — need immediate help</option>
                </select>
              </div>

              <button type="submit"
                className="w-full py-3.5 bg-[#FC8019] text-white text-[14px] font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all">
                Send message → we'll reply in under 2 hrs
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
            <h2 className="text-[18px] font-extrabold text-gray-900 mb-2">Message bhej diya! 🎉</h2>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Aapka message hume mil gaya.<br />
              Hum 2 ghante ke andar reply karenge.<br /><br />
              <span className="text-[#FC8019] font-bold">Ticket ID: #SW-2024-8821</span>
            </p>
          </div>
        )}
      </div>

      {/* FAQs */}
      <SectionLabel>FAQs</SectionLabel>
      <h2 className="text-xl font-extrabold text-gray-900 mb-4">Aksar pooche jaane wale sawal</h2>
      <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
        {FAQS.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            isOpen={openFaq === i}
            onToggle={() => setOpenFaq(openFaq === i ? null : i)}
          />
        ))}
      </div>

    </div>
  );
};

export default Contact;