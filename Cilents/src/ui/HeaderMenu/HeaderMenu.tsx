import styled from "styled-components"
import ButtonIcon from "../Button/ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logout from "../../feature/authentication/Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default function HeaderMenu() {
    const navigate = useNavigate()
  return (
    <StyledHeaderMenu>
        <li>
        <ButtonIcon onClick={()=> navigate("/account")}>
            <HiOutlineUser/>
        </ButtonIcon>
        </li>
        <li>
            <DarkModeToggle />
        </li>
        <li>
            <Logout />
        </li>
      
    </StyledHeaderMenu>
  )
}
