import { useState } from 'react'
import { useSignup} from '../hooks/useSignup'

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
      <form className='auth-form' onSubmit={handleSignup}>
        <h2 className='text-2xl font-bold mb-4'>Sign up</h2>

        <label>
          <span>email:</span>
          <input 
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input 
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>display name:</span>
          <input 
            type="text"
            onChange={e => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>profile thumbnail:</span>
          <input 
            type="file"
            onChange={handleFileChange}
          />
          {thumbnailError && <div className='error'>{thumbnailError}</div>}
        </label>
        <button className="btn text-gray-600 hover:bg-gray-600 hover:text-white ml-2 md:border transition ease-in-out duration-500">signup</button>
      </form>
    </div>
  )
}
