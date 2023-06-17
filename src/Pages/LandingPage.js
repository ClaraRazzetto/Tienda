import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const LandingPage = () => {

  const productos = [
    {
      id: 1,
      name: "Remera nation",
      category: "Remera",
      colour: "Blanca",
      size: "S",
      price: 10000,
      img: require("../img/RemeraNation.jpg"),
      description: "Remera de jersey, cuello redondo manga corta. Molderia oversize. Largo a la cadera. Estampa centrada en frente. Estampa en mangas."
    },
    {
      id: 2,
      name: "Jean carpenters",
      category: "Pantalon",
      colour: "Azul",
      size: "M",
      price: 25000,
      img: require("../img/JeanCarpenters.jpg"),
      description: "Jean 5 bolsillos calce relax con piernas extra amplias. Bolsillos rectangulares con tira carpintera lateral. Color azul oscuro"
    },
    {
      id: 3,
      name: "Campera Basic",
      category: "Abrigo",
      colour: "Negro",
      size: "L",
      price: 36000,
      img: require("../img/CamperaBasic.jpg"),
      description: "Campera basica de frisa liviana. Bolsillo canguro. Cierre metalico color crudo. Cordon color crudo con puntera metalica. Largo a la primer cadera."
    },
    {
      id: 4,
      name: "Campera Sensorial",
      category: "Abrigo",
      colour: "Azul",
      size: "L",
      price: 26900,
      img: require("../img/CamperaSensorial.jpg"),
      description: "Campera de plush. Capucha con forreria al tono. Ojalillos metalicos y cordon tubular con puntera metalica."
    },
  ];
  
  return (
    <>

      <Main
        products={productos}
      />

      <Footer />
    </>
  )

}

export default LandingPage