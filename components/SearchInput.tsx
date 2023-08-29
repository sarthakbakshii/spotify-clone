"use client";

import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useRouter } from 'next/navigation'

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

const SearchInput = () => {

    const router = useRouter();
    const [value , setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect( () =>{

        const query = {
            title : debouncedValue,
        }

        const url = queryString.stringifyUrl({
            url : '/search',
            query: query
        });

        router.push(url)

    }, [debouncedValue])


  return (
    <Input
        placeholder="What do you want to listen to ?"
        value={value}
        onChange={ (e) => setValue(e?.target?.value) }
    />
  )
}

export default SearchInput