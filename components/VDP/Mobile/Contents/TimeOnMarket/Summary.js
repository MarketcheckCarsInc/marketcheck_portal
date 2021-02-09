import styled from 'styled-components'
import Listing from './Listing.js'
// import { colors } from '%/styles'

const Summary = styled.div`
  margin-bottom: 15px;
`

const Title = styled.p`
  opacity: 0.56;
  margin-bottom: 25px !important;
  text-transform: uppercase;
`

// const MoreLink = styled.a`
//   text-align: center;
//   display: block;
//   color: ${colors.softblue};
//   font-size: 14px;
//   line-height: 16.8px;
// `

export default (props) =>
  <Summary>
    <Title>{props.vinHistory.length} - Previous Listings</Title>
    {props.vinHistory.map((listing, key, array) => {
      let priceDifference = null
      let milesDifference = null
      // let previousPrice = 0;
      // if (array[key + 1]) { previousPrice = array[key + 1].price; }

      if (listing.hasOwnProperty('miles') && array[key + 1]) {
        // milesDifference = array[key].miles < array[key + 1].miles ? array[key + 1].miles - array[key].miles : array[key].miles - array[key + 1].miles;
        milesDifference = array[key + 1].miles - array[key].miles
        milesDifference = milesDifference === 0 ? null : milesDifference
      }

      if (listing.hasOwnProperty('price') && array[key + 1]) {
         // priceDifference = array[key].price < array[key + 1].price ? array[key + 1].price - array[key].price : array[key].price - array[key + 1].price;
        priceDifference = array[key + 1].price - array[key].price
        priceDifference = priceDifference === 0 ? null : priceDifference
      }

      return <Listing key={key} price={listing.price} initialDate={listing.scraped_at_date} lastDate={listing.last_seen_at_date} source={`//${listing.source}`} miles={listing.miles} sellerName={listing.seller_name} priceDifference={priceDifference} milesDifference={milesDifference} />
    })}

    {/* <MoreLink>9 More Previous Listings ( VIEW )</MoreLink> */}
  </Summary>
