export default function TopAbout() {
    const videoId = "GCIw2pQDxRI";
    
    return (
      <div className="w-screen flex flex-col px-6 lg:px-10 bg-[#282b2d] items-center justify-center py-8">
        <div className="flex flex-col items-center justify-center w-full lg:w-[75rem] p-10 text-gray-100 gap-14">
          <h1 className="text-5xl font-semibold">We Make Ideas Happen</h1>
          <span className="text-2xl text-gray-200">We empower business of all sizes to achieve their full potential through digital marketing.</span>
        </div>
        
        <div className="w-full lg:w-[75rem] pb-10">
          <div className="relative flex items-center justify-center w-full pb-[50%] overflow-hidden">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}`}
              className="absolute top-0 left-0 right-0 w-full h-full rounded-lg"
              title="Best Digital Marketing Solution"
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }