import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
    revalidate: 3,
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>한입씨네마</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입씨네마" />
        <meta
          property="og:description"
          content="한입씨네마에 등록된 영화들을 만나보세요"
        />
      </Head>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.rec_container}>
          {recoMovies.map((movie) => (
            <MovieItem key={`rec-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_container}>
          {allMovies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
