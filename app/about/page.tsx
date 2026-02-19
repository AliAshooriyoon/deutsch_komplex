const About = () => {
  return <>
    <div className='py-52 bg-gradient-to-r from-red-700 from-[0%]  via-red-700 via-[70%]
      to-amber-600 to-[100%] gap-12 flex items-center justify-center flex-col'>
      <h1 className="text-7xl text-center max-lg:text-4xl text-white">
        Über Deutsch-Komplex
      </h1>
      <h2 className="text-3xl text-white max-lg:text-xl max-lg:px-4">Wir helfen Menschen weltweit dabei, ihre deutschen Sprachprüfungen erfolgreich zu bestehen</h2>
    </div>
    <div className="w-full bg-gray-800">
      <div className="w-full flex justify-around px-16 h-full py-12 max-lg:flex-col max-lg:gap-12">
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">1000+</p>
          <p className="text-xl text-gray-500">Erfolgreiche Lernende</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">95%</p>
          <p className="text-xl text-gray-500">Erfolgsquote</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">120+</p>
          <p className="text-xl text-gray-500">Länder weltweit</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">24/7</p>
          <p className="text-xl  text-gray-500">Support</p>
        </div>
      </div>
    </div>
    <div className="bg-stone-800 w-full px-28 py-20">
      <h2 className="text-6xl text-center text-white">Unsere Geschichte</h2>
      <p className="text-xl text-gray-400">
        Deutsch Komplex entstand aus einer persönlichen Erfahrung. Als ich selbst Deutsch lernte,
        merkte ich schnell, wie kompliziert und unübersichtlich viele Lernmaterialien sind.
        Oft fehlte eine klare Struktur, praxisnahe Beispiele oder ehrliches Feedback. Genau hier wollte ich ansetzen.
        Mein Ziel war es, eine Plattform zu schaffen, die Deutschlernen einfacher, strukturierter und effektiver macht
        – besonders für Menschen, die sich auf Prüfungen vorbereiten oder in Deutschland studieren und arbeiten möchten.
        Deutsch Komplex verbindet verständliche Erklärungen, echte Beispiele und moderne Technologien,
        um individuelles Lernen zu ermöglichen. Die Idee dahinter ist simpel:
        komplexe Inhalte klar erklären und Lernenden helfen, Schritt für Schritt sicherer zu werden.
        Deutsch zu lernen ist eine Herausforderung – aber mit dem richtigen System ist sie machbar      </p>
    </div>
  </>
}
export default About;
