import { Phone, MapPin, Scissors } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-rose-500 text-white">
              <Scissors className="h-5 w-5" />
            </div>
            <span className="font-semibold text-neutral-900 tracking-tight">
              L'Élégance d'Abidjan
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-neutral-700 hover:text-rose-600 transition-colors">Services</a>
            <a href="#galerie" className="text-neutral-700 hover:text-rose-600 transition-colors">Galerie</a>
            <a href="#contact" className="text-neutral-700 hover:text-rose-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-neutral-700">
              <MapPin className="h-4 w-4 text-rose-600" />
              <span className="text-sm">Cocody, Abidjan</span>
            </div>
            <a
              href="tel:+2250700000000"
              className="inline-flex items-center gap-2 rounded-md bg-rose-600 text-white px-3 py-2 text-sm font-medium hover:bg-rose-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Réserver
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
