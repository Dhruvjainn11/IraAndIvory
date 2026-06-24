import { motion } from 'framer-motion'
import { FadeUp, SectionHeading } from './shared'

const features = [
  {
    title: 'Handcrafted Designs',
    desc: 'Every rakhi is lovingly handcrafted by skilled artisans with an eye for detail.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C10 4 6 8 6 13 C6 19 16 28 16 28 C16 28 26 19 26 13 C26 8 22 4 16 4Z" stroke="#C7A17A" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="13" r="3" stroke="#C7A17A" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Premium Packaging',
    desc: 'Delivered in curated luxury boxes designed to make gifting truly unforgettable.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="12" width="20" height="16" rx="2" stroke="#C7A17A" strokeWidth="1.5" />
        <path d="M4 12 H28 V8 H4 Z" stroke="#C7A17A" strokeWidth="1.5" />
        <path d="M16 8 V28" stroke="#C7A17A" strokeWidth="1.5" />
        <path d="M16 8 C16 8 12 4 10 6 C8 8 12 10 16 8Z" stroke="#C7A17A" strokeWidth="1.2" fill="none" />
        <path d="M16 8 C16 8 20 4 22 6 C24 8 20 10 16 8Z" stroke="#C7A17A" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Curated With Love',
    desc: 'Each collection is thoughtfully curated to reflect the warmth of sibling bonds.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 26 L7 17 C4 14 4 9 8 7 C11 5 14 7 16 10 C18 7 21 5 24 7 C28 9 28 14 25 17 Z" stroke="#C7A17A" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Pan India Delivery',
    desc: 'We ship across India with care, ensuring your rakhi arrives beautifully intact.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#C7A17A" strokeWidth="1.5" />
        <path d="M5 16 Q10 10 16 16 Q22 22 27 16" stroke="#C7A17A" strokeWidth="1.5" fill="none" />
        <path d="M16 5 Q10 10 16 16 Q22 10 16 5" stroke="#C7A17A" strokeWidth="1.5" fill="none" />
        <path d="M16 5 V27 M5 16 H27" stroke="#C7A17A" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-32 px-6" style={{ background: '#EFE6DA' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading label="Our Promise" title="Why Choose Ira & Ivory" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.1} className="w-full max-w-[280px]">
              <motion.div
                className="w-full p-8 text-center flex flex-col items-center gap-4 cursor-default"
                style={{ background: '#fff', borderRadius: 24, height: 240 }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(44,37,33,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(199,161,122,0.1)' }}>
                  {f.icon}
                </div>
                <h4 className="text-[#2C2521] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, letterSpacing: '0.04em' }}>{f.title}</h4>
                <p className="text-[#6D625B] leading-relaxed" style={{ fontSize: 13 }}>{f.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
