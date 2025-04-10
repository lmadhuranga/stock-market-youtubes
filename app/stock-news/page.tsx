export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* <h1 className="text-2xl font-semibold text-center mb-8">Live News & Market Streams</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {/* Bloomberg Business News */}
        <iframe
          className="rounded-lg shadow-md"
          width="100%"
          height="470"
          src="https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=1&cc_load_policy=1"
          title="Bloomberg Business News Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* CBS News */}
        <iframe
          className="rounded-lg shadow-md"
          width="100%"
          height="470"
          src="https://www.youtube.com/embed/lB4g-La2aAA?autoplay=1&mute=1&cc_load_policy=1"
          title="CBS News Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Dow Jones Live */}
        <iframe
          className="rounded-lg shadow-md"
          width="100%"
          height="470"
          src="https://www.youtube.com/embed/4308cmKphMg?autoplay=1&mute=1&cc_load_policy=1"
          title="Dow Jones Industrial Average Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Yahoo Finance or Additional Feed */}
        <iframe
          className="rounded-lg shadow-md"
          width="100%"
          height="470"
          src="https://www.youtube.com/embed/Yg1lKUq-8bc?autoplay=1&mute=1&cc_load_policy=1"
          title="Top Stories - Yahoo Finance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
