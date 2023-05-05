const Input = () => {
    return <div className="flex flex-col justify-center items-center h-boxh3 space-y-5">
    <p className="text-2xl font-montserrat font-medium">
      Reach out to us
    </p>
   <div className="flex mx-auto">
    <input placeholder="Input your email" className="bg-custom8 pl-5 text-lg font-montserrat rounded-tl-full rounded-bl-full h-12 2xl:w-boxw2"/>
    <button className="w-32 h-12 text-custom1 bg-custom rounded-tr-full rounded-br-full font-montserrat font-normal text-sm">
      Submit
      </button>
    </div> 
    
  </div>
}

export default Input;