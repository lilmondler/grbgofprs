import postsData from '../../data/posts.json'
import Link from 'next/link'

export default function Posts() {
  return (
    <div>
      <h1 className="pixel-font">Posts</h1>
      {postsData.map(post => (
        <article key={post.slug} style={{ borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
          <p className="pixel-font" style={{ fontSize: '0.6rem' }}>{post.date}</p>
          <h2>{post.title}</h2>
          <p>{post.preview}</p>
          <Link href={`/posts/${post.slug}`}>Lire →</Link>
        </article>
      ))}
    </div>
  )
}
