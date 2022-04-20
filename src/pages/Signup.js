import { useState } from 'react'
import { useSignup} from '../hooks/useSignup'

//components
import Header from '../components/Header'

export default function Signup() {
  const { signup, error, isPending } = useSignup()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const handleFileChange = e => {
    setThumbnail(null)

    let file = e.target.files[0]
    console.log(file)

    if (!file) {
      setThumbnailError('Please select an image file')
      return
    }
    if (!file.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (file.size > 1000000) {
      setThumbnailError('Image file size must be less than 1MB')
      return 
    }

    setThumbnailError(null)
    setThumbnail(file)
  }

  const handleSignup = e => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <div>
      <Header />
      <div className='flex justify-center'>

        <form onSubmit={handleSignup}>
          <h2 className='text-2xl font-bold mb-4'>Sign up</h2>

          <label className='block mb-5 w-full'>
            <span className='block mb-2'>email:</span>
            <input className='block px-2 py-1' 
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className='block mb-5'>
            <span className='block mb-2'>password:</span>
            <input className='px-2 py-1' 
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label className='block mb-5'>
            <span className='block mb-2'>display name:</span>
            <input className='px-2 py-1' 
              type="text"
              onChange={e => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          <label className='block mb-5'>
            <span className='block mb-2'>profile thumbnail:</span>
            <input className='px-2 py-1' 
              type="file"
              onChange={handleFileChange}
            />
            {thumbnailError && <div className='error'>{thumbnailError}</div>}
          </label>
          <button className="btn bg-gray-600 hover:bg-gray-800 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">signup</button>
        </form>
      </div>
    </div>
  )
}
