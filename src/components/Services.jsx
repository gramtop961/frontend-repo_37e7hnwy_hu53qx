import { Scissors, Sparkles, Brush, User } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Coupe & Barber",
    desc: "Dégradés, contours, rasage à l'ancienne et soins barbe pour un look net et moderne.",
    price: "à partir de 5 000 FCFA",
  },
  {
    icon: Brush,
    title: "Tresses & Nattes",
    desc: "Box braids, cornrows, twists, vanilles et tissages avec finitions soignées.",
    price: "à partir de 10 000 FCFA",
  },
  {
    icon: Sparkles,
    title: "Soin capillaire",
    desc: "Traitements nourrissants, kératine, soins anti-chute et routine personnalisée.",
    price: "à partir de 7 000 FCFA",
  },
  {
    icon: User,
    title: "Beauté & Mariage",
    desc: "Coiffures événementielles, chignons, make-up partenaire et déplacement sur demande.",
    price: "sur devis",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Nos services</h2>
          <p className="mt-3 text-neutral-600">Un savoir-faire maîtrisé pour chaque type de cheveux et chaque occasion.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
              <p className="mt-4 text-sm font-medium text-neutral-800">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
