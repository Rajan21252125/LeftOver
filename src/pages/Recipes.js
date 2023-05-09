import PreviousSearches from "../component/PreviousSearches"
import RecipeCard from "../component/RecipeCard"

export default function Recipes() {
    const recipes = [
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_1.jpg",
            authorImg:"/img/top-chiefs/img_1.jpg"
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_2.jpg",
            authorImg:"/img/top-chiefs/img_2.jpg"
        },
        {
            title:"Chicken Pan Burger",
            image:"/img/gallery/img_3.jpg",
            authorImg:"/img/top-chiefs/img_3.jpg"
        },
        {
            title:"Chicken Noodles",
            image:"/img/gallery/img_4.jpg",
            authorImg:"/img/top-chiefs/img_4.jpg"
        },
        {
            title:"Chicken Burger",
            image:"/img/gallery/img_5.jpg",
            authorImg:"/img/top-chiefs/img_5.jpg"
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_6.jpg",
            authorImg:"/img/top-chiefs/img_6.jpg"
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_7.jpg",
            authorImg:"/img/top-chiefs/img_1.jpg"
        }
    ].sort(() => Math.random() -0.5)


  return (
    <div>
        <PreviousSearches />
        <div className="recipe-container">
            {/* <RecipeCard /> */}
            {recipes.map((recipe,index) => (
                <RecipeCard key={index} recipe={recipe}/>
            ))}
        </div>
    </div>
  )
}
