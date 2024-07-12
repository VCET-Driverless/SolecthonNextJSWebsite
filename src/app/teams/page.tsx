"use client"
import React from 'react'
import { ImagesSlider } from '../components/ui/images-slider'
import { motion } from 'framer-motion'

function TeamPage() {
  const teamMembers = {
    ptDrivers: [
      {
        name: 'Nat Reynolds',
        title: 'Worldwide Partner',
        imageUrl: 'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=',
        hoverImageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400'
      },
      // more members
    ],
    chassis: [
      {
        name: 'Monica Pouli',
        title: 'Creative Leader',
        imageUrl: 'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/bb4a3324cba15018a0c8e5ad/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?version=',
        hoverImageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400'
      },
      // more members
    ]
  };

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      {/* Image display section */}
      <ImagesSlider className="h-[100vh] w-full overflow-hidden" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      {/* The Team Section */}
      {Object.keys(teamMembers).map((subGroup, index) => (
        <div key={index} className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-center mb-8">{subGroup.toUpperCase()}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {teamMembers[subGroup].map((member: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; imageUrl: string | undefined; hoverImageUrl: string | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, idx: React.Key | null | undefined) => (
              <motion.div
                key={idx}
                className="group relative flex flex-col items-center p-4 bg-transparent rounded-lg animate__animated animate__fadeInUp"
                style={{ animationDuration: '1500ms', animationDelay: `${500 + idx * 250}ms` }}
              >
                <div className="relative w-32 h-32 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <img
                    alt={member.name}
                    className="rounded-lg w-full h-full object-cover"
                    src={member.imageUrl}
                  />
                  <img
                    alt={member.name}
                    className="rounded-lg w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src={member.hoverImageUrl}
                  />
                </div>
                <h5 className="text-center text-xl font-bold">{member.name}</h5>
                <h6 className="text-center text-md text-gray-600">{member.title}</h6>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamPage
