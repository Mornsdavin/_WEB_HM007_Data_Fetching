import { getAllMovieService } from "@/service/movie.service";
import AllMovies from "../../components/AllMovies";
import { data } from "autoprefixer";
import GenreMovies from "@/components/CategoryMovieComponent";
import NavbarComponent from "@/components/NavbarComponents";

const MoviePage = () => {

  return (
    <main>
      
      <div class="relative overflow-hidden">
        
        <div class="absolute inset-0">
          <NavbarComponent/>
          <div class="h-full bg-gradient-to-t from-blue-300 to-transparent"></div>
        </div>
        <img
          class="h-full w-full object-cover"
          src="https://th.bing.com/th/id/R.e168b451f8f4ba3c5665e1e75d35bccd?rik=rXuQ6e31XStMtQ&riu=http%3a%2f%2fpuui.qpic.cn%2fvcover_hz_pic%2f0%2f2knhnaakii18oxj1624372632030%2f0&ehk=RaRtRFVT2121%2b13vIvR%2bAeBS4hsnicsCpfJUtzd%2fACM%3d&risl=&pid=ImgRaw&r=0"
          alt="background cover"
        />
      </div>
      <AllMovies data={data}/> 
      <GenreMovies/>
    </main>
  );
};

export default MoviePage;
