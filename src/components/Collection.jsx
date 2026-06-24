import { FadeUp, SectionHeading, RakhiCard, Divider } from './shared'

const categories = [
  {
    name: 'The Classics',
    desc: 'Statement rakhis crafted for the bond that shines the brightest.',
    items: [
      { name: 'The Classics - 1', price: '₹ 70', image: '/images/The Classics - 1.jpg' },
      { name: 'The Classics - 2', price: '₹ 100', image: '/images/The Classics - 2.jpg' },
      { name: 'The Classics - 3', price: '₹ 60', image: '/images/The Classics - 3.jpg' },
      { name: 'The Classics - 4', price: '₹ 65', image: '/images/The Classics - 4.jpg' },
      { name: 'The Classics - 5', price: '₹ 140', image: '/images/The Classics - 5.jpg' },
    ],
  },
  {
    name: 'Little charms',
    desc: 'Rooted in tradition, woven with timeless artistry.',
    items: [
      { name: 'Little charms - 1', price: '₹ 35', image: '/images/Little charms - 1.jpg' },
      { name: 'Little charms - 2', price: '₹ 45', image: '/images/Little charms - 2.jpg' },
      { name: 'Little charms - 3', price: '₹ 35', image: '/images/Little charms - 3.jpg' },
      { name: 'Little charms - 4', price: '₹ 75', image: '/images/Little charms - 4.jpg' },
      { name: 'Little charms - 5', price: '₹ 80', image: '/images/Little charms - 5.jpg' },
    ],
  },
  {
    name: 'Timeless Traditions',
    desc: 'For sisters and brothers whose bond is written in the stars.',
    items: [
      { name: 'Timeless Traditions - 1', price: '₹ 90', image: '/images/Timeless Traditions - 1.jpg' },
      { name: 'Timeless Traditions - 2', price: '₹ 80', image: '/images/Timeless Traditions - 2.jpg' },
      { name: 'Timeless Traditions - 3', price: '₹ 80', image: '/images/Timeless Traditions - 3.jpg' },
      { name: 'Timeless Traditions - 4', price: '₹ 60', image: '/images/Timeless Traditions - 4.jpg' },
      { name: 'Timeless Traditions - 5', price: '₹ 90', image: '/images/Timeless Traditions - 5.jpg' },
    ],
  },
  {
    name: 'For Bhaiya And Bhabhi',
    desc: 'Delicate florals and handpicked elements for the gentle soul.',
    items: [
      { name: 'Bhaiya and Bhabhi -1', price: '₹ 150', image: '/images/Bhaiya and Bhabhi -1.jpg' },
      { name: 'Bhaiya and Bhabhi - 2', price: '₹ 200', image: '/images/Bhaiya and Bhabhi - 2.jpg' },
      { name: 'Bhaiya and Bhabhi - 3', price: '₹ 200', image: '/images/Bhaiya and Bhabhi - 3.jpg' },
      { name: 'Bhaiya and Bhabhi - 4', price: '₹ 180', image: '/images/Bhaiya and Bhabhi - 4.jpg' },
      { name: 'Bhaiya and Bhabhi - 5', price: '₹ 250', image: '/images/Bhaiya and Bhabhi - 5.jpg' },
      { name: 'Bhaiya and Bhabhi - 6', price: '₹ 180', image: '/images/Bhaiya and Bhabhi - 6.jpg' },
      { name: 'Bhaiya and Bhabhi - 7', price: '₹ 120', image: '/images/Bhaiya and Bhabhi - 7.jpg' },
    ],
  },
 
]

export default function Collection() {
  return (
    <section id="collection" className="py-32 px-6" style={{ background: '#F8F4EF' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="The Collection"
          title="The Collection"
          subtitle="Explore handcrafted rakhi designs curated for every bond and every celebration."
        />

        {categories.map((cat, ci) => (
          <div key={cat.name}>
            {ci > 0 && <Divider />}
            <FadeUp delay={0.1}>
              <div className="mb-8">
                <h3 className="text-[#2C2521] font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '0.06em' }}>{cat.name}</h3>
                <p className="text-[#6D625B]" style={{ fontSize: 15 }}>{cat.desc}</p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.items.map((item, ii) => (
                <FadeUp key={item.name} delay={ii * 0.08}>
                  <RakhiCard {...item} width="100%" imageHeight={420} />
                </FadeUp>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
