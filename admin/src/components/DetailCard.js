export function DetailCard({ Op, ship }) {
	const rupiah = (number)=>{
		return new Intl.NumberFormat("id-ID", {
		  style: "currency",
		  currency: "IDR"
		}).format(number);
	  }
  return (
    <>
    
        <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-200 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
           
			
              <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div class="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    class="w-full hidden md:block"
                    src={Op.Product?.imgUrl}
                    alt="dress"
                  />
                </div>
                <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div class="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      {Op.Product?.name}
                    </h3>
                    <div class="flex justify-start items-start flex-col space-y-2">
                      <p class="text-sm dark:text-white leading-none font-bold text-gray-800">
                        <span class="dark:text-gray-400 font-bold italic text-black">
                          Quantity:{" "}
                        </span>{" "}
                        {Op.quantity}
                      </p>
                      <p class="text-sm dark:text-white leading-none font-bold text-gray-800">
                        <span class="dark:text-gray-400 font-bold italic text-black">
                          Price:{" "}
                        </span>{" "}
                        {rupiah(Op.price)}
                      </p>
                     
                    </div>
                  </div>
				
                
                </div>
				
              </div>
            
            
            </div>
          </div>
        </div>	
		
    </>
  );
}
