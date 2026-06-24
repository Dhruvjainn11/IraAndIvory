import { FadeUp, SectionHeading } from './shared'

const steps = [
  { num: '01', title: 'Browse The Collection', desc: 'Explore our curated Bandhan collection and find your perfect rakhi.' },
  { num: '02', title: 'Screenshot Your Favourite', desc: 'Save the rakhi design that speaks to your heart.' },
  { num: '03', title: 'DM or WhatsApp Us', desc: 'Send us your screenshot on Instagram or WhatsApp.' },
  { num: '04', title: "We'll Confirm & Ship", desc: "We confirm your order and deliver it with love across India." },
]

export default function OrderingProcess() {
  return (
    <section id="order" className="py-32 px-6" style={{ background: '#F8F4EF' }}>
      <div className="max-w-[900px] mx-auto text-center">
        <SectionHeading
          label="How To Order"
          title="Ready to Celebrate Rakshabandhan With Us?"
          subtitle="Choose your favourite rakhi and let us make your celebration extra special."
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(199,161,122,0.5), rgba(199,161,122,0.5), transparent)' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                    style={{ border: '1.5px solid #C7A17A', background: '#F8F4EF' }}
                  >
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#C7A17A', letterSpacing: '0.05em' }}>{s.num}</span>
                  </div>
                  <h4 className="text-[#2C2521] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, letterSpacing: '0.04em' }}>{s.title}</h4>
                  <p className="text-[#6D625B] leading-relaxed" style={{ fontSize: 14 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
