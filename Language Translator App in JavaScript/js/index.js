const qs = require("querystring");
const http = require("https");

const options = {
	"method": "POST",
	"hostname": "google-translate1.p.rapidapi.com",
	"port": null,
	"path": "/language/translate/v2",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"Accept-Encoding": "application/gzip",
		"X-RapidAPI-Key": 
		"X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
        let rawresult = body.toString();
        let result = JSON.parse(rawresult).data.translations[0].translatedText
        console.log(result);
	});
});

req.write(qs.stringify({q: 'Hello, world!', target: 'es', source: 'en'}));
req.end();