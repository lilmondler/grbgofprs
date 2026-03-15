import Link from 'next/link'

const years = ['2023', '2024', '2025', '2026']

export default function Gallery() {
  return (
    <div>
      <h1 className="pixel-font">Gallery</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {years.map(year => (
          <Link href={`/gallery/${year}`} key={year}>
            <div>
              <img src="/bin-icon.png" alt={year} />  {/* твоя иконка мусорки */}
              <p className="pixel-font">{year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
