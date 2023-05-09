from flask import Flask, render_template, request
from flask_cors import CORS

import joblib
from model import get_recipe_recommendations

app = Flask(__name__, template_folder='templates')
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the model
model = joblib.load('recipe_rec.joblib')

from flask import jsonify

@app.route('/api/recommend', methods=['POST'])
def api_recommend():
    # Get the user input from the request body
    data = request.get_json()
    ingredients = data['ingredients']

    # Get recipe recommendations based on the user input
    recommendations = get_recipe_recommendations(ingredients)

    # Return the recommendations as a JSON response
    return jsonify(recommendations)



if __name__ == '__main__':
    app.run(debug=True)
