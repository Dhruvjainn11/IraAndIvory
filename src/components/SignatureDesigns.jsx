import { motion } from 'framer-motion'
import { FadeUp, SectionHeading } from './shared'

const designs = [
  {
    name: 'Signature - 1',
    price: '₹ 70',
    image: '/images/Signature -1.jpg',
  },
  {
    name: 'Signature - 2',
    price: '₹ 150',
    image: '/images/Signature -2.jpeg',
  },
 {
    name: 'Signature -3',
    price: '₹ 115',
    image: '/images/Signature -3.jpg',
  },
]

export default function SignatureDesigns() {
  return (
    <section id="signature" className="py-32 px-6" style={{ background: '#EFE6DA' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="Most Loved"
          title="Signature Designs"
          subtitle="Our most loved creations, thoughtfully crafted to make every Rakshabandhan unforgettable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {designs.map((d, i) => (
            <FadeUp key={d.name} delay={i * 0.15} className="w-full max-w-[380px]">
              <motion.div
                className="overflow-hidden w-full cursor-pointer"
                style={{ background: '#fff', borderRadius: 24 }}
                whileHover={{ y: -10, boxShadow: '0 28px 70px rgba(44,37,33,0.13)' }}
                transition={{ duration: 0.35 }}
              >
                <div className="overflow-hidden" style={{ height: 520, borderRadius: '20px 20px 0 0' }}>
                  <motion.img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#2C2521] font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, letterSpacing: '0.04em' }}>{d.name}</h3>
                  <p className="text-[#C7A17A] font-medium" style={{ fontSize: 16, letterSpacing: '0.04em' }}>{d.price}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
