
var count = 1;

let root = document.documentElement;

function seyfeCevir(){
	
	if (count % 2 == 0) {
		var x = seyfeQaytar();
	}else{

		// root.style.setProperty('--opacity', 1);

		root.style.setProperty('--position', 'absolute');

	  	root.style.setProperty('--name', 'example');

	  	root.style.setProperty('--top', 0 + 'px');

	  	root.style.setProperty('--overflow',  'all');

	  	root.style.setProperty('--visibility',  'auto');

	  	// root.style.setProperty('--display', 's');

	}		

  	

  	count++;

  	console.log(count);
}


function seyfeQaytar(){


	root.style.setProperty('--position', 'absolute');

  	root.style.setProperty('--name', 'qaytar');

  	root.style.setProperty('--top', 8000 + 'px');

  	root.style.setProperty('--overflow',  'hidden');

  	root.style.setProperty('--visibility',  'hidden');

  	// root.style.setProperty('--opacity', 0);

  	// root.style.setProperty('--position', 'relative');

}




function videoOynat(){

	root.style.setProperty('--videoDisplay', 'all');

	root.style.setProperty('--fontSizeIcon', 0 + 'px');

	root.style.setProperty('--widthvideo', 0 + 'px');

	// root.style.setProperty('--widthSag', 0 + 'px');

}


var saygac = 1;

function sola(){

	if (saygac % 2 == 0) {
		var s = sola2()
	}else{
		root.style.setProperty('--left3', 0 + 'px');

		root.style.setProperty('--left4', 500 + 'px');

		root.style.setProperty('--aName3', 'slideFor3');

		root.style.setProperty('--aName4', 'slideFor4');

		root.style.setProperty('--left1', 1000 + 'px');

		root.style.setProperty('--left2', 1500 + 'px');

		root.style.setProperty('--aName1', 'slideFor1');

		root.style.setProperty('--aName2', 'slideFor2');	
	
	}

	saygac++;

	console.log(saygac)
}



function sola2(){
		root.style.setProperty('--left1', 0 + 'px');

		root.style.setProperty('--left2', 500 + 'px');

		root.style.setProperty('--left3', 1000 + 'px');

		root.style.setProperty('--left4', 1500 + 'px');

		root.style.setProperty('--aName1', 'slideFor1x');

		root.style.setProperty('--aName2', 'slideFor2x');

		// root.style.setProperty('--left3', 1000 + 'px');

		// root.style.setProperty('--left4', 1500 + 'px');

		root.style.setProperty('--aName3', 'slideFor3x');

		root.style.setProperty('--aName4', 'slideFor4x');	

}


function saga(){
	if (saygac % 2 != 0) {
		
		root.style.setProperty('--left1', 1000 + 'px');

		root.style.setProperty('--left2', 1500 + 'px');

		root.style.setProperty('--left3', 0 + 'px');

		root.style.setProperty('--left4', 500 + 'px');

		root.style.setProperty('--aName1', 'slideFor1');

		root.style.setProperty('--aName2', 'slideFor2');

		// root.style.setProperty('--left3', 1000 + 'px');

		// root.style.setProperty('--left4', 1500 + 'px');

		root.style.setProperty('--aName3', 'slideFor3');

		root.style.setProperty('--aName4', 'slideFor4');
		
	}else{
		var d = sola2()	
	}

	saygac++;

	console.log(saygac)

}



