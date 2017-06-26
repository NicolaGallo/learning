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
	"name":"Universit&agrave degli studi di Salerno",
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
			"employer": "Ericsson",
			"title": "Software developer",
			"location": "Lima, Peru",
			"dates":"March 2017- May 2017",
			"description":"Buiding Order Capture Application Design from customer requirments, writing HLD, LLD "
		},


		{
			"employer": "Ericsson",
			"title": "Software developer",
			"location": "Toronto, Canada",
			"dates":"April 2016- May 2016",
			"description":"Training on the job with experienced peoples in Ericsson Order Care Product headquarter in Toronto about new Order Capture system IWS.."
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
	"projects":[
		{
		"title":"AMX peru",
		"dates":"2017-present",
		"description":"Working in a design team, that builds from customer requirements, a complete BSS platform for Claro Peru. I'm the designer of the sales part, handling IWS (part of Ericsson Order care) platform. Build high /low level design documents that contains a full stack (back-end & front-end) order capture solution. Design the integration between Order capture platform and CRM. ",

		"images":["URL1","URL2","URL3"]

		},
		{
			"title":"DTC Lab",
			"dates":"2016-2017",
			"description":"Software developer in a international team. I work to integrate EOC (Ericsson Order Care) and IWS (Integrated Workstation) through custom adapters. Management of Order Capture flows, Customers catalogs and products. Building E2E interaction between Back-end and Front-end.Integration of Order capture Platform with CRM system. ",

			"images":["URL1","URL2","URL3"]


		}
	]
	}



	projects.display =function () {

		for(var t=0; this && this.projects && t< this.projects.length; t++){

			$("#projects").append( HTMLprojectStart);
			$(".project-entry:last").append( HTMLprojectTitle.replace("%data%", this.projects[t].title));
			$(".project-entry:last").append( HTMLprojectDates.replace("%data%", this.projects[t].dates));
			$(".project-entry:last").append( HTMLprojectDescription.replace("%data%", this.projects[t].description));
			//$(".project-entry:last").append( HTMLprojectImage .replace("%data%", this.projects[t].images[0])); // to cycle
		}
		
	}


	
	$("#main").append(internationalizeButton);



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
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
	$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
	$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].major));
	}
	
	
	var displayWork = function (){


	for (var j=0; work && work.jobs && j< work.jobs.length; j++){
	var formattedEmployer =HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[j].title);
	var formattedEmployerTitle= formattedEmployer + formattedTitle;
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[j].dates);
	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[j].location);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[j].description);


	$( "#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	}


	}



displayWork();
projects.display();
$("#mapDiv").append(googleMap);
	
