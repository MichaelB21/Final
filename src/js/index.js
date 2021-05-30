console.log("connected");
const key = "450b08c9-d141-4659-899f-ec287f17ae9a";

const query = async function () {
    try { 
        const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical&api_key=450b08c9-d141-4659-899f-ec287f17ae9a');
        const data = await responseS
        data.results.forEach((coins) => {
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend", 
        //         '<h1 class="header">Cryptocurrency Coins</h1>
        //         <h2class="Cost"> The Cost</h2>
        //             <button class="btn-prev">Previous</button>
        //                 <section class="coin-grid">
        //                  <div class="coin-image"> 
        //                   <div class="coin-image-front">
        //                     <img 
        //                       src="${coins.icon}" 
        //                       alt=""
        //                       class="coin-icon"
        //                     /></div>
        //                 <div class="coin-image-back">
        //                     <h3 class="coin-image-header">${coins.name}</h3>
        //                     <div class="price">
        //                         <p class="${coins.priceUSD}"></p>
        //                     </div>      
        //                 </div>
        //             </div>);
        // })
        console.log(data)
    }catch (error) {
        console.log(error)
        alert(Error)
    }
}
query();}   
