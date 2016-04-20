var express = require('express');
var router = express.Router();


var categorias = [
		{
			"id": "1",
			"categoria": "Gafas de Sol",
			"subcategorias": ["RayBan", "Arnette", "Vogue", "Carrera"]
		},
		{
			"id": "2",
			"categoria": "Coches",
			"subcategorias": ["Mercedes", "Seat", "Honda", "Renault"]
		}
		
		
	]


/* GET users listing. */
router.get('/:id', function(req, res, next) {
	console.log("ME llaman");
	var arrayRes = [];

	for (i=0; i<categorias.length; i++){
		if(req.params.id == categorias[i].id){
			arrayRes.push(categorias[i]);
		}

	}

	if(arrayRes.length == 0){
		res.status(404).json({result: false, err: "Categoría no encontada"});
	}else{
		res.json({result: true, rows: arrayRes});
	}

});

router.get('/', function(req, res, next) {
	
	res.json({result: true, rows: categorias});
	

});

module.exports = router;
