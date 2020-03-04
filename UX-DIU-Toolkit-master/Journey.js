/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ashley Miles",
                Photo: "ashley.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere encontrar un piso para entrar a vivir durante su estancia de Erasmus en España",
                touch1: "ordenador",
                feel1: "3",
                con1: "no sabe por dónde empezar a buscar ",
                ima1: "cartoon-why.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca y descarga la aplicación Badi",
                touch2: "movil(Badi)",
                feel2: "4",
                con2: "hay muchas opciones y Ashley debe pararse a pensar en qué busca concretamente en una habitación",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Selecciona un piso muy acogedor en el centro. Con un buen precio y con muchas comodidades",
                touch3: "móvil (Badi)",
                feel3: "5",
                con3: "Debe asegurarse de que el anuncio es fiable. Para ello, selecciona la opción enviar consulta al anunciante.",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide buscar otros pisos de características similares",
                touch4: "móvil (Badi)",
                feel4: "1",
                con4: "Se percata de que la habitación está duplicada en la aplicación. Además, nadie responde cuando Ashley envía una consulta al anunciante.",
                ima4: "cartoon-crying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra fácilmente la opción para denunciar una habitación por estafa o duplicación.",
                touch5: "móvil (Badi)",
                feel5: "2",
                con5: "Ha perdido un poco la confianza en la comunidad de usuarios de Badi",
                ima5: "cartoon-phoneAssistan.jpg",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Encuentra otra habitación rápidamente, donde el propietario es muy amable y responde al momento",
                touch6: "móvil(Badi)",
                feel6: "4",
                con6: "Debe esperar 72h hasta que se confirma su reserva. El pago, junto con la fianza, estará retenido durante ese tiempo.",
                ima6: "cartoon-shaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



