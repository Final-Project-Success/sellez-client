export default function OtpForm() {
    return(
        <>
       
        <div className="mt-20  grid grid-cols-12 bg-red-300 h-[90px]">
            <div className="col-start-6 col-end-8 flex items-center flex-col">
                <div className="">

                </div>
            <label htmlFor="name" className="">
            insert your otp

            </label>
            <input  
            id="name"
            type="text"
            placeholder="name"
            name="name"
            className="w-full  p-3 rounded dark:bg-gray-800"/>
            </div>
                
        </div>


        </>
    )
}