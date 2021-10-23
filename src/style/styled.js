import styled from "styled-components";

// const colors = ['black','yellow','green']
// Exported to: Visualizer
const Bar = styled.div`
  width: 15px;
  min-width: 5px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin: auto 2px;
  margin-bottom: 0;
  color: white;
`;

const BarContainer = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
    border: 1px solid black;
`

// Exported to: App
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export { Bar, BarContainer, Wrapper };
