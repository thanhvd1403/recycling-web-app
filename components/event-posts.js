import PostPreview from '../components/post-preview'

export default function EventPosts({ posts }) {
  return (
    <section >
      <h2 className="mb-8 text-6xl md:text-5xl font-sans font-bold text-emerald-800 tracking-tighter leading-tight pt-12 ">
        Available events happening now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-6 gap-y-6 md:gap-y-12 mb-6 overflow-visible">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
