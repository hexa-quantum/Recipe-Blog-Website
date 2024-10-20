const recipeList = document.getElementById('recipe-list');

recipeList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
        recipeList.style.display = 'none';
        const main = document.getElementById('main-recipe');
        main.style.display = 'block';
        const recipetitle = document.getElementById('recipeTitle');
        recipetitle.textContent = event.target.parentElement.children[0].textContent;
        const image = document.getElementById('recipeImage');
        image.src = event.target.parentElement.children[1].src;
        const description = document.getElementById('recipeDescription');
        description.textContent = event.target.parentElement.children[3].textContent;
        const ingredientP = document.getElementById('ingredientsP');
        ingredientP.textContent = event.target.parentElement.children[4].textContent;
        const ingredients = document.getElementById('ingredients');
        const actualIn = event.target.parentElement.querySelector('ul');
        actualIn.querySelectorAll('li').forEach((li) => {
            ingredient = document.createElement('li');
            ingredient.textContent = li.textContent;
            ingredients.appendChild(ingredient);
        });
        const instructionsP = document.getElementById('instructionsP');
        instructionsP.textContent = event.target.parentElement.children[6].textContent;
        const instructions = document.getElementById('instructions');
        const actualIns = event.target.parentElement.querySelector('ol');
        actualIns.querySelectorAll('li').forEach((li) => {
            instruction = document.createElement('li');
            instruction.textContent = li.textContent;
            instructions.appendChild(instruction);
        });
        const closeBtn = document.getElementById('close-recipe');
        closeBtn.addEventListener('click', () => {
            recipeList.style.display = 'flex';
            main.style.display = 'none';
        });
    }
});
