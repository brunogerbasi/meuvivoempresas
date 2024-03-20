import simcardIcon from "../assets/icons/simcard.svg";
import esimIcon from "../assets/icons/esim.svg";
import icon5g from "../assets/icons/5g.svg";

export type TechnologiesItemProps = {
    name: string;
    icon: string; 
}

export const technologiesItems: TechnologiesItemProps[] = [
    {
        name: "simCard",
        icon: simcardIcon
    },
    {
        name: "Esim",
        icon: esimIcon
    },
    {
        name: "Tecnologia",
        icon: icon5g
    }
];
