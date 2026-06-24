const navLinks = [
  { label: 'Signature Designs', href: '#signature' },
  { label: 'Collection', href: '#collection' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#2C2521', minHeight: 300 }} className="px-6 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, letterSpacing: '0.08em' }}>
              Ira &amp; Ivory
            </h3>
            <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
              Curated gifting experiences crafted with elegance and intention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-xs uppercase mb-5" style={{ letterSpacing: '0.08em', color: '#C7A17A' }}>Quick Links</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, letterSpacing: '0.04em' }}
                    onMouseEnter={e => e.target.style.color = '#C7A17A'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase mb-5" style={{ letterSpacing: '0.08em', color: '#C7A17A' }}>Follow Us</p>
            <a
              href="https://instagram.com/iraandivory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}
              onMouseEnter={e => e.target.style.color = '#C7A17A'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
            >
              @iraandivory
            </a>
          </div>
        </div>

        <div className="w-full h-px mb-8" style={{ background: 'rgba(199,161,122,0.2)' }} />

        <p className="text-center" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} Ira &amp; Ivory. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
