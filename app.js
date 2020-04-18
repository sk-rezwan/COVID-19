window.onload = function(){
 getVirusInfo();
}

function getVirusInfo(){
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/20').then(function(resp){ return resp.json() }).then(function(data){
		//console.log(data);
		let population =  data.location.country_population;
		let date =  data.location.last_updated;
		let confirmed =  data.location.latest.confirmed;
		let deaths =  data.location.latest.deaths;

		document.getElementById("population").innerHTML = population.toLocaleString('en');
		document.getElementById("cases").innerHTML = confirmed.toLocaleString('en');
		document.getElementById("deaths").innerHTML = deaths.toLocaleString('en');
		document.getElementById("date").innerHTML = date.substr(0, 10);
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmed))*100).toLocaleString("en") + "%";

	}).catch(function(){
		console.log("error");
	})
	setTimeout(getVirusInfo, 43200000) // 12 hours
}