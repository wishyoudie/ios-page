import { useNavigate } from "react-router-dom";
import { Title } from "../Components/Title";
import { Section } from "../Components/Section";
import { usePrevious } from "../Components/PreviousContext";

export const Main = () => {
  const navigate = useNavigate();
  const { setPrevious } = usePrevious();

  const onSectionClick = () => {
    setPrevious("Main");
    navigate("/second");
  };

  return (
    <section className="page">
      <Title>Main</Title>
      <Section onClick={onSectionClick}>Second</Section>
    </section>
  );
};
