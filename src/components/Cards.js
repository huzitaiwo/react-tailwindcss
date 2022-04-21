
export default function Cards() {
  return (
    <div className="mt-6">
      <div className="card hover:shadow-xl">
        <img className="w-full h-32 sm:h-48 object-cover" src={curry} alt="" />
        <div className="m-4">
          <span className="font-bold block">Tofu curry</span>
          <span>Recipe by Blue</span>
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
