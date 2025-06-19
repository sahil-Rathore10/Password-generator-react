import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
   const [length, setLength] = useState(8)
   const [numberAllowed, setNumberAllowed] = useState(false);
   const [characterAllowed, setCharacterAllowed] = useState(false);


  //  password ki koi default value ni hai use hum geneerate kraynge islye isko("") ese rakha h page reload hone per ye automatically value ko le lega
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // useRef kisi b cheez ka muje reference lena ho toh hum useRef krenge
  // usecallback value ko cache memory me rakhta hai jo jo value per dependency lgri hai 
  // callback useEffect se different hai callback me vo function k optimization per depend kerta hai 
  // useEffect me vo kuch b ched chad ho dependency me toh use change ker doo
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    // random password generator k lye loop jo hai depend krega passowrd ki length per**
    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
 
    }
     setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]) 
// yaha per isme hum ek setpassword islye dalre hai kuki ye memorization ka concept hai toh ye bolta hai ki ek method esa b dedo ki jaha per value set horahi hai islye setpassword dala hai 
// or setpassword dalo ya mt dalo ye chalega --- or sirf password dene per hum infinte loop me fas jaynge or bar bar value aati jayegi ati jayegi
     
    //  copypassword to clip board function
    const copyPasswordToClibboard = useCallback(() => {
      // passwordRef ka use krege hum ...uska b toh use hona  chaiye
      passwordRef.current?.select();  
      passwordRef.current?.selectionRange(0,101);
      // sirf ye code likhne se b value select hori thi per user ko pta ni chlra tha ki kya value select hui hai toh usse pta chle kya kya select hua h usle lye code 2 line ka hia uper issi code k
      window.navigator.clipboard.writeText(password)
    },[password])


    // jese hi reload hogi toh useEffect usse run ker dega phle hi(first time per call  hota hai)
  useEffect(() => {
    passwordGenerator()},
  [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
     <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClibboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
     </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type='checkbox'
             defaultChecked= {numberAllowed}
             id="numberInput"
             onChange={() => {
              setNumberAllowed((prev) => !prev )
             }}
            />
            <label htmlFor='numberInput'>Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={characterAllowed}
             id="characterInput"
             onChange={() => {
              setCharacterAllowed((prev) => !prev )
             }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
