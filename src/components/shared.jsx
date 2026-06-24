import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      {label && (
        <FadeUp>
          <p className="text-[#C7A17A] text-xs uppercase mb-3" style={{ letterSpacing: '0.08em', fontFamily: "'Cormorant Garamond', serif" }}>{label}</p>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2 className="text-[#2C2521] font-light mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.06em' }}>{title}</h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="w-16 h-px mx-auto mb-5" style={{ background: 'linear-gradient(90deg, transparent, #C7A17A, transparent)' }} />
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.3}>
          <p className="text-[#6D625B] max-w-lg mx-auto leading-relaxed" style={{ fontSize: 'clamp(15px, 1.3vw, 18px)' }}>{subtitle}</p>
        </FadeUp>
      )}
    </div>
  )
}

export function RakhiCard({ name, price, image, width = 280, imageHeight = 420 }) {
  return (
    <motion.div
      className="flex-shrink-0 overflow-hidden cursor-pointer"
      style={{ width, background: '#fff', borderRadius: 24 }}
      whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(44,37,33,0.12)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="overflow-hidden" style={{ height: imageHeight, borderRadius: '20px 20px 0 0' }}>
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-[#2C2521] font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, letterSpacing: '0.04em' }}>{name}</h3>
        <p className="text-[#C7A17A]" style={{ fontSize: 15, letterSpacing: '0.04em' }}>{price}</p>
      </div>
    </motion.div>
  )
}

export function Divider() {
  return <div className="w-full h-px my-16" style={{ background: 'rgba(199,161,122,0.3)' }} />
}
