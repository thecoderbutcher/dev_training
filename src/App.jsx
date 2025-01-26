import { useState } from 'react' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex flex-col items-center w-full h-screen font-bold text-secondary bg-primary '>
      <div className='flex flex-col items-center justify-center gap-2 p-4'>
        <h1 className='text-4xl font-bold'>Dev Training</h1>
        <p className='text-base font-light'>A space where you can explore the <span className='text-accent'>results</span> of my practice in various programming languages as part of my <span className='text-accent'>learning process</span>.</p>
      </div>
      <div className='grid grid-cols-12 w-full h-full gap-2'> 
        <aside className='col-span-2 w-full rounded-2xl bg-secondary/20 shadow-2xl'>
          <ul>
            <li>
              Javascript
            </li>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
          </ul>
        </aside>
        <div className='col-span-10 w-full rounded-2xl border-1 border-accent/40'>
        </div>
      </div>
    </main>
  )
}

export default App
