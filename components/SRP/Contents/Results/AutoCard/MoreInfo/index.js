import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'
import SvgPhotoIcon from './photos.svg'
import SvgVideosIcon from './video.svg'
import SvgView360Icon from './view360.svg'

const Container = styled.div`
  padding: 1em;
  ${mediaMax.phone`
    padding: 1em 1.5em;
  `}
`

const StyledFlexRow = styled(FlexRow)`
  ${mediaMax.largeTablet`
    display: block;
  `}
`

const LeftFlexCol = styled(FlexCol)`
  max-width: 30%;
  ${mediaMax.largeTablet`
    max-width: 100%;
  `}
`

const DetFlexCol = styled(FlexCol)`
  flex-basis: auto;
  margin: 0 1em;
`

const DetFlexRow = styled(FlexRow)`
  padding: 1em 0;
  ${mediaMax.largeTablet`
    display: block;
  `}
`

const OtherName = styled.p`
  color: ${colors.black};
  font-size: 1.1em;
  margin-bottom: 0.5em;
  ${mediaMax.srpDesktop`
    font-size: 0.9em;
  `}
  ${mediaMax.largeTablet`
    font-size: 1.2em;
  `}
`

const Type = styled.p`
  color: ${colors.lightergray};
  font-size: 0.8em;
  font-weight: 300;
`

const Multimedia = styled.div`
  padding: 1em 0;
  text-align: left;
`

const MultiInfo = styled.div`
  display: inline-block;
  margin: 0 1.5em;
  ${mediaMax.srpDesktop`
    font-size: 0.8em;
    margin: 0 0.8em;
  `}
  ${mediaMax.largeTablet`
    font-size: 1em;
    margin: 0 1.5em;

    &:first-child {
      display: none;
    }
  `}

  svg {
    height: 20px;
    margin-bottom: 0.5em;
    ${mediaMax.srpDesktop`
      height: 15px;
    `}
    ${mediaMax.largeTablet`
      height: 20px;
    `}
  }

  span {
    color: ${colors.softblue};
    display: block;
    font-size: 0.9em;
  }
`

const DetailItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1em;
  }

  ${mediaMax.largeTablet`
    &:last-child {
      margin-bottom: 1em;
    }
  `}
`

const Label = styled.span`
  color: ${colors.lightergray};
  font-size: 0.8em;
  font-weight: 300;
  margin-right: 0.5em;
  ${mediaMax.srpDesktop`
    font-size: 0.7em;
  `}
  ${mediaMax.largeTablet`
    font-size: 0.8em;
  `}
`

const Value = styled.span`
  color: ${colors.black};
  font-size: 0.8em;
  font-weight: 300;
  ${mediaMax.srpDesktop`
    font-size: 0.7em;
  `}
  ${mediaMax.largeTablet`
    font-size: 0.8em;
  `}
`

export default (props) => {
  //console.log(props)
  return (
    <Container>
      <StyledFlexRow>
        <LeftFlexCol>
          <OtherName>{props.data.build.make + " " + props.data.build.model + " " + props.data.build.engine_size + " V" +props.data.build.cylinders}</OtherName>
          <Type>{props.data.build.body_type}</Type>
          <Multimedia>
            <MultiInfo>
              <SvgPhotoIcon />
              <span>{props.data.media.photo_links.length} { props.data.media.photo_links.length > 0 ? 'photos' : 'photo'}</span>
            </MultiInfo>
            {/*<MultiInfo>*/}
              {/*<SvgVideosIcon />*/}
              {/*<span>0 videos</span>*/}
            {/*</MultiInfo>*/}
            {/*<MultiInfo>*/}
              {/*<SvgView360Icon />*/}
              {/*<span>360º view</span>*/}
            {/*</MultiInfo>*/}
          </Multimedia>
        </LeftFlexCol>
        <FlexCol>
          <DetFlexRow>
            <DetFlexCol>
              <DetailItem>
                <Label>Model:</Label>
                <Value>{props.data.build.model}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Year:</Label>
                <Value>{props.data.build.year}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Door:</Label>
                <Value>{props.data.build.doors}</Value>
              </DetailItem>
            </DetFlexCol>
            <DetFlexCol>
              <DetailItem>
                <Label>MPG:</Label>
                <Value>{props.data.build.city_miles !== undefined ? props.data.build.city_miles.substring(0,2) : ''}/{props.data.build.highway_miles ? props.data.build.highway_miles.substring(0,2) : ''}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Transmission:</Label>
                <Value>{props.data.build.transmission}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Drivetrain:</Label>
                <Value>{props.data.build.drivetrain}</Value>
              </DetailItem>
            </DetFlexCol>
            <DetFlexCol>
              <DetailItem>
                <Label>Cylinders:</Label>
                <Value>{props.data.build.cylinders}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Body:</Label>
                <Value>{props.data.build.body_type}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Trim:</Label>
                <Value>{props.data.build.trim}</Value>
              </DetailItem>
            </DetFlexCol>
            <DetFlexCol>
              <DetailItem>
                <Label>VIN:</Label>
                <Value>{props.data.vin}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Engine:</Label>
                <Value>{props.data.build.engine}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Fuel:</Label>
                <Value>{props.data.build.fuel_type}</Value>
              </DetailItem>
            </DetFlexCol>
          </DetFlexRow>
        </FlexCol>
      </StyledFlexRow>
    </Container>)
} 
