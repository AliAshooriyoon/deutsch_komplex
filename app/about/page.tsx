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
      <div className="w-full flex justify-between px-16 h-full py-12">
        <div className="flex flex-col gap-4 h-full">
          <p className="text-2xl">1000+</p>
          <p className="text-xl text-white">Erfolgreiche Lernende</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-2xl">95%</p>
          <p className="text-xl text-white">Erfolgsquote</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-2xl">120+</p>
          <p className="text-xl text-white">Länder weltweit</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-2xl">24/7</p>
          <p className="text-xl text-white">Support</p>
        </div>
      </div>
    </div>
  </>
}
export default About;
