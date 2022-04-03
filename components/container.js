export default function Container({ children }) {
  return (
    <div className='mx-auto px-0 py-0 tablet: px-8 py-8 gap-x-4 gap-y-4 mobile: px-8 py-8 gap-x-4 gap-y-4 laptop: px-16 py-16'>
      {children}
    </div>
  );
}
