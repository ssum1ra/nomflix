import axios from "axios";

const API_KEY = "f1f4886fe70659d47982c1e3c2bef921";
const BASE_URL = "https://api.themoviedb.org/3";

interface IMovie {
    id: number,
    backdrop_path: string,
    poster_path: string,
    title: string,
    overview: string,
}

export interface IGetMoviesResult {
    dates: {
        maximum: string, 
        minimum: string,
    },
    page: number, 
    results: IMovie[], 
    total_pages: number, 
    total_results: number,
}

export const getMovies = async() => {
    const response = await axios.get(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,  
    );
    return response.data;
};