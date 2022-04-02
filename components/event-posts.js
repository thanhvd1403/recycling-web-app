import PostPreview from '../components/post-preview';

export default function EventPosts({ posts }) {
  return (
    <section>
      <h2 className='mb-8 text-6xl md:text-5xl font-sans font-bold text-emerald-800 tracking-tighter leading-tight pt-12 '>
        Available events happening now
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grids-cols-4 sm:gap-x-8 gap-y-8 md:gap-x-16 lg:gap-x-6 gap-y-6 md:gap-y-12 mb-6 overflow-visible'>
        {/* <div className="flex flex-col max-w-6xl mx-auto space-y-4"> */}
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            RegURL={post.RegURL}
          />
        ))}
      </div>
    </section>
  );
}
