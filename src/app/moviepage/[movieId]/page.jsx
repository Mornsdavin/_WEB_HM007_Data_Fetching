import NavbarComponent from "@/components/NavbarComponents";
import { getMovieByIdService } from "@/service/movie.service";

const MovieDetail = async ({ params }) => {
  const response = await getMovieByIdService(params.movieId);
  const data = response.payload;
  const rating = data.rating;
  return (
    <main className="w-screen h-screen bg-blue-300">
      <NavbarComponent/>
      <div class=" dark:bg-gray-800 py-8 pt-20 bg-blue-300">
        <div class="px-14 mx-auto">
          <div class="flex flex-col  md:flex-row">
            <div class="md:flex-1 mr-5">
              <div class=" w-[700px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={data.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {data.director}
              </h2>
              <p class="dark:text-gray-300 text-md">{data.runtime} minutes</p>
              <p class="dark:text-gray-300 text-md ">
                <i>{data.genre}</i>
              </p>

              <div className="flex mb-4">
                <div className="mr-4">
                  
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 ${
                          index < rating ? "text-yellow-600" : "text-gray-500"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {rating} out of 5 stars
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {data.movie_title} ({data.released_year})
                </h2>
                <div className="bg-scroll ">
                  <p class=" dark:text-gray-300 text-md mt-2">
                    {data.description}
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <p>{data.posted_at}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
