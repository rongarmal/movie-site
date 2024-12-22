function About() {
  return (
    <div class="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen">
      <div className="text-center pt-60">
        <h2 className="text-8xl font-bold text-white">a little background <span className="text-stone-600">of our website</span></h2>
        <p className="text-white"></p>
      </div>
      <div className="pt-5 text-center">
        <a href="#" class="bg-stone-600 rounded-3xl text-white font-semibold py-2 px-4 hover:bg-stone-900">Read More</a>
      </div>
      <div class="flex items-center justify-center h-32 space-x-8">
      <a href="https://fb.com" class="flex items-center space-x-2 hover:opacity-80 transition">
      <img src="/images/fb.png" alt="Logo 1" class="w-8 h-8"/>
      <span class="text-lg font-semibold text-white">MoviesHub</span>
      </a>
      <a href="https://instagram.com" class="flex items-center space-x-2 hover:opacity-80 transition">
      <img src="/images/ig.png" alt="Logo 2" class="w-8 h-8"/>
      <span class="text-lg font-semibold text-white">movies_Hub</span>
      </a>
      <a href="https://x.com" class="flex items-center space-x-2 hover:opacity-80 transition">
      <img src="/images/x.png" alt="Logo 3" class="w-8 h-8"/>
      <span class="text-lg font-semibold text-white">@MoviesH</span>
      </a>
      </div>
    </div>
  )
}

export default About