export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-white flex flex-col">
      
      {/* NAVBAR */}
      <nav className="bg-white text-slate-900 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-xl">
              ✝️
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Grace & More
              </h1>
              <p className="text-xs text-slate-500 -mt-1">MINISTRY</p>
            </div>
          </div>

          {/* Tag */}
          <div className="hidden md:flex items-center gap-2 text-sm bg-slate-100 px-4 py-1 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Seventh-day Adventist
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center text-center px-6 py-16">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Website Under Construction
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Grace And More Ministry
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-6">
            Proclaiming the everlasting gospel of God’s saving grace
          </p>

          {/* Core Value */}
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            A Christ-centered digital platform dedicated to sharing sermons,
            devotionals, and Bible-based teachings that inspire faith, restore
            hope, and prepare hearts for the coming of Jesus Christ.
          </p>

          {/* Card */}
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              A Platform in Preparation
            </h2>

            <p className="text-white/85 mb-4">
              We are prayerfully building a space where you will soon be able to
              access:
            </p>

            <ul className="text-white/80 space-y-2 mb-6">
              <li>• Spirit-filled sermons</li>
              <li>• Daily devotionals</li>
              <li>• Biblical teachings & insights</li>
              <li>• Messages of hope for a weary world</li>
            </ul>

            <p className="text-amber-300 italic">
              “The Lord is not slow in keeping His promise... He is patient with you.”
            </p>
            <p className="text-white/60 text-sm">— 2 Peter 3:9</p>
          </div>

          {/* Verse */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="italic text-lg mb-4">
              “For by grace you have been saved through faith… it is the gift of God.”
            </p>
            <p className="text-white/60 text-sm">— Ephesians 2:8</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-slate-600 py-10 text-center px-6">
        <p className="mb-3 font-medium">
          Grace And More Ministry
        </p>

        <p className="text-sm max-w-md mx-auto mb-6">
          A ministry committed to proclaiming God’s saving grace and giving hope
          to the hopeless through the everlasting gospel.
        </p>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Grace And More Ministry. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
