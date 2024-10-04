import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const q = router.query.q as string;

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onKeyDown={onkeydown}
          placeholder="검색어를 입력하세요 ..."
          onChange={onChangeSearch}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
