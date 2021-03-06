import React from 'react'
import urlEncodeParams from '%/factory/urlEncodeParams'

import { getNavigatorCoords, degreeToCardinal } from 'geo-loc-utils'
import {Car, CarPic, CarTitle} from '~/Home/Categories/Cars/Components'
// import CarPic from '~/Home/Categories/Cars/Components'
// import CarTitle from '~/Home/Categories/Cars/Components'


class ImageLinkAnchor extends React.Component {
    constructor (props) {
        super(props)
        this.urlParams = {
            car_type: 'used',
            latitude: '',
            longitude: '',
            address: '',
            body_type: ''
        }
        this.state = {
            refreshURL: '',
            latitude: '',
            longitude: '',
            address: '',
            bodyType: ''
        }

        // this.handleClick = this.handleClick.bind(this)
        this.fetchingData = this.fetchingData.bind(this)
        this.fetchingLatLong = this.fetchingLatLong.bind(this)
        this.getAddress = this.getAddress.bind(this)
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
                    }, () => {
                        this.refreshURL()
                    })
                } else {
                    alert("No results found");
                }
            })
    }


    componentDidMount () {
        this.fetchingLatLong()
    }

    onItemClick (event, data) {
        event.preventDefault()
        // console.log(event)
        this.urlParams.body_type = data.props.link.name

        this.setState({
            bodyType: data.props.link.name,
            refreshURL: urlEncodeParams(this.urlParams)
        }, () => {
            window.history.pushState(this.state, 'Marketcheck', '/?' + this.state.refreshURL)
            localStorage.removeItem("searchSession")
            sessionStorage.removeItem("searchSession")
            sessionStorage.setItem("searchSession", JSON.stringify(this.state))
            window.location.href = "/srp?" + this.state.refreshURL;
        });
    }

    refreshURL () {
        let newURL = this.state.refreshURL
        this.setState({
            refreshURL: urlEncodeParams(this.urlParams)
        }, () => {
            window.history.pushState(this.state, 'Marketcheck', '/?' + this.state.refreshURL)
        })
    }

    render () {
        return (
            <Car onClick={((e) => this.onItemClick(e, this))} >
                <CarPic src={this.props.link.pic} />
                <CarTitle>{this.props.link.name}</CarTitle>
            </Car>
        )
    }
}

export default ImageLinkAnchor
