"use client"

function Home() {
  return (
    <>
      <div className="py-12 bg-gradient-to-tl from-primary-700 to-black">
        <div className="page-width flex items-center justify-between overflow-hidden">
          <div className="flex flex-col z-10">
            <h2 className="text-white/75 text-2xl font-bold font-display mb-2">Hello world, I am</h2>
            <h1 className="text-white/90 text-6xl max-sm:text-5xl font-bold font-display border-0 mb-4">Aditya Kulshrestha</h1>
            <p className="text-white/90 text-lg max-w-[400px] font-light">A software engineer by trade; A filmmaker, drummer, and minimalist by passion.</p>
          </div>
          <img src="/memoji.png" alt="memoji" className="h-[360px] max-sm:-ml-12" />
        </div>
      </div>

      <div className="flex flex-col page-width py-6">
        <h3 className="text-2xl font-bold font-display mb-3 py-6 ">Recent Blog Posts</h3>
        <div className="py-4 overflow-x-scroll max-w-full flex gap-x-3">
          <div className="h-[300px] max-sm:h-[240px] bg-white/10 aspect-[1.33]"></div>
          <div className="h-[300px] max-sm:h-[240px] bg-white/10 aspect-[1.33]"></div>
          <div className="h-[300px] max-sm:h-[240px] bg-white/10 aspect-[1.33]"></div>
        </div>
      </div>

      <div className="flex flex-col page-width py-6">
        <h3 className="text-2xl font-bold font-display mb-3 py-6 ">Recent Projects</h3>
        <div className="py-4 overflow-x-scroll max-w-full flex gap-x-3">
          <div className="h-[300px] max-sm:h-[240px] bg-white/10 aspect-[1.33]"></div>
          <div className="h-[300px] max-sm:h-[240px] bg-white/10 aspect-[1.33]"></div>
          <div className="h-[300px] max-sm:h-[240px] bg-white/10 aspect-[1.33]"></div>
        </div>
      </div>

    </>
  )
}

export default Home
