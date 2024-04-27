import React from 'react'
import VerticalHeader from '../Shared/VerticalHeader'

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
      

        <VerticalHeader title="Editor's Pick" />

        <div className='flex gap-5 flex-col pt-4'>
          {
            news.map((item: any, i:number)=> {
              return(
                <div className='w-full h-[200px] relative'>
                  <img src={"./img.jpg"} alt="" className='w-full h-full object-cover'/>

                  <div className="overlay" />

                  <div className="details p-3">
                    <p className='text-[10px]'>{item.date}</p>
                    <p className='font-[600] text-[12px]'>
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