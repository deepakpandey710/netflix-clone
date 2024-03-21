import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { getDataByGenre } from "../store";
export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  console.log("select genres", genres);
  return (
    <Select className="flex" onChange={(e) => dispatch(getDataByGenre({genre:e.target.value, type}))}>
      {
        genres.map((genre) =>
          <option value={genre.id} key={genre.id}>{genre.name}</option>
        )
      }
    </Select>
  )
};

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;