/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Ashley Miles",
				Photo: "ashley.jpg",
				Quote: "Kind heart, fierce mind and brave spirit",
				Age: 21,
				Occupation: "Estudiante de Erasmus",
				Family: "En una relación a distancia",
				Location: "Granada (Centro)",
				Character: "Buenos momentos en compañía",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Destacar entre sus compañeros de clase", "Viajar por toda España", "Crear un canal de make-up en Youtube"],
				Frustrations: ["No sabe si volver a EEUU o quedarse en España", "No encontrar trabajo al acabar sus estudios"],
				Bio: "Estudiante de Erasmus proveniente de EEUU, del estado de Utah y que viene a Granada a cursar su cuarto curso de Marketing en la UGR. Tiene muchos amigos tanto en EEUU como en Granada, adora las actividades al aire libre y documentarlo todo en sus RRSS. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "La familia de Ashley está pagando su Erasmus y por ello no dispone de mucho dinero en este momento. Sin embargo, quiere cumplir a toda costa su meta de viajar por todos los rincones de España.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Monica Suarez",
				Photo: "woman.png",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 17,
				Occupation: "Searching for a cure for the Empress",
				Family: "No parents, only family are the people who raised him.",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["The goals this user hopes to achieve.", "A task that needs to be completed.", "A life goal to be reached.", "An experience to be felt."],
				Frustrations: ["The frustrations this user would like to avoid.", "The obstacle that prevents the user from achieving their goals.", "The problems with the solutions already available.", "The product or service which does not currently exist."],
				Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])