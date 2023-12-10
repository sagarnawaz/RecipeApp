// IEFE immediately invoked function expressio
(async function(){
    const response = await fetch("./recipes.json");
    const recipes = await response.json();
    const inputElem = document.getElementById('searchInput');
    const btnElem = document.getElementById('searchBtn');

    function search(){
        const query = inputElem.value;
        const results = recipes.filter(function (recipe){
            return (recipe.title.toLowerCase().includes(query)) ||
            recipe.ingredients.join("").toLowerCase().includes(query)


        });
    }
    btnElem.addEventListener("click", search);

});