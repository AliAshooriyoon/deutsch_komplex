const StepsPage = () => {
  return <>
    <div className='py-28 bg-[#FBFBF4]'>
      <div className="title_box text-center py-18">
        <h2 className="lg:text-4xl max-lg:text-3xl">Dein Weg zum Zertifikat</h2>
        <p className="text-gray-600 text-lg mt-2">In vier strukturierten Schritten zur erfolgreichen Deutschprüfung</p>
      </div>
      <div className="flex lg:flex-row-reverse max-lg:flex-col-reverse lg:justify-center
        max-lg:flex-wrap max-lg:gap-24 items-center lg:w-[80%] max-lg:w-[90%] mx-auto">
        <div className="picBox max-lg:w-[90%] max-lg:h-[18rem] lg:w-[48rem] lg:h-[30rem]"></div>
        <div className="h-full p-1">
          <div className="map_items h-full w-full flex items-start flex-col justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="lg:w-16 lg:h-16 max-lg:px-4 max-lg:py-3 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">01</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black max-lg:text-xl lg:text-2xl">Niveau bestimmen</p>
                <p className="max-lg:text-md lg:text-xl text-gray-600">Mache einen Einstufungstest, um dein aktuelles Sprachniveau
                  (A1-C2) zu ermitteln und die passende Prüfung auszuwählen.</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="lg:w-16 lg:h-16 max-lg:p-3 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">02</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black max-lg:text-xl lg:text-2xl">Gezielt trainieren</p>
                <p className="max-lg:text-md lg:text-xl text-gray-600">Übe alle vier Fertigkeiten
                  mit authentischen Aufgaben, die den echten Prüfungsformaten entsprechen.</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="lg:w-16 lg:h-16 max-lg:p-3 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">03</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black max-lg:text-xl lg:text-2xl">Schwächen erkennen</p>
                <p className="max-lg:text-md lg:text-xl text-gray-600">Erhalte detailliertes Feedback zu deinen
                  Antworten und erkenne deine Verbesserungsbereiche.</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="lg:w-16 lg:h-16 max-lg:p-3 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">04</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black max-lg:text-xl lg:text-2xl">Prüfung bestehen</p>
                <p className="max-lg:text-md lg:text-xl text-gray-600">Tritt selbstbewusst zur
                  Prüfung an und erhalte dein offizielles Deutschzertifikat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default StepsPage;
