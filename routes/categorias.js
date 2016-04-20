var express = require('express');
var router = express.Router();


var categorias = [
		{
			"categoria": "Gafas de Sol",
			"subcategorias": ["RayBan", "Arnette", "Vogue", "Carrera"]
		},
		{
			"categoria": "Coches",
			"subcategorias": ["Mercedes", "Seat", "Honda", "Renault"]
		}
		
		
	]


/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log("ME llaman");
	var arrayRes = [];

	for (i=0; i<categorias.length; i++){
		if(req.body.categoria == categorias[i].categoria){
			arrayRes.push(categorias[i]);
		}

	}

	if(arrayRes.length == 0){
		res.status(404).json({result: false, err: "Categoría no encontada"});
	}else{
		res.json({result: true, rows: arrayRes});
	}

});

module.exports = router;
