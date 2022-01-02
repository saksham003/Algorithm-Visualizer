import styled from "styled-components";

// const colors = ['black','yellow','green']
// Exported to: Visualizer
const Bar = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin: auto 1px;
  margin-bottom: 0;
  color: white;
`;

export { Bar };
