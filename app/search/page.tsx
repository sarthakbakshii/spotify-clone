import getSongsByTitle from "@/actions/getSongsByTitle";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import React from "react";


import SearchContent from "./component/SearchContent";

interface Props {
  searchparams: {
    title: string;
  };
}
const Search = async ({ searchparams }: Props) => {
  const songs = await getSongsByTitle(searchparams?.title);
  console.log("page" , songs)
  console.log(searchparams, "searchparams");

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Search !!
          </h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
