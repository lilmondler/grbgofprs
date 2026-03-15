import { useRouter } from 'next/router'
import { useState } from 'react'
import photosData from '../../data/photos.json'

export default function YearGallery() {
  const router = useRouter()
  const { year } = router.query
  const photos = photosData[year] || []
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <h1 className="pixel-font">{year}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {photos.map((photo, i) => (
          <img
            key={i}
            src={`/gallery/${year}/${photo.file}`}
            onClick={() => setSelected(photo)}
            style={{ cursor: 'pointer', width: '100%' }}
          />
        ))}
      </div>

      {/* Лайтбокс */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}>
          <p className="pixel-font" style={{ color: 'white', marginBottom: '1rem' }}>
            {selected.date} — {selected.location}
          </p>
          <img src={`/gallery/${year}/${selected.file}`} style={{ maxHeight: '80vh', maxWidth: '90vw' }} />
        </div>
      )}
    </div>
  )
}
