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
			"description":"Working mainly on Business System Support (BSS).Back-end & Front End Developer for business applications, order managment and catalogs.",
			"companyLogo":"images/EricssonLogo.png"
		},

		{
			"employer": "Ericsson",
			"title": "Software developer",
			"location": "Lima, Peru",
			"dates":"March 2017- May 2017",
			"description":"Buiding Order Capture Application Design from customer requirments, writing HLD, LLD",
			"companyLogo":"images/EricssonLogo.png"

		},
		{
			"employer": "Ericsson",
			"title": "Software developer",
			"location": "Toronto, Canada",
			"dates":"April 2016- May 2016",
			"description":"Training on the job with experienced peoples in Ericsson Order Care Product headquarter in Toronto about new Order Capture system IWS.",
			"companyLogo":"images/EricssonLogo.png"
		},


		{
			"employer": "KES",
			"title": "Software developer",
			"location": "Naples, Italy",
			"dates":"2014-2015",
			"description":"Working as a consultant for Ericsson during this period I've worked in various development teams for different projects as Altamira by Telefonica and  N&SIS for h3g Italy.",
			"companyLogo":"https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/3/000/01f/1c0/2b0c784.png"

		}
	]
	
	}
	
	var projects={
	"projects":[
		{
		"title":"AMX peru",
		"dates":"mar. 2017-Jul.2017",
		"description":"Working in a design team, that builds from customer requirements, a complete BSS platform for Claro Peru. I'm the designer of the sales part, handling IWS (part of Ericsson Order care) platform. Build high /low level design documents that contains a full stack (back-end & front-end) order capture solution. Design the integration between Order capture platform and CRM. ",
		"tecnology":"Microsoft Office,Bizagi Modler,IWS,Ericsson order Care",
		"images":["URL1","URL2","URL3"]

		},
		{
			"title":"DTC Lab",
			"dates":"feb.2016-feb.2017",
			"description":"Software developer in a international team. I work to integrate EOC (Ericsson Order Care) and IWS (Integrated Workstation) through custom adapters. Management of Order Capture flows, Customers catalogs and products. Building E2E interaction between Back-end and Front-end.Integration of Order capture Platform with CRM system. ",
			"tecnology":"",
			"images":["URL1","URL2","URL3"]


		},

		{
			"title":"CDOM-OOREDOO (Oredoo-Tunisia)",
			"dates":"Jul. 2015- Feb. 2017",
			"description":"I am part of the international development team. I'm building business Workflows for Ooredoo's Order Management System using Ericsson's tool ECM (Ericsson Catalog Manager)/EOC(Ericsson Order Care).Development and Low Level Design. Ericsson Velocity Studio, Ericsson Enterprise Product Catalog, SQL, SVN, SOAP.",
			"tecnology":"JAVA EE/SE,WebLogic,Application Server,XML,AJAX,JavaScript,SVN, Eclipse IDE,Toad for Oracle",
			"images":["URL1","URL2","URL3"]


		},
		{
			"title":"New Generation AltamirA (Telefonica- Spain)",
			"dates":"Feb. 2015- Apr. 2017",
			"description":"I am in an international team, I built from scratch a centralized management system for the worldwide offer and catalog of Telefonica.Developing functional use-cases from scratch.",
			"tecnology":"CW Velocity Studio, CW Enterprise Product Catalog, SQL, GIT",
			"images":["URL1","URL2","URL3"]


		},
		{
			"title":"ESoft Mobile",
			"dates":"Jul. 2015- Feb. 2017",
			"description":"Development of the native part of hybrid Android app E-Soft (Ericsson).Integration of the barcode, QR, Aztec codes reader.Push notifications service.",
			"tecnology":"JAVA,Android SDK,Jquery Mobile",
			"images":["URL1","URL2","URL3"]


		},

	]
	}



	projects.display =function () {

		for(var t=0; this && this.projects && t< this.projects.length; t++){

			$("#projects").append( HTMLprojectStart);
			$(".project-entry:last").append( HTMLprojectTitle.replace("%data%", this.projects[t].title));
			$(".project-entry:last").append( HTMLprojectDates.replace("%data%", this.projects[t].dates));
			$(".project-entry:last").append( HTMLprojectDescription.replace("%data%", this.projects[t].description));
		//	$(".project-entry:last").append( HTMLprojectImage .replace("%data%", this.projects[t].images[0])); // to cycle
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
		

	for (var j=0; work && work.jobs && j < work.jobs.length; j++){


	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer =HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[j].title);
	var formattedEmployerTitle= formattedEmployer + formattedTitle;
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[j].dates);
	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[j].location);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[j].description);
	var formattedCompanyLogo=HTMLCompanyLogo.replace("%data%",work.jobs[j].companyLogo);

	$(".work-entry:last").append(formattedCompanyLogo);
	$(".work-entry:last").append(HTMLInfoContainerStart);



	$(".work-info-container:last").append(formattedEmployer);
	$(".work-info-container:last").append(formattedTitle);
	$(".work-info-container:last").append(formattedLocation);
	$(".work-info-container:last").append(formattedDates);
	$(".work-info-container:last").append(formattedDescription);




	}

	}



displayWork();
projects.display();
$("#mapDiv").append(googleMap);
	
