import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Detail = styled.div`
  max-width: 1180px;
  display: flex;
  gap: 16px;
`
export const Image = styled.img`
  max-width: 30%;
`
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }`