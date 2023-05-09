import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [ingredients, setIngredients] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/recommend', { ingredients });
      setRecommendations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredients" className="form-label">Enter the leftover ingredients separated by commas:</label>
        <input type="text" id="ingredients" className="form-input" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <button type="submit" className="form-button">Get Recommendations</button>
      </form>

      {Array.isArray(recommendations) && recommendations.length > 0 && (
        <ul className="recommendations-list">
          {recommendations.map((recommendation) => (
            <li key={recommendation[0]} className="recommendation-item">
              <span className="recommendation-rank">{recommendation[0]}.</span> {recommendation[1]} ({Math.round(recommendation[2]*100)}% Match)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeForm;
