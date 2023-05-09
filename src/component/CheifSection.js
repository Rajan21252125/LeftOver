import CheifCard from "./CheifCard"

export default function CheifSection() {
  const cheif = [
    {
      name: "Junan Carlos",
      img: "/img/top-chiefs/img_1.jpg",
      recipeCount: 10,
      cuisine: "Mexican",
    },
    { 
      name: "Khushi Mishra",
      img: "/img/top-chiefs/img_2.jpg",
      recipeCount: 10,
      cuisine: "Mexican",
    },
    {
      name: "Hema Carlos",
      img: "/img/top-chiefs/img_3.jpg",
      recipeCount: 10,
      cuisine: "Mexican",
    },
    {
      name: "Ankit Carlos",
      img: "/img/top-chiefs/img_4.jpg",
      recipeCount: 10,
      cuisine: "Mexican",
    },
    {
      name: "Tushar Carlos",
      img: "/img/top-chiefs/img_5.jpg",
      recipeCount: 10,
      cuisine: "Mexican",
    },
    {
      name: "Mohit Carlos",
      img: "/img/top-chiefs/img_6.jpg",
      recipeCount: 10,
      cuisine: "Mexican",
    }
  ]
  return (
    <div className="section cheif">
      <h1 className="title">Our Top Chief</h1>
      <div className="top-cheif-container">
        { cheif.map(cheif => <CheifCard key={cheif.name} cheif={cheif} />)}

      </div>
    </div>
  )
}
