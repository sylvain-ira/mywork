import React from 'react'

const Mission = () => {
  return (
      <section className="relative" id="mission">
        <div
          className="flex flex-col gap-8 items-center justify-center text-white py-20 relative"
          style={{
       backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/032/995/575/small/interior-design-beautiful-living-room-gothic-style-luxury-mansion-elegant-tall-window-ai-generative-photo.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-2 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              <span className="text-teal-500">Our</span> Mission
            </h2>
            <p className=" text-pretty font-bold text-sm md:text-2xl leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis
              consequat, est sociosqu vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis
              posuere, ultrices fermentum libero pretium convallis pharetra
            </p>
            <div className="flex gap-4 justify-center">
              <div className="border-b-4 border-teal-500 w-16 rounded-2xl"></div>
              <div className="border-b-4 border-white w-16 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Mission