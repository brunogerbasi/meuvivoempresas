import iconWifi from "../assets/icons/wifi.svg";

type Discovery =
{
    alt?:string,
    title:string,
    subTitle:string,
    icon: string,
    textButton: string,    
    url:string,
}

const discoveryData:Discovery[] = 
[
    {        
        title: "200 Mega",
        subTitle: "+Wi-fi e Modem grátis",
        icon: iconWifi,
        textButton: 'Consultar cobertura',
        url: "#"
    },
    {
        alt: "O MELHOR CUSTO BENEFÍCIO",
        title: "300 Mega",
        subTitle: "+Wi-fi e Modem grátis",
        icon: iconWifi,
        textButton: 'Consultar cobertura',
        url: "#",        
    },
    {
        alt: "O MELHOR CUSTO BENEFÍCIO",
        title: "600 Mega",
        subTitle: "+Wi-fi e Modem grátis",
        icon: iconWifi,
        textButton: 'Consultar cobertura',
        url: "#",        
    },
]

export default discoveryData;