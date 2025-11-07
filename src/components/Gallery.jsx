export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622290291135-7d368b89b956?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section id="galerie" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Galerie</h2>
          <p className="mt-3 text-neutral-600">Quelques réalisations récentes – coupes, tresses et styles tendance.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl border bg-white">
              <img src={src} alt="Coiffure" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
