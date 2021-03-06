import { Link } from "react-router-dom";

export default function Card({ meal }) {
  return (
    <div className="mt-6">
      <Link to={`/meals/${meal.id}`}>
        <div className="card relative h-full hover:shadow-2xl flex flex-col transition ease-in-out duration-300">
          <img className="w-full h-40 sm:h-48 object-cover" src={meal.photoURL} alt="" />
          <div className="m-4 flex-grow">
            <span className="font-bold block">{meal.name}</span>
            <span></span>
          </div>
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{`${meal.cookingTime} MIN`}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
