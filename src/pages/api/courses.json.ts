const courses = [
  {
    id: 0,
    name: "¿Por qué creer en la Biblia?",
    artist: "Joel Flores",
    imgUrl: "/covers/biblia4.jpg"
  },
  {
    id: 1,
    name: "¿Dónde está Dios cuando sufrimos?",
    artist: "Joel Flores",
    imgUrl: "/covers/sufrimiento4.jpg"
  },
  {
    id: 2,
    name: "Oración y fe",
    artist: "Joel Flores",
    imgUrl: "/covers/oracion4.jpg"
  },
  {
    id: 3,
    name: "Perdón de los pecados",
    artist: "Joel Flores",
    imgUrl: "/covers/cruz.jpg"
  },
  {
    id: 4,
    name: "La segunda venida",
    artist: "Joel Flores",
    imgUrl: "/covers/segundaVenida2.jpg"
  },
  {
    id: 5,
    name: "La ley de Dios",
    artist: "Joel Flores",
    imgUrl: "/covers/mandamientos2.jpg"
  },
  {
    id: 6,
    name: "El día de descanso",
    artist: "Joel Flores",
    imgUrl: "/covers/sabado3.jpg"
  },
  {
    id: 7,
    name: "El bautismo",
    artist: "Joel Flores",
    imgUrl: "/covers/bautismo2.jpg"
  },
 ];
export async function GET () {
  return new Response(
    JSON.stringify(courses)
  )
}