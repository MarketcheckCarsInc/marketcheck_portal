import React from 'react'
import { initGA, logPageView } from '%/ga'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'
import fetch from 'isomorphic-fetch'
import Loading from 'react-loading-animation'
import autobind from 'class-autobind'

class Vdp extends React.Component {

  static async getInitialProps({query}) {

    return {vin: query.vin}
  }

  constructor (props) {
    super(props)

    this.myInit = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    this.listingFetch = this.listingFetch.bind(this)
    this.fetchingData = this.fetchingData.bind(this)
    this.fetchScatterData = this.fetchScatterData.bind(this)
    // this.findIdByVIN = this.findIdByVIN.bind(this)
    this.environmentalFriendliness = this.environmentalFriendliness.bind(this)
    this.summaryReport = this.summaryReport.bind(this)
    this.safetyRatings = this.safetyRatings.bind(this)
    this.dealerReviews = this.dealerReviews.bind(this)
    this.resaleValueFetch = this.resaleValueFetch.bind(this)
    this.fuelEfficiencyFetch = this.fuelEfficiencyFetch.bind(this)
    this.getDOMAverage = this.getDOMAverage.bind(this)
    this.historyFetch = this.historyFetch.bind(this)
    this.modelPopularityFetch = this.modelPopularityFetch.bind(this)
    this.averagesFetch = this.averagesFetch.bind(this)
    this.statsFetch = this.statsFetch.bind(this)

    this.state = {
      // initial VIN state
      vin: this.props.vin ? this.props.vin : 'KMHDH4AE1EU134863',
      latitude: 32.75,
      longitude: -116.35,
      vdp: {},
      scatterSimilar: [],
      scatterNational: [],
      scatterYourCar: [],
      averageMarketMiles: '',
      environmentalScores: {},
      summaryReport: [],
      safetyRatings: {},
      dealerReviews: {},
      dealerRatings: {},
      resaleValue: [],
      fuelEfficiency: {},
      localAverage: null,
      nationalAverage: null,
      vinHistory: [],
      modelPopularity: [],
      averages: {},
      stats: {},
      similarModelsGraph: [],
      fetchReady: false
    }
    autobind(this)
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView()
    this.historyFetch(this.state.vin)
    // this.findIdByVIN(this.state.vin)
    this.summaryReport(this.state.vin)
    // this.fetchScatterData(this.state.vin)
    this.environmentalFriendliness(this.state.vin)
    this.safetyRatings(this.state.vin)
    this.resaleValueFetch(this.state.vin)
    this.fuelEfficiencyFetch(this.state.vin)

    this.averagesFetch(this.state.vin)
  }

  findIdByVIN (vin) {

    this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&vin=${vin}`)
    .then(data => {
      if (data.listings) {
        // Get car id so we can use it for the Listing Fetch
        const carID = data.listings[0].id
        // // Get Year, Make, Model, Trim and Body Type so we can use it for the Model Popularity fetch
        // const year = data.listings[0].build.year
        // const make = data.listings[0].build.make
        // const model = data.listings[0].build.model
        // const trim = data.listings[0].build.trim
        // const bodyType = data.listings[0].build.body_type
        // We use the card ID to fetch car listing/VDP
        this.listingFetch(`https://${process.env.API_HOST}/v2/listing/car/${carID}?api_key=${process.env.API_VAR}`)
        // this.modelPopularityFetch(year, make, model, trim, bodyType)
      }
    })
  }

  summaryReport (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/vin_report_summary/car?api_key=${process.env.API_VAR}&vin=${vin}`)
      .then(summaryReport => {
        this.setState({ summaryReport })
      })
  }

  averagesFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/averages/car?api_key=${process.env.API_VAR}&vin=${vin}`)
      .then(averages => {
        this.setState({ averages })
      })
  }

  safetyRatings (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/safety/car?api_key=${process.env.API_VAR}&vin=${vin}`)
      .then(safetyRatings => {
        this.setState({ safetyRatings })
      })
  }

  // Need to get back to this one
  historyFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/history/car/${vin}?api_key=${process.env.API_VAR}`)
      .then(vinHistory => {
          this.setState({ vinHistory })
          if (vinHistory) {
              const carID = vinHistory[0].id
              this.listingFetch(`https://${process.env.API_HOST}/v2/listing/car/${carID}?api_key=${process.env.API_VAR}`)
          }
      })
  }

  environmentalFriendliness (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/economy/car?api_key=${process.env.API_VAR}&vin=${vin}`)
      .then(environmentalScores => {
        this.setState({ environmentalScores })
      })
  }



  listingFetch (url) {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      }).then(data => {
        this.setState({
          vdp: data,
          scatterYourCar: [{x: data.miles, y: data.price}],
          fetchReady: true
        })

        console.log(data.dealer.longitude)
        // Using VDP response we can extract Dealer ID to fetch it's review
        this.dealerReviews(data.dealer.id)
        let latitude = 32.75
        let longitude =  -116.35
         if(data.dealer.latitude && data.dealer.latitude !== null){
             latitude = data.dealer.latitude
         }

        if(data.dealer.longitude && data.dealer.longitude !== null){
            longitude = data.dealer.longitude
        }


        const year = data.build.year
        const make = data.build.make
        const model = data.build.model
        const trim = data.build.trim
        const bodyType = data.build.body_type
        const car_type = data.inventory_type? data.inventory_type : "used"


        this.getDOMAverage(year, make, model, car_type, latitude, longitude)
        this.statsFetch(year, make, model, car_type)
        this.fetchScatterData (year, make, model, car_type)
        this.modelPopularityFetch(year, make, model, trim, bodyType)
      }).catch(error => {
        console.log('error message: ' + error.message)
      })
  }

  // Method to shorten all fetches a bit
  fetchingData (url) {
    return fetch(url, this.myInit)
      .then(response => {
        if (response.status !== 200) {
          console.log('Problem ' + response.status)
        }
        return response.json()
      })
  }

    statsFetch (year, make, model, car_type) {
        this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&year=${year}&make=${make}&model=${model}&car_type=${car_type}&start=1&rows=0&stats=price,miles,dom&latitude=36.778259&longitude=-119.417931&radius=10000`)
            .then(stats => {
                this.setState({ stats: stats['stats'] })
            })
    }

    fetchScatterData (year, make, model, car_type) {

        //
        // this.fetchingData(`https://${process.env.API_HOST}/v1/trends?api_key=${process.env.API_VAR}&vin=${vin}&car_type=used&nodedup=true`)
        this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&year=${year}&make=${make}&model=${model}&car_type=${car_type}&plot=true`)
            .then(response => {
                let averagePrice = 0
                let averageMiles = 0
                const cars = response.listings.filter((car) => {
                  if (parseInt(car.price) > 0 && parseInt(car.miles) > 0 && parseInt(car.miles) < 700000) {
                      return (parseInt(car.price) && parseInt(car.miles))
                  }
                })
                    .map((car) => {
                        averagePrice += parseInt(car.price)
                        averageMiles += parseInt(car.miles)
                        return { x: parseInt(car.miles), y: parseInt(car.price) }
                    })
                // console.log(averagePrice)
                averagePrice = Math.round(averagePrice / cars.length)
                averageMiles = Math.round(averageMiles / cars.length)
                // averageMiles = averageMiles.toFixed(0);
                // console.log(cars)
                this.setState({
                    scatterSimilar: cars,
                    scatterNational: [{x: averageMiles, y: averagePrice}],
                    averageMarketMiles: averageMiles
                })
            })
    }
  resaleValueFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/depreciation/car?api_key=${process.env.API_VAR}&vin=${vin}`)
    .then(resaleValue => {
      // console.log(resaleValue);
      this.setState({ resaleValue: resaleValue.similar_models })
      const similarModels = resaleValue.similar_models
      let currentYear = new Date().getFullYear()
      let dataArray = [
        { name: currentYear, key: 'current_value' },
        { name: currentYear + 1, key: 'one_year_from_now' },
        { name: currentYear + 2, key: 'two_year_from_now' },
        { name: currentYear + 5, key: 'five_year_from_now' }
      ]

      dataArray.forEach(function (dataElement) {
        similarModels.forEach(function (similarModel, index) {
          dataElement['car' + (index + 1)] = similarModel[dataElement.key]
        })
      })
      this.setState({similarModelsGraph: dataArray})
     // console.log(dataArray);
    })
  }

  fuelEfficiencyFetch (vin) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/fuel_efficiency/car?api_key=${process.env.API_VAR}&vin=${vin}`)
      .then(fuelEfficiency => {
        // console.log(resaleValue);
        this.setState({fuelEfficiency})
      })
  }

  getDOMAverage (year, make, model, car_type, latitude, longitude) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&year=${year}&make=${make}&model=${model}&car_type=${car_type}&rows=0&radius=100&stats=dom&latitude=${latitude}&longitude=${longitude}`)
      .then(localAverage => {
        if (localAverage.stats.dom.mean) {
          this.setState({ localAverage: localAverage.stats.dom.mean })
        }
      })
    this.fetchingData(`https://${process.env.API_HOST}/v2/search/car/active?api_key=${process.env.API_VAR}&year=${year}&make=${make}&model=${model}&car_type=${car_type}&rows=0&radius=10000&stats=dom&latitude=${latitude}&longitude=${longitude}`)
      .then(nationalAverage => {
        if (nationalAverage.stats.dom.mean) {
          this.setState({ nationalAverage: nationalAverage.stats.dom.mean })
        }
      })
  }

  dealerReviews (id) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/dealer/car/${id}/reviews?api_key=${process.env.API_VAR}`)
      .then(dealerReviews => {
        this.setState({ dealerReviews })
      })

    this.fetchingData(` https://${process.env.API_HOST}/v2/dealer/car/${id}/ratings?api_key=${process.env.API_VAR}`)
      .then(dealerRatings => {
        this.setState({dealerRatings})
      })
  }

  modelPopularityFetch (year, make, model, trim, bodyType) {
    this.fetchingData(`https://${process.env.API_HOST}/v2/popularity/car?api_key=${process.env.API_VAR}&year=${year}&make=${make}&model=${model}&trim=${trim}&body_type=${bodyType}`)
      .then(modelPopularity => {
        this.setState({ modelPopularity })
      })
  }

  render () {
    if (!this.state.vdp.build || this.state.localAverage === null || this.state.nationalAverage === null) {
      return <Loading style={{marginTop: '35vh'}} />
    }
    return <VDP {...this.state} {...this.state.vdp} />
  }
}

export default Vdp
