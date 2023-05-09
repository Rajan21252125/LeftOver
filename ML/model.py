import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import joblib

# Load the recipe dataset
recipes_df = pd.read_csv('recipes.csv')

# Clean the dataset by removing unnecessary columns
recipes_df.drop(columns=["prep_time", "cook_time", "total_time", "yield", "rating",
                 "url", "cuisine_path", "nutrition", "img_src" ], inplace=True)

# Create a bag of words for the ingredients column
cv = CountVectorizer(stop_words='english')
ingredients_matrix = cv.fit_transform(recipes_df['ingredients'])

# Calculate the cosine similarity between the ingredients matrix
cosine_sim = cosine_similarity(ingredients_matrix)


def get_recipe_recommendations(leftover_ingredients):
    if leftover_ingredients is None:
        return []
    leftover_list = leftover_ingredients.split(',')
    recipes_df['cosine_sim'] = recipes_df['ingredients'].apply(lambda x: cosine_similarity
                                                               (cv.transform([x]), cv.transform([leftover_ingredients]))[0][0])
    sorted_df = recipes_df.sort_values('cosine_sim', ascending=False).reset_index()
    recommendations = []
    for i in range(10):
        recommendations.append((i+1, sorted_df.loc[i, 'recipe_name'], round(sorted_df.loc[i, 'cosine_sim'], 3)))
    return recommendations

## Take user input for leftover ingredients
# leftover_ingredients = input("Enter the leftover ingredients separated by commas: ")
# recommendations = get_recipe_recommendations(leftover_ingredients)
# print(recommendations)


## Save the model
# joblib.dump(cosine_sim, 'recipe_rec.joblib')