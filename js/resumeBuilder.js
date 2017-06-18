/*

This is empty on purpose! Your code to build the resume will go here.
 */
 


	var email= "nicola.gallo89@gmail.com";
	var pictureURL= "images/photo.jpg";
	
	
	var bio= {
	"firstName": "Nicola",
	"secondName":"Gallo",
	"role":"Software developer",
	"photo": pictureURL,
	"skills":["Javascript", "AngularJS","HTML","CSS"],
	"contacts":{
		"email":"nicola.gallo89@gmail.com",
		"mobile":"3920241689",
		"github":"nicola.gallo",
		"twitter":"ilGa11o",
		"location":"Via croce 18a"
	},
	"welcomeMessage": "Welcome in my resume",
	};
	
	
	
	var education={
	
	"schools":[{
	"name":"Liceo scientifico A. Gatto",
	"location":"Agropoli,SA,Campania,Italy",
	"degree":"Secondary schools",
	"graduation":"86/100",	
	"dates":"2003-2008",
	"url":"",
	"majors":[]
	
	
	},{
	"name":"Università degli studi di Salerno",
	"location":"Salerno,Campania,Italy",
	"degree":"Bachelor Degree",
	"graduation":"91/110",	
	"dates":"2008-2013",
	"url":"",
	"majors":[]
	
	}
	],
	"onlineCorses":[{
	"name":"English course",
	"level":"B.1.1",
	"schools":"Speex",
	"startDate":"2016",
	"endDate":"2016"
	
	
	
	}
	
	]
		
	}
	var work={
	"jobs":[
	
	{
	"employer": "Ericsson",
	"title": "Software developer",
	"location": "Naples, Italy",
	"dates":"2015- present",
	"description":"Working mainly on Business System Support (BSS).Back-end & Front End Developer for business applications, order managment and catalogs."
	
	},
	{
	"employer": "KES",
	"title": "Software developer",
	"location": "Naples, Italy",
	"dates":"2014-2015",
	"description":"Working as a consultant for Ericsson during this period I've worked in various development teams for different projects as Altamira by Telefonica and  N&SIS for h3g Italy."
	
	}
	]
	
	}
	
	var projects={
	"projects":[{
	"title":"DTC Lab",
	"dates":"",
	"description":"",
	"images":["URL1","URL2","URL3"]
	
	
	
	}]
	}
	
	
	
	
	
	


	$("#header").append(HTMLheaderName.replace("%data%", bio.firstName+" "+bio.secondName));
	
	
	$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	
	$("#header").append(HTMLbioPic.replace("%data%", bio.photo));
	
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	
	
	$("#header").append(HTMLskillsStart);
	for(var s=0; bio && bio.skills && s < bio.skills.length ; s++){
		$("#header").append(HTMLskills.replace("%data%", bio.skills[s]));
	}

	
	for(var i=0; education && education.schools && i< education.schools.length; i++){
	$( "#education").append(HTMLschoolStart.replace("%data%","TODO"));
	$( "#education").append(HTMLschoolName.replace("%data%",education.schools[i].name));
	$( "#education").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
	$( "#education").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
	$( "#education").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
	$( "#education").append(HTMLschoolMajor.replace("%data%",education.schools[i].major));
	}
	
	
	var displayWork = function (){
	for (var j=0; work && work.jobs && j< work.jobs.length; j++){
	$( "#workExperience").append(HTMLworkStart);
	//$( "#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[j].employer));
	var formattedEmployer =HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
	//$( "#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[j].title));
	var fromattedTitle=HTMLworkTitle.replace("%data%",work.jobs[j].title);
	var formattedEmployerTitle= formattedEmployer + fromattedTitle;
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[j].dates);
	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[j].location);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[j].description);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	}

	
	
	
	//$( "#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[j].dates));
	//$( "#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[j].location));
	//$( "#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[j].description));
	
	
	}

	
