import styled from "styled-components";

const FeaturedSpeakers = () => {
  return (
    <FeatureGridStyle>
      <div>
        <img src="" />
        <h3>John Doe</h3>
        <p>React Developer, ABC Company Ltd.</p>
      </div>
      <div>
        <img src="" />
        <h3>John Doe</h3>
        <p>React Developer, ABC Company Ltd.</p>
      </div>
      <div>
        <img src="" />
        <h3>John Doe</h3>
        <p>React Developer, ABC Company Ltd.</p>
      </div>
    </FeatureGridStyle>
  );
};

const FeatureGridStyle = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  div {
    border: 1px solid #61dafb;
    padding: 1.2rem;
    text-align: center;
  }
`;

export default FeaturedSpeakers;
