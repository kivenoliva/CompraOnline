var express = require('express');
var router = express.Router();


var subcategorias = [
		{
			"idCategoria": "1",
			"id": "1",
			"subcategoria": "RayBan",
		},
		{
			"idCategoria": "1",
			"id": "2",
			"subcategoria": "Carrera",
		},
		{
			"idCategoria": "2",
			"id": "3",
			"subcategoria": "Mercedes",
		},
		{
			"idCategoria": "2",
			"id": "4",
			"subcategoria": "Honda",
		}
		
	]


/* GET users listing. */
router.get('/:idCategoria', function(req, res, next) {
	console.log("ME llaman");
	var arrayRes = [];

	for (i=0; i<subcategorias.length; i++){
		if(req.params.idCategoria == subcategorias[i].idCategoria){
			arrayRes.push(subcategorias[i]);
		}

	}

	if(arrayRes.length == 0){
		res.status(404).json({result: false, err: "Categoría no encontada"});
	}else{
		res.json({result: true, rows: arrayRes});
	}

});

router.get('/', function(req, res, next) {
	
	res.json({result: true, rows: subcategorias});
	

});

module.exports = router;
