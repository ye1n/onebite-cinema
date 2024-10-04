import { MovieData } from "@/types";

export default async function fetchOneMovie(
  id: number
): Promise<MovieData | null> {
  let url = `https://ye1n-onebite-cinema-api.vercel.app/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
