const StepsPage = () => {
  return <>
    <div className='py-28 bg-[#FBFBF4]'>
      <div className="title_box text-center py-18">
        <h2 className="text-4xl">Dein Weg zum Zertifikat</h2>
        <p className="text-gray-600 text-lg mt-2">In vier strukturierten Schritten zur erfolgreichen Deutschprüfung</p>
      </div>
      <div className="flex flex-row-reverse justify-center items-center w-[80%] mx-auto">
        <div className="picBox "></div>
        {/* <Image className="w-[40rem] rounded-3xl rotate-2 shadow-2xl mt-6" */}
        {/*   alt="" src={examPic} /> */}
        <div className="h-full">
          <div className="map_items h-full w-full flex items-start flex-col justify-between ">
            <div className="flex flex-row items-center gap-4 h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">01</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black text-2xl">Niveau bestimmen</p>
                <p className="text-xl text-gray-600">Mache einen Einstufungstest, um dein aktuelles
                  Sprachniveau (A1-C2) zu ermitteln und die passende Prüfung auszuwählen.</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">02</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black text-2xl">Gezielt trainieren</p>
                <p className="text-xl text-gray-600">Übe alle vier Fertigkeiten
                  mit authentischen Aufgaben, die den echten Prüfungsformaten entsprechen.</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">03</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black text-2xl">Schwächen erkennen</p>
                <p className="text-xl text-gray-600">Erhalte detailliertes Feedback zu deinen
                  Antworten und erkenne deine Verbesserungsbereiche.</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 
                to-yellow-500 rounded-full flex items-center justify-center
                text-2xl text-white">04</div>
              <div className="max-w-[80%] mt-6">
                <p className="text-black text-2xl">Prüfung bestehen</p>
                <p className="text-xl text-gray-600">Tritt selbstbewusst zur
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
