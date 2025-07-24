import React from 'react'

const Mission = () => {
  return (
      <section className="relative" id="mission">
        <div
          className="flex flex-col gap-8 items-center justify-center text-white py-20 relative"
          style={{
       backgroundImage: `url('https://media.istockphoto.com/id/1473666403/photo/deep-forest-waterfall-in-thailand-erawan-waterfall-national-park-kanjanaburi-thailand.jpg?s=612x612&w=0&k=20&c=weBEF1fecZcspR3wqZz79ZmH4fnauLTqy9A4xEb8xi4=')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              <span className="text-teal-500">Our</span> Mission
            </h2>
            <p className="text-center text-pretty font-bold text-lg md:text-3xl leading-relaxed mb-8">
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