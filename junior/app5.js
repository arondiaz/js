// Arrays

let coins = ["btc", "eth", "usdt", "sol"]

 document.write(coins)

 document.write(`${coins[0]} to 100.000k in a few years`);


 let pc = {
    micro: "Intel I3",
    ram: "16GB",
    ssd: "512GB"
 }

//  let pc2 = ["Intel I3", "16GB", "512GB"]

 let micro = pc["micro"]
 let ram = pc["ram"]

let components = ` micro ${micro} and <br> ${ram} of ram`

 document.write(components);