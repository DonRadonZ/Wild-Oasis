import styled from "styled-components";

type TagProp = {
  type: string
}

const Tag = styled.span<TagProp>`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props: {type: string}) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default Tag;