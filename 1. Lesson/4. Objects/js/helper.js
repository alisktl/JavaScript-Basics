var name = "Alisher";
var role = "Developer";
var contactInfo = {"mobile": "+77777538583", "email": "alisktl@gmail.com"};
var pictureUrl = "http://google.com/myPicture.png";
var welcomeMessage = "Hello!";
var skills = ["python", "javaScript"];

var me = {
	"name": name,
	"role": role,
	"contactInfo": contactInfo,
	"pictureUrl": pictureUrl
};

me.skills = skills; // dot notation
me["welcomeMessage"] = welcomeMessage; // bracket notation

console.log(me);
