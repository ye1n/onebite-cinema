import { MovieData } from "@/types";

export default async function fetchRandomMovies(): Promise<MovieData[]> {
  const url = `https://ye1n-onebite-cinema-api.vercel.app/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
