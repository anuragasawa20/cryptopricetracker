
const fetchData = async () => {

    const response = await axios.get('http://localhost:8080/')
    const apiTicker = response.data
    console.log(`GET list users`, apiTicker)
    return apiTicker;

}


const mainFunction = async () => {
    const apiValues = await fetchData()
    await loadDataToTable(document.querySelector("table"), apiValues);
}

mainFunction();

// const arr = [];
// apiValues.then(val => {
//     for (let i = 0; i < val.length; i++) {
//         arr.push(val[i]);
//     }
// });

// console.log(apiValues);


const loadDataToTable = (table, apiValues) => {
    const tablebody = table.querySelector("tbody");
    tablebody.innerHTML = "";
    let rowcount = 1;
    for (const row of apiValues) {
        console.log(row);
        const rowElement = document.createElement("tr");
        let cellColumn = ["name", "last", "buy", "sell", "volume", "base_unit"];
        const indexElement = document.createElement("td");
        indexElement.textContent = rowcount;
        rowcount++;
        rowElement.appendChild(indexElement);
        for (const cellText of cellColumn) {
            const cellElement = document.createElement("td");
            cellElement.textContent = row[cellText];
            rowElement.appendChild(cellElement);
        }
        tablebody.appendChild(rowElement);
    }
}



// document.querySelectorAll()

//     < html >
//     "< tr >
//     < td class="align-middle" >
//         <h4 class="table-text">1</h4>
//                             </ >
//                             <td class="align-middle"><a target="_blank"
//                                     href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn">
//                                     <h4 class="table-text"><img
//                                             src="data:image/png;base64,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"
//                                             class="exchange-logo"><span class="exchange-name ">WazirX</span></h4>
//                                 </a></td>
//                             <td class="align-middle">
//                                 <h4 class="table-text">₹ 24,29,508</h4>
//                             </td>
//                             <td class="align-middle">
//                                 <h4 class="table-text"><span>₹ 24,29,507 / ₹ 24,29,508</span></h4>
//                             </td>
//                             <td class="align-middle">
//                                 <h4 class="table-text color-red">-2.67 %</h4>
//                             </td>
//                             <td class="align-middle">
//                                 <h4 class="table-text color-red">▼ ₹ 66,530</h4>
//                             </td>
//                         </tr > "
//                         </html >