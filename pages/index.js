import Head from 'next/head'
import { useState } from 'react'
export default function Home() {
  const [state, setState] = useState({ location: "", minCustomers: "" , maxCustomers:"" ,angCookies:"" });
  const [cookie , setCookie] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
    
    
  };
  let handlerForm =(e)=>{
    e.preventDefault()
    setCookie([...cookie,state])  

  }
  return (
    <div className="flex flex-col  min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-green-100'>
        <header className="bg-green-500 p-5 text-4xl font-medium">
          Cookie Stand Admin
        </header>

        <section className='items-center flex justify-center flex-wrap'>
        <form className="bg-green-300 p-5 m-10 w-3/4 rounded-md" onSubmit={(e)=>handlerForm(e)}>
          <h2 className='text-2xl text-center font-semibold'>Create Cookie Stand</h2>

          <div className='flex py-5'>
          <label className='mr-2 font-medium text-l'>Location</label>
          <input className='w-full h-7' type='text' name="location" onChange={handleChange}/>
          </div>
          <br/>

          <section className="space-x-8 ml-5 flex flex-wrap">
          <div className='grid '>
          <label className='ml-3 font-medium text-l'>Minimum Customers Per Hour</label>
          <input name="minCustomers" type='number' className='w-64 h-7' onChange={handleChange}/>
          </div>

          <div className='grid'>
          <label className='ml-3 font-medium text-l'>Maximum Customers Per Hour</label>
          <input name="maxCustomers" type='number' className='w-64 h-7' onChange={handleChange}/>
          </div>

          <div className='grid'>
          <label className='ml-3 font-medium text-l' for="avg">Average Customers Per Hour</label>
          <input name="angCookies" type='number' className='w-64 h-7' onChange={handleChange}/>
          </div>
          <input className='h-16 w-52 bg-green-500 font-medium text-xl' type="submit" value="Create" />
          </section>
         

          
        </form>
        </section>
        <section className='h-64  text-center' >
          <p className='font-semibold'>Report Coming Soon ........</p>
          {/* <p>{JSON.stringify(state)}</p> */}
          { cookie &&
          cookie.map(item=>{

           return <p className='m-0'>{JSON.stringify(item)}</p>
           
          })}

          </section>
        <footer className='bg-green-500 text-xl font-medium mb-8  p-5'>&copy;2021</footer>
      </main>
      
    </div>
  )
}
