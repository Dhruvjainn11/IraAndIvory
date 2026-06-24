import { motion } from 'framer-motion'

const floatingMotifs = [
  { top: '10%', left: '5%', size: 60, delay: 0 },
  { top: '20%', right: '8%', size: 40, delay: 0.5 },
  { top: '70%', left: '3%', size: 50, delay: 1 },
  { top: '75%', right: '5%', size: 70, delay: 0.8 },
  { top: '45%', left: '12%', size: 30, delay: 1.5 },
  { top: '40%', right: '12%', size: 35, delay: 0.3 },
]

const Motif = ({ style, size, delay }) => (
  <motion.div
    className="absolute opacity-20 pointer-events-none select-none"
    style={style}
    animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="12" stroke="#C7A17A" strokeWidth="1.5" />
      <path d="M30 4 C20 15 8 20 4 30 C8 40 20 45 30 56 C40 45 52 40 56 30 C52 20 40 15 30 4Z" stroke="#C7A17A" strokeWidth="1" fill="none" />
      <circle cx="30" cy="30" r="4" fill="#C7A17A" />
    </svg>
  </motion.div>
)

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: '#F8F4EF' }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2521' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`
      }} />

      {floatingMotifs.map((m, i) => (
        <Motif key={i} style={{ top: m.top, left: m.left, right: m.right, position: 'absolute' }} size={m.size} delay={m.delay} />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-heading text-[#C7A17A] text-sm mb-6 uppercase"
          style={{ letterSpacing: '0.08em', fontFamily: "'Cormorant Garamond', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ira &amp; Ivory Presents
        </motion.p>

        <motion.h1
          className="text-[#2C2521] font-light leading-none mb-6"
          style={{ fontSize: 'clamp(36px, 8vw, 96px)', letterSpacing: '0.1em', fontFamily: "'Cormorant Garamond', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          BANDHAN
        </motion.h1>

        <motion.div
          className="w-24 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #C7A17A, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        <motion.p
          className="italic text-[#6D625B] mb-4"
          style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: '0.05em', fontFamily: "'Cormorant Garamond', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          A Rakhi Collection by Ira &amp; Ivory
        </motion.p>

        <motion.p
          className="text-[#6D625B] max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          A celebration of sibling bonds, thoughtfully handcrafted into timeless rakhi designs and curated gifting experiences.
        </motion.p>

        <motion.a
          href="#signature"
          className="inline-block rounded-full text-white uppercase transition-all duration-300"
          style={{ background: '#2C2521', fontSize: 16, letterSpacing: '0.08em', padding: '18px 36px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ backgroundColor: '#B89067', scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore The Collection
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[#C7A17A] text-xs uppercase" style={{ letterSpacing: '0.08em' }}>Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, #C7A17A, transparent)' }} />
      </motion.div>
    </section>
  )
}
