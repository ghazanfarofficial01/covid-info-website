let card_content = document.getElementById("card-content");
let btn = document.querySelector(".btn");
function getCovidData() {
  fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4e7f27df49mshda7c8800f6248a5p105dadjsn8fe8e66c4db1",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((Data) => {
      // console.log(Data.response[0].cases.new);
      console.log(Data.response[0].country);
      let info = Data.response;
      let newHtml = "";
      info.forEach((element, index) => {
        let rawHtml = `   <div id="card"
                                  class="
                                    card
                                    shadow p-3 mb-5 bg-body rounded
                                    mb-5
                                    bg-body
                                    rounded
                                    border 
                                    col-4
                                    mx-3
                                  
                                  "
                                  style="width: 18rem"
                                >
                           
                              <div class="card-header fw-normal fs-4 font-monospace">${info[index].country}</div>
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                  New Cases - <span id="new_cases" class="data fw-bold">${info[index].cases.new}</span>
                                </li>
                                <li class="list-group-item">
                                  Recent Deaths - <span class="data fw-bold">No info</span>
                                </li>
                                <li class="list-group-item">
                                  Total Cases - <span id="total_cases" class="data fw-bold">${info[index].cases.total}</span>
                                </li>
                                <li class="list-group-item">
                                  Total Deaths -
                                  <span id="total_deaths" class="data fw-bold">${info[index].deaths.total}</span>
                                </li>
                              </ul>
                            </div>
                              `;
        newHtml += rawHtml;
        card_content.innerHTML = newHtml;
      });
    });
}
getCovidData();

btn.addEventListener("click", () => {
  alert("This feature will work soon");
});
