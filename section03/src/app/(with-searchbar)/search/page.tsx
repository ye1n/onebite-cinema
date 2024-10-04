import movies from "../../../mock/dummy.json";
import style from "./page.module.css";
import MovieItem from "@/components/movie-item";

export default function Page() {
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
