import React from 'react'
import { sponserLinks } from '..'

const Sponser = () => {
  return (
    <div className="justify-evenly items-center flex flex-wrap gap-5 text-white my-[100px]">
      {
        sponserLinks.map((image)=>(
          <div>
            <img key={image.id} src={image.id} alt={image.title} className="w-[130px]" />
          </div>
        ))
      }
    </div>
  )
}

export default Sponser
