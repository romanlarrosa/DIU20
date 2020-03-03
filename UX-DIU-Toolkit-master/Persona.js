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
				Name: "Guillermo Nieto",
				Photo: "guillermo.jpg",
				Quote: "Tranquilo y hogareño",
				Age: 27,
				Occupation: "Buscando un empleo",
				Family: "Su padre y su madre, viven en su ciudad natal.",
				Location: "Ahora mismo en Granada, pero quiere independizarse e irse a vivir a Madrid.",
				Character: "Tímido, pero le encanta pasar tiempo con sus amigos más cercanos.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Conseguir independizarse y comenzar una vida por su cuenta", "Encontrar un piso con compañeros afines", "Conseguir el trabajo de sus sueños"],
				Frustrations: ["No ser suficientemente bueno en las entrevistas de trabajo", "No conseguir conectar con sus futuros compañeros de piso", "Quedarse sin dinero antes de encontrar un trabajo"],
				Bio: "Guillermo ha estudiado en granada la carrera de Telecomunicaciones, y ha finalizado tambien un máster. Tras trabajar un par de años como becario en algunas empresas de su ciudad, se dispone a buscar un empleo en el que pueda desarrollarse más personalmente. Siempre ha vivido con sus padres por lo que no ha tenido que convivir mucho tiempo con otra gente, y además es muy tímido y le encanta que su casa sea su remanso de paz y concentración. Guillermo necesita mucha confianza para poder desarrollar una relación con alguien, y le encantaría que sus compaleros de piso se convirtiesen tambien en sus amigos. Necesita un piso económico, por el momento, ya que hasta que encuentre un empleo, deberá subsistir con el dinero que ha ahorrado trabajando como becario. Guillermo necesita encontrar el piso lo antes posibe, ya que quiere empezar a buscar su futuro empleo cuanto antes.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "A Guillermo no le gusta pasar demasiadas horas innecesarias al ordenador, y mucho menos al móvil, que usa solo para lo necesario, pero está dispuesto a lo que sea para conseguir sus metas" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])