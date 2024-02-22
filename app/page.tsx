'use client';

export default function Home() {
  return (
    <>
      <main className='grid grid-cols-2 gap-10 p-24'>
        <div>
          <h3>WebM (Vercel host)</h3>
          <video controls>
            <source src='/FeverDream.webm' type='video/mp4' />
          </video>
        </div>
        <div className='space-y-5'>
          <div>
            <h3>Mp4 (Vercel host)</h3>
            <video controls>
              <source src='/FeverDream.mp4' type='video/mp4' />
            </video>
          </div>
          <div>
            <h3>Mp4 from Cloudfront (AWS)</h3>
            <video controls>
              <source
                src='https://d3a4ovnnqh1r5g.cloudfront.net/videos/FeverDream.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </main>
    </>
  );
}
