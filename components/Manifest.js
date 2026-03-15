import { useState } from 'react'

export default function Manifest() {
  const [openRU, setOpenRU] = useState(false)
  const [openFR, setOpenFR] = useState(false)

  return (
    <section>
      {/* Русская версия */}
      <div>
        <p>{openRU ? 'Полный текст манифеста...' : 'Короткий превью...'}</p>
        <button onClick={() => setOpenRU(!openRU)}>
          {openRU ? 'Свернуть' : 'Читать далее'}
        </button>
      </div>

      {/* Французская версия */}
      <div>
        <p>{openFR ? 'Texte complet...' : 'Aperçu court...'}</p>
        <button onClick={() => setOpenFR(!openFR)}>
          {openFR ? 'Réduire' : 'Lire la suite'}
        </button>
      </div>
    </section>
  )
}
