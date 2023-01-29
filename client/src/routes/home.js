import Container from "../components/Container";
import Notes from "../components/Notes";

const Home = () => {
  return (
    <Container title={`Your Notes`}>
      <Notes />
    </Container>
  );
};

export default Home;
