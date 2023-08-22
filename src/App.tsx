import { useState } from 'react'
import {FaCcMastercard} from 'react-icons/fa' 
import './App.css'

function App() {
  const [dataCards, setDataCards] = useState({})

  const handleChange = (e: any) => {
    setDataCards({
      ...dataCards,
      [e.target.name]: e.target.value
    })
  }

  return (
    
    <section className='w-screen h-screen flex'>
      <div className='h-full w-[40%] bg-[url(../public/bg-main-desktop.png)] bg-no-repeat'>
        <div className=' p-4 ms-[12%] mt-14 fixed h-[11rem] w-[20rem] rounded bg-[url(../public/bg-card-front.png)] bg-cover shadow'>
          <div className='text-white text-3xl'>
          <FaCcMastercard/>
          </div>
          <div className='flex justify-center'>
            <p className='text-white mt-8 text-lg'>{dataCards?.cardNumber?.length?`${dataCards.cardNumber}`:'1234  1234  1234  1234'}</p>
          </div>
          <div className='flex mt-8 justify-around text-white'>
            <p className='uppercase'>{dataCards?.cardName?.length?`${dataCards.cardName}`:'First Name'}</p>
          <p>{dataCards?.monthExp?.length && dataCards?.yearExp?.length?`${dataCards.monthExp}/${dataCards.yearExp}`:'MM/YY'}</p>
          </div>
        </div>
        <div className='p-4 ms-[18%] mt-[18%] fixed h-[11rem] w-[20rem] rounded bg-[url(../public/bg-card-back.png)] bg-cover shadow'>
          <p className='ms-60 mt-14'>{dataCards?.cvv?.length?`${dataCards.cvv}`:'CVV'}</p>
        </div>
      </div>

      <div className='flex h-full w-full justify-center items-center'>
        <form className='flex flex-col gap-2 w-[35%] p-3'>
          <label>CARDHOLDER NAME</label>
          <input onChange={handleChange} className='border border-slate-300 p-2  rounded' type="text" name='cardName' placeholder='Jhon Doe'/>
          <label>CARD NUMBER</label>
          <input onChange={handleChange} className='border border-slate-300 p-2  rounded' type="text" name='cardNumber' placeholder='1234 5678 9012 3456'/>
          <div className='flex'>
            <div className='flex gap-2'>
              <div className='flex flex-col'>
                <label>EXP. DATE  MM/YY</label>
                <div className='flex gap-2'>
                  <input onChange={handleChange} className='w-16 border border-slate-300 p-2  rounded' type="text" name='monthExp' placeholder='MM'/>
                  <input onChange={handleChange} className='w-16 border border-slate-300 p-2  rounded' type="text"  name='yearExp' placeholder='YY'/>
                </div> 
              </div>
              <div className='flex flex-col'>
                  <label>CVV</label>
                  <input onChange={handleChange} className=' w-16 border border-slate-300 p-2  rounded' type="text" name='cvv' placeholder='123'/>
                </div>
            </div>
          </div>
          <button className='bg-slate-800 p-2 text-white rounded'>Confirm</button>
        </form>
      </div>
    </section>
    
  )
}

export default App
