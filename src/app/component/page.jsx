import { getAllMovieService } from "@/service/movie.service";
import { data } from "autoprefixer";

const AllMovies = async () => {
  const movieData = await getAllMovieService;
  console.log("Data: ", movieData);
  return (
    <main>
      <div className="w-full overflow-hidden bg-blue-300">
        <div className="flex pt-10 pl-10">
          <h1 className=" text-xl font-bold">All Movies</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div className="flex">
          {/* card block */}
          {movieData.map((data)=>(
            <div className="card w-80 bg-white shadow-xl rounded-xl mt-5 ml-10">
            <figure className="px-5 pt-5">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="mt-4 card-title line-clamp-1 text-xl font-bold">
                Shoes!
              </h2>
              <p className="mt-3 mb-3 line-clamp-2">
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </main>
  );
};

export default AllMovies;
