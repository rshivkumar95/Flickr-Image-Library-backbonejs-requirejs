require.config({

	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		backboneLocalstorage: {
			deps: ["backbone"],
			exports: "Store"
		}
	},
	paths: {
		jquery: "../../node_modules/jquery/dist/jquery",
		underscore: "../../node_modules/underscore/underscore",
		backbone: "../../node_modules/backbone/backbone",
		config: "config",
		gallery: "../../modules/gallery/js/gallery",
		search: "../../modules/search/js/search",
		imageCollection: "../../modules/gallery/js/collections/imagelist",
		imageModel: "../../modules/gallery/js/models/image",
		imageModelView: "../../modules/gallery/js/views/imageview",
		imageCollectionView: "../../modules/gallery/js/views/imagesview",
		text: "../../node_modules/text/text",
		searchView: "../../modules/search/js/views/searchview",
		start: "view/startview"
	}
});

require(["start"], function (start) {
	"use strict";
    start.renderStart({
		contentWrapper: "content",
		searchWrapper: "search-area",
		galleryWrapper: "gallery-area"
	});

	start.renderStart({
		contentWrapper: "content2",
		searchWrapper: "search-area",
		galleryWrapper: "gallery-area"
	});

	start.renderStart({
		contentWrapper: "content3",
		searchWrapper: "search-area",
		galleryWrapper: "gallery-area"
	});

	start.renderStart({
		contentWrapper: "content4",
		searchWrapper: "search-area",
		galleryWrapper: "gallery-area"
	});
});