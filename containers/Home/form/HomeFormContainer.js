import React, { Component } from 'react'
import urlEncodeParams from '%/factory/urlEncodeParams'
import Form from '~/Home/Hero/Form/index'
import fetch from 'isomorphic-fetch'
import { getNavigatorCoords, degreeToCardinal } from 'geo-loc-utils'

class HomeFormContainer extends Component {
  constructor () {
    super()
    this.fetchingData = this.fetchingData.bind(this)
    this.fetchModels = this.fetchModels.bind(this)
    this.fetchMakes = this.fetchMakes.bind(this)
    this.carTypeSelect = this.carTypeSelect.bind(this)
    this.makeSelect = this.makeSelect.bind(this)
    this.modelSelect = this.modelSelect.bind(this)
    this.findLatLng = this.findLatLng.bind(this)
    this.fetchingLatLong = this.fetchingLatLong.bind(this)
    this.getAddress = this.getAddress.bind(this)
    // this.handleSelect = this.handleSelect.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.urlParams = {
      car_type: '',
      latitude: '',
      longitude: '',
      address: '',
      make: '',
      model: ''
    }

    this.state = {
      refreshURL: '',
      models: [],
      makes: [],
      carType: '',
      selectedMake: null,
      selectedModel: null,
      loadingModels: false,
      loadingMakers: false,
      latitude: '',
      longitude: '',
      address: ''
    }
  }

  fetchingData (url) {
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      })
  }

  fetchModels (make) {
    this.setState({ loadingModels: true })
    this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&facets=model|0|60&make=${make}&rows=00`)
      .then(models => {
        if (models.facets.model) {
          this.setState({ models: models.facets.model })
          this.setState({ loadingModels: false })
        }
      })
  }

  fetchMakes () {
    this.setState({ loadingMakers: true });
    this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&facets=make|0|60&rows=0`)
      .then(makes => {
        if (makes.facets.make) {
          this.setState({ makes: makes.facets.make })
          this.setState({ loadingMakers: false });
        }
      })
  }

  carTypeSelect (value) {
    this.urlParams.car_type = value

    this.setState({
      carType : value
    }, () => {
      this.refreshURL()
    })
  }

  makeSelect (value) {
    this.urlParams.make = value

    this.setState({
      selectedMake: value
    }, () => {
      this.refreshURL()
    })

    this.fetchModels(value)
  }

  modelSelect (value) {
    this.urlParams.model = value

    this.setState({
      selectedModel: value
    }, () => {
      this.refreshURL()
    })
  }

  findLatLng (lat, lng, address) {
    this.urlParams.latitude = lat,
    this.urlParams.longitude = lng
      this.urlParams.address = address

    this.setState({
      latitude: lat,
      longitude: lng,
      address: address
    }, () => {
      this.refreshURL()
    })
  }

    fetchingLatLong () {
    //LOGIC to GET USER LOCATION
      getNavigatorCoords()
          .then(position => {
            let lat = position.latitude
            let lng = position.longitude
            this.urlParams.latitude = lat,
            this.urlParams.longitude = lng
              this.setState({
                  latitude: lat,
                  longitude: lng,
              }, () => {
                  this.getAddress()
              })
          })
  }

    getAddress(){
        this.fetchingData(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&result_type=locality&sensor=true&key=AIzaSyB4sYQfdiOZh3izO23839OZjkdZBWUMrTs`)
            .then(results => {
                if (results["results"][0]) {
                    this.urlParams.address = results["results"][0].formatted_address
                    this.setState({
                        address: results["results"][0].formatted_address
                    })
                } else {
                    alert("No results found");
                }
            })
    }

  refreshURL () {
    let newURL = this.state.refreshURL

    this.setState({
      refreshURL: urlEncodeParams(this.urlParams)
    }, () => {
      window.history.pushState(this.state, 'Marketcheck', '/?' + this.state.refreshURL)
    })
  }

  submitSearchSession (e, state) {
    e.preventDefault()

    localStorage.removeItem("searchSession")
    sessionStorage.removeItem("searchSession")
    sessionStorage.setItem("searchSession", JSON.stringify(this.state))
    window.location.href = "/srp?" + this.state.refreshURL;
  }

  componentDidMount () {
    this.fetchMakes()
    // this.fetchingLatLong()
    // this.getAddress()
  }

  render () {
    return (
      <Form {...this.state}
        carTypeSelect={this.carTypeSelect}
        makeSelect={this.makeSelect}
        modelSelect={this.modelSelect}
        findLatLng={this.findLatLng}
        latitude={this.state.latitude}
        longitude={this.state.longitude}
        address={this.state.address}
        onSubmit={this.submitSearchSession.bind(this)}
      />
    )
  }
}

export default HomeFormContainer
