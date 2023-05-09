import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches() {
    const searches = ['pizza','burger','cookies','juice','biryani','salad','ice-cream','lasagana','pudding','pudding','soup']
    return (
        <div>
            <div className="previous-search section">
                <h2>Previous Searches</h2>
                <div className="previous-search-conatiner">
                    {searches.map((search, index) => (<div key={index} style={{ animationDelay: index * 0.1 + "s" }} className="search-item">
                        <p>{search}</p>
                    </div>))}
                    <div className="search-box">
                        <input type="text" placeholder="Search for recipes" />
                        <button className="btn">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
