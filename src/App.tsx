

function App() {
 

  return (
    <>
      <div>
        <h2 className="6xl font-[600] text-center ">Contact Form</h2>
        <div className="w-full md:w-1/2 rounded-lg shadow mx-auto">
        <form action="#" className="mx-auto ">
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="">First Name</label>
            <input type="text" name="firstname" id="firstname" placeholder="Enter your first name" />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="">Last Name</label>
            <input type="text" name="firstname" id="lastname" placeholder="Enter your last name" />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="">Email Address</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address"/>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Enter subject"/>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <label htmlFor="">Message</label>
            <textarea name="message" id="message" placeholder="Message" className="border border-neutral-100"></textarea>
          </div>
          <div>
            <button className="text-white px-4 py-2 bg-black">Submit</button>
            <input type="submit" value="" className="text-white px-3 py-2 bg-black"/>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default App
