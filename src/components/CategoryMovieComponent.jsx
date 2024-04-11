import { getAllMovieService } from "@/service/movie.service";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GenreMovies = async () => {
  const response = await getAllMovieService();

  const movieData = response.payload;

  const genres = [...new Set(movieData.flatMap((movie) => movie.genre))];

  return (
    <main>
      {genres.map((genre) => (
        <div key={genre} className="w-full overflow-hidden bg-blue-300">
          <div className="flex pt-10 pl-10">
            <h1 className="text-xl font-bold">{genre} Movies</h1>
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

          <div className="ml-10 overflow-x-scroll w-[95%]">
            <Carousel opts={{ align: "start" }} className="w-screen">
              <CarouselContent className="">
                {movieData
                  .filter((movie) => movie.genre.includes(genre))
                  .map((movie) => (
                    <CarouselItem
                      key={movie.movie_id}
                      className="md:basis-[333px] lg:basis-[333px]"
                    >
                      <Link href={`/moviepage/${movie.movie_id}`}>
                        <div
                          key={movie.movie_id}
                          className="card w-80 bg-white shadow-xl rounded-xl mt-5"
                        >
                          <figure className="px-5 pt-5">
                            <img
                              src={
                                movie.image ||
                                "https://th.bing.com/th/id/OIF.0mja0gtU1i46Pbs54DzfmQ?rs=1&pid=ImgDetMain"
                              }
                              alt={movie.movie_title}
                              className="rounded-xl"
                            />
                          </figure>
                          <div className="card-body items-center text-center px-5 pb-2">
                            <h2 className="mt-4 card-title line-clamp-1 text-xl font-bold">
                              {movie.movie_title}
                            </h2>
                            <p className="mt-3 mb-3 line-clamp-2">
                              {movie.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ))}
    </main>
  );
};

export default GenreMovies;
