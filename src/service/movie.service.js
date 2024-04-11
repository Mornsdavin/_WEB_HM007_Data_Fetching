
export async function getAllMovieService (){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = await res.json();
    return data;
}

//get movie by id

export async function getMovieByIdService(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const data = await res.json();
    return data;
}