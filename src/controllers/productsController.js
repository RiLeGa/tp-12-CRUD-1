const fs = require('fs');
const path = require('path');


const productos = require("../data/productsDataBase.json")


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		return res.render('products',{
			productos,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = +req.params.id

		let detalle = productos.find(detalle => detalle.id === id)

		return res.render('detail',{
			detalle,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		return res.send('Producto creado')
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const id = +req.params.id;
		let edit = productos.find(producto => producto.id === id);
		return res.render('product-edit-form', {
			toEdit : edit
		})
	},
	// Update - Method to update
	update: (req, res) => {
		return res.send('Producto modificado')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		return res.send('Producto eliminado')
	}
};

module.exports = controller;