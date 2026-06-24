import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { label: 'Designs', href: '#collection' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(248,244,239,0)', 'rgba(248,244,239,0.97)'])
  const shadow = useTransform(scrollY, [0, 80], ['0 0 0 rgba(0,0,0,0)', '0 2px 20px rgba(44,37,33,0.08)'])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16"
      style={{ background: bg, boxShadow: shadow, backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16">
        <a href="#hero" className="text-[#2C2521] font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, letterSpacing: '0.08em' }}>
          Ira &amp; Ivory
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#6D625B] text-sm transition-colors duration-200 hover:text-[#C7A17A]"
                style={{ letterSpacing: '0.06em' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
