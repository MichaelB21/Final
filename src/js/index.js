console.log("connected");
const key = "7d338618d7a681b99d8449aee6bb16e58f0677b9";

const query = async function () {
    try { 
        const response = await fetch(
            'https://api.nomics.com/v1/markets?key=7d338618d7a681b99d8449aee6bb16e58f0677b9'
            );
        const data = await response.json();
        data.results.forEach((coins) => {
            DOMSelectors.grid.insertAdjacentHTML;
                ("beforeend", 
                <div class="coin-icon">
                    <div class="coin-icon-front">
                        <img
                            src="${coin.excahnge}"
                            alt=""
                            class="icon"
                        />
                    </div>
                        <h3 class="movie-card-header">${coin.exchange}</h3>
                    <div class="name">
                        </div>
                    <div class="cost">
                        <p class="cost-name">Market Price</p>
                        <p class="cost">${coin.market}</p>
                    </div>
                </div>
                )},
         console.log(coins))
             } catch (error) {
        console.log(error);
        alert(Error);
    }
};
query(); 

