import styled from "styled-components"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import UserAvatar from "../../feature/authentication/UserAvatar"
import Logout from "../../feature/authentication/Logout"

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-gray-100);

    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
`

export default function Header() {
    return (
        <StyledHeader>
            <UserAvatar />
            <HeaderMenu />
            <Logout/>
        </StyledHeader>
    )
}
