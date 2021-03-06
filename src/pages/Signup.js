import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

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
    signup(email, password, displayName, thumbnail)
  }

  return (
    <div>
      <Header />
      <div className='p-2 md:p-6'>

        <form onSubmit={handleSignup}>
          <h2 className='text-2xl font-bold mb-6 pb-3 border-b border-gray-200'>Sign up</h2>

          <label className='block mb-5'>
            <span className='block mb-2'>email:</span>
            <input className='input'
              required 
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label className='block mb-5'>
            <span className='block mb-2'>password:</span>
            <input className='input'
              required 
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <label className='block mb-5'>
            <span className='block mb-2'>display name:</span>
            <input className='input'
              required 
              type="text"
              onChange={e => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>

          <label className='block mb-5'>
            <span className='block mb-2'>profile thumbnail:</span>
            <input className='input bg-gray-50'
              required 
              type="file"
              onChange={handleFileChange}
            />
            {thumbnailError && <div className='error'>{thumbnailError}</div>}
          </label>
          
          <div className='mt-2'>
            {!isPending && <button className="btn authBtn">Sign up</button>}
            {isPending && <button disabled className="btn authBtn">signing up...</button>}
            {error && <div className='error'>{error}</div>}
          </div>
        </form>
      </div>
    </div>
  )
}
