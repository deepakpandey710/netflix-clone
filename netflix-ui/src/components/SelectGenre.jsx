import React from "react"
import styled from "styled-components"

export default function SelectGenre({genres,type}) {
  console.log("select genres",genres);
  return (
    <Select>
    {
        genres.map((genre)=>
            <option value={genre.id} key={genre.id}>{genre.name}</option>
        )
    }
    </Select>
  )
};

const Select = styled.select`

`;