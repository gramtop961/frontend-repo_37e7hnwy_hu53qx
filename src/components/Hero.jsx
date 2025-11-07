import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_40%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm border px-3 py-1 text-xs font-medium text-neutral-600">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Salon de coiffure premium à Abidjan
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Révélez votre style avec une touche ivoirienne
            </h1>
            <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
              Coiffures modernes, tresses traditionnelles, soins capillaires et barbering. Une équipe passionnée au service de votre élégance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-5 py-3 text-sm font-semibold hover:bg-rose-700 transition-colors">
                Prendre rendez-vous
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50">
                Découvrir nos services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
              <div>
                <span className="font-semibold text-neutral-800">4.9/5</span> sur 350+ avis
              </div>
              <div className="hidden sm:block">•</div>
              <div className="hidden sm:block">Ouvert du mardi au dimanche</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border bg-white">
              <img
                src="https://images.unsplash.com/photo-1593702238871-cf3f4dad4758?q=80&w=2069&auto=format&fit=crop"
                alt="Salon de coiffure à Abidjan"
                className="h-full w-full object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
