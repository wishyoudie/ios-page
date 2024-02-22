type TitleProps = {
  children?: React.ReactNode;
};

export const Title: React.FC<TitleProps> = (props) => {
  return <h2 className="title">{props.children}</h2>;
};
