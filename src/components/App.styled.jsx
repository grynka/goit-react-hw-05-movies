import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
gap: 16px;
padding: 0;`;


export const Item = styled.li`
width: calc((100% - 64px) / 5);
box-shadow: rgb(204 204 204) 0px 0px 8px 1px;`;

export const Image = styled.img`
width: 100%;
height: 330px;
object-fit: cover;`;

export const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    padding: 12px 10px;
    color: black;`;