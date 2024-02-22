'use client';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen items-center justify-between p-24 space-x-10'>
        <div>
          <h3>Load internally (Vercel)</h3>
          <video controls>
            <source src='/FeverDream.mp4' type='video/mp4' />
          </video>
        </div>

        <div>
          <h3>Load from Cloudfront (AWS)</h3>
          <video controls>
            <source
              src='https://d3a4ovnnqh1r5g.cloudfront.net/videos/FeverDream.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </main>
    </>
  );
}
