const Cards = ({CardIn}) => {
  return (
    <>
    <div class="m-0 mt-[20px] w-full flex justify-center flex-wrap">
        {CardIn.map((value, index) => (
            <div class="w-[257px] h-[270px] p-[12px]" key={index}>
                <div>
                    <img class="w-[256px] h-[144px]" src={value.img} alt=""></img>
                </div>
                <div class="mt-[10px] mb-[7px] flex">
                    <div>
                        <img class="w-[35px] h-[35px] border border-transparent rounded-[50px] mr-[8px]" src={value.profile} alt=""></img>
                    </div>
                    <div class="text-left">
                        <p class="text-[14px] font-medium">{value.title}</p>
                        <p class="text-[12px] mt-[9px]">{value.channel}</p>
                        <p class="text-[12px] mt-[5px]">{value.view}</p>
                    </div>
                </div>
            </div>
        ))} 
    </div>
    </>
  )
}

export default Cards
