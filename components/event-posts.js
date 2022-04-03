import PostPreview from '../components/post-preview';

export default function EventPosts({ posts }) {
  return (
    <section>
      <h2 className='mb-8 text-6xl text-center md:text-5xl font-sans font-bold text-emerald-800 tracking-tighter leading-tight pt-12 '>
        Available events happening now
      </h2>
      <div className='grid grid-cols-1 tablet:grid-cols-2 mx-0 gap-0 laptop:grid-cols-3 laptop:gap-6 laptop:mb-6 overflow-visible'>
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
