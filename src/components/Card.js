
export default function Card({ src, name, owner }) {
  return (
    <div className="mt-6">
      <div className="card h-full hover:shadow-2xl flex flex-col">
        <img className="w-full h-40 sm:h-48 object-cover" src={src} alt="" />
        <div className="m-4 flex-grow">
          <span className="font-bold block">{name}</span>
          <span>{owner}</span>
        </div>
        <div className="badge">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>25mins</span>
        </div>
      </div>
    </div>
  )
}
