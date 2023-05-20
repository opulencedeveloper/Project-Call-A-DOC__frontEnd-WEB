const Input = () => {
    return <div className="flex flex-col justify-center items-center py-20 space-y-5 w-full">
    <p className="text-2xl font-montserrat font-medium">
      Reach out to us
    </p>
   <div className="flex justify-center w-11/12 h-12 md:1/2">
    <input placeholder="Input your email" className="w-full bg-custom8 pl-8 text-lg rounded-tl-full rounded-bl-full"/>
    <button className="px-3 md:px-10 text-custom1 bg-custom rounded-tr-full rounded-br-full font-normal text-sm">
      Submit
      </button>
    </div> 
    
  </div>
}

export default Input;