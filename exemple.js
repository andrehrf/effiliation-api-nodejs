/**
 * Effiliation API interface for Node.js
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 * @see API Key - http://www.efiliacao.com.br/affiliev2/secure/profile.html?tab=identifiants
 */

"use strict";

let Effiliation = require("./index.js"),
    effiliation = new Effiliation("9veMBNawL2DBPc3znQNzmKXKUMwIe2YH");
        
/*cityads.report("statistics-rate", "event_time_day", "2016-10-01", "2016-11-18", function(err, result){
    console.log(result.data);
});
    
cityads.deeplink("https://www.amomuito.com/", 8065, (err, url) => {
    console.log(url);//http://cityadspix.com/click-DQFB8U6A-PNLJQTEF?url=https%3A%2F%2Fwww.amomuito.com%2F
});*/

