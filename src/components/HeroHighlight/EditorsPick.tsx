import React from 'react'

const EditorsPick = () => {

  const news = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
      date: "March 28, 2024",
      title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
      date: "March 28, 2024",
      title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
      date: "March 28, 2024",
      title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
    }
  ]
  return (
    <div className=''>
        <p className='border-b-4 border-b-secondaryBlue py-2 text-[20px] font-[700]'>Editor's Pick</p>

        <div className='flex gap-5 flex-col pt-4'>
          {
            news.map((item: any, i:number)=> {
              return(
                <div className='w-full h-[200px] relative'>
                  <img src={"./img.jpg"} alt="" className='w-full h-full object-cover'/>

                  <div className="overlay" />

                  <div className="details p-3">
                    <p className='text-[10px]'>{item.date}</p>
                    <p className='font-[600]'>
                      {item.title}
                    </p>
                  </div>

                </div>
              )
            })
          }
        </div>
        
    </div>
  )
}

export default EditorsPick