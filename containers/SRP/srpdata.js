import FetchingData from '%/factory/fetchingData'

var srpData = (params = {}) => {
	return {
		// console.log(params)
		filters: {
			car_type: params.carType ? params.carType : 'used',
			radius: params.distance && params.distance < 501 ? params.distance : 25,
			price_range: (params.price ? params.price.min : 0) + "-" + (params.price ? params.price.max : 10000000),
			miles_rage: (params.milesRange ? params.milesRange.min : 0) + "-" + (params.milesRange ? params.milesRange.max : 10000000),
			deal: params.dealRating ? params.dealRating : '',
			make: params.makeList ? params.makeList : (params.selectedMake ? params.selectedMake : []),
			model: params.modelList ? params.modelList : (params.selectedModel ? params.selectedModel : []),
			year: params.year && params.year.length > 0 ? parseInt(params.year) : '',
			seller_type: params.sellerType ? params.sellerType : 'dealer',
			exterior_color: params.color ? params.color : '',
			transmission: params.transmission ? params.transmission : '',
			body_type: params.bodyType ? params.bodyType : '',
			trim: params.trim ? params.trim : '',
			drivetrain: params.drivetrain ? params.drivetrain : '',
			cylinders: params.cylinders ? params.cylinders : '',
			fuel_type: params.fuelType ? params.fuelType : '',
			features: [],
			latitude: params.latitude ? params.latitude : '-32.78',
			longitude: params.longitude ? params.longitude : '79.99',
			last_seen_at: params.dayListed ? params.dayListed : 0,
			facets: 'transmission,trim,drivetrain,cylinders,fuel_type,body_type,year,model,exterior_color,seller_type,make',
			stats: 'miles,price',
			start: params.start ? params.start : 0,
			rows: params.rows ? params.rows : 10,
			sort_by: params.sort_by ? params.sort_by : '',
			sort_order: params.sort_order ? params.sort_order : '',
            address: params.address ? params.address : '',
		},
		location: {
			address: params.address ? params.address : '',
			latitude: params.latitude ? params.latitude : '-32.78',
			longitude: params.longitude ? params.longitude : '79.99'
		},
		modelsList: params.models ? params.models : [],
        makesList: params.makes ? params.makes : [],
	}
}

export default srpData
