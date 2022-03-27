import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import researchTitles from '../external/researchTitles'

export async function getStaticProps() {
  const data =
  {
    title: researchTitles[Math.floor(Math.random() * researchTitles.length)]
  }

  return {
    props: data
  }
}


export default function Home() {

  const [title, setTitle] = useState();


  const [isOpen, setIsOpen] = useState(false)

  const btnClick = () => {
    setIsOpen(true)
    setTitle(researchTitles[Math.floor(Math.random() * researchTitles.length)])
  }


  return (
    <div className="flex flex-col items-center justify-center  h-screen max-w-2xl px-5 mx-auto space-y-10 font-semibold border-x-2 border-transparent sm:border-[#2B2A33] select-none">
      <div className="text-4xl font-medium text-white bg-opacity-50 cursor-default sm:text-5xl">
        Reseach Titles <span className="text-[#C68BF9] font-bold">Generator</span>
      </div>
      <div className="text-sm font-light text-center sm:text-base">
        This tool randomly generates research title ideas for your reference or inspiration.
        Currently, the generated titles are for <span className="text-[#C68BF9] bg-[#2B2A33] rounded py-[2px] px-1">computer-related majors</span>.
      </div>
      <div className="text-sm font-light text-center sm:text-base">
        Click the button below to get started.
      </div>

      {
        isOpen ?
          <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 25, opacity: 0 }} className="bg-[#2B2A33] w-full p-5 selection:bg-[#5e5b70] select-all text-center font-medium justify-center h-20 flex items-center text-lg text-[#C68BF9] rounded-md">
            {title ? title : props.title}
          </motion.div>
          :
          null
      }

        <button onClick={btnClick} className="bg-[#2B2A33] px-3 py-2 text-lg text-[#C68BF9] rounded font-semibold">
          {isOpen ? 'Generate Another' : 'Generate'}
        </button>

      <div className="flex flex-col">
        <div>Made With 💜 by <a href="https://github.com/jparw" rel="noreferrer" target="_blank" className="font-semibold text-[#C68BF9]">Jack Willars</a></div>
        <div class="flex justify-center space-x-3 pt-2">
          <div className="bg-[#2B2A33] px-2 py-1 items-center flex text-xs text-[#C68BF9] rounded font-semibold">NEXT.JS</div>
          <div className="text-lg font-light text-[#5e5b70]">+</div>
          <div className="bg-[#2B2A33] px-2 py-1 items-center flex text-xs text-[#C68BF9] rounded font-semibold">TAILWIND</div>
        </div>
      </div>
    </div>
  )
}