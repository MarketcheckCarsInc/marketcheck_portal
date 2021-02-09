import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'

class GoogleAutoComplete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      address: '',
      loading: false
      // latitude: null,
      // longitude: null,
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSelect (address) {
    this.setState({
      address,
      loading: true
    })

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.props.findLatLng(lat, lng, address)

        this.setState({
          loading: false
          // latitude: lat,
          // longitude: lng
        })

      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          loading: false
        })
      })
  }

  handleChange (address) {
    this.setState({
      address
      // latitude: '',
      // longitude: ''
     // geocodeResults: null
    })
  }



  render () {
    const customStyles = {
      autocompleteContainer: {
        backgroundColor: '#e0e9f1',
        border: 'none',
        left: '-47px',
        top: '125%',
        minWidth: '256px',
        textAlign: 'left',
        lineHeight: '1.5',
        paddingBottom: '30px',
        backgroundSize: 'auto 20px',
        backgroundPosition: 'bottom right 1px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3_hdpi.png')"
      },
      autocompleteItemActive: { backgroundColor: '#efefef' },
      autocompleteItem: {color: '#666'},
      input: {padding: '0'}
    }

    const options = {
      componentRestrictions: {country: 'us'}
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>)

    const inputProps = {
      type: 'search',
      value: this.state.address,
      onChange: this.handleChange,
      placeholder: 'Enter Location',
      name: 'autocomplete-input'
    }
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    return (
      <div>
          {/*<Geolocation/>*/}
        {isScriptLoaded && isScriptLoadSucceed &&

          <PlacesAutocomplete
            onSelect={this.handleSelect}
            autocompleteItem={AutocompleteItem}
            onEnterKeyDown={this.handleSelect}
            styles={customStyles}
            inputProps={inputProps}
            googleLogo={false}
            options={options}
          />
        }
      </div>
    )
  }
}

export default scriptLoader(
  [
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyB4sYQfdiOZh3izO23839OZjkdZBWUMrTs&libraries=places'
  ]
)(GoogleAutoComplete)
