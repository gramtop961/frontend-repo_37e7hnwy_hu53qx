import { Phone, MapPin, Clock, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Contact & horaires</h2>
            <p className="mt-3 text-neutral-600">Passez au salon ou appelez-nous pour réserver votre créneau.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-600 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">Cocody Angré, 8ème Tranche</p>
                  <p className="text-sm text-neutral-600">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-rose-600 mt-0.5" />
                <div>
                  <a href="tel:+2250700000000" className="font-medium text-neutral-900 hover:underline">+225 07 00 00 00 00</a>
                  <p className="text-sm text-neutral-600">Disponible WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-600 mt-0.5" />
                <div className="text-sm text-neutral-700">
                  <p><span className="font-medium">Mar–Ven:</span> 09h – 19h</p>
                  <p><span className="font-medium">Sam–Dim:</span> 10h – 18h</p>
                  <p><span className="font-medium">Lun:</span> Fermé</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-rose-600 mt-0.5" />
                <div>
                  <a href="#" className="font-medium text-neutral-900 hover:underline">@elegance_abidjan</a>
                  <p className="text-sm text-neutral-600">Suivez nos dernières créations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border shadow-sm bg-white">
            <iframe
              title="Localisation"
              src="https://www.google.com/maps?q=Cocody%20Angr%C3%A9,%20Abidjan&output=embed"
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 border-t bg-neutral-50 flex items-center justify-between">
              <a href="tel:+2250700000000" className="inline-flex items-center gap-2 rounded-md bg-rose-600 text-white px-4 py-2 text-sm font-semibold hover:bg-rose-700 transition-colors">Appeler maintenant</a>
              <a href="https://wa.me/2250700000000" target="_blank" rel="noreferrer" className="text-sm text-rose-700 hover:underline">WhatsApp</a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-500 mt-10">© {new Date().getFullYear()} L'Élégance d'Abidjan — Tous droits réservés.</p>
      </div>
    </section>
  );
}
