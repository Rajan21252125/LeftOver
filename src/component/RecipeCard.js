import CustomImage from "./CustomImage";

export default function RecipeCard({recipe}) {
    return (
        <div>
            <div className="recipe-card">
                <CustomImage imgSrc={recipe.image} pt="65%" />
                <div className="recipe-card-info">
                    <img className="author-img" src={recipe.authorImg} alt=""></img>
                    <p className="recipe-title">{recipe.title}</p>
                    <p className="recipe-desc">lorem xdjiso woeijdisojc oijdoijsdo ojdsoijdos ojdso do ;jsd </p>
                    <a className="view-btn" href="#!">VIEW RECIPE</a>
                </div>
            </div>

        </div>
    )
}
