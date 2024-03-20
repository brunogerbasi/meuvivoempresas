import { TitleH2 } from "./Title.styles";

interface TitleProps {
    text: string;
}

const Title = ({ text }: TitleProps) => {
    return <TitleH2>{text}</TitleH2>;
};

export default Title;
