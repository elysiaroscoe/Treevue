import React from 'react'
import {Typography} from '@mui/material'
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import AirIcon from '@mui/icons-material/Air';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import WaterIcon from '@mui/icons-material/Water';
import ThermostatIcon from '@mui/icons-material/Thermostat';


export const Info = () => {
  return (
    <InfoPage>
    <Typography>Overall Impact of Tree Canopy Score</Typography>
    <Section>
    <Image><AirIcon/></Image>
      <NameSection>Air Quality</NameSection>
      <InfoSection>Trees produce oxygen, capture air pollutants such as particulate matter directly on their leaves, improve public
health, and reduce pollution indirectly by lowering air temperatures, reducing the formation of ozone. The existing tree canopy in Bellevue removes 1,023,583 tons of air pollution annually, valued at $39,183,439</InfoSection>
    </Section>
    <Section>
      <Image><VerifiedUserIcon/></Image>
      <NameSection>Safety</NameSection>
      <InfoSection>They find that for every 10 percent increase in
tree canopy cover, there was a 15 percent decrease in the violent crime, and a 14 percent fall in the property crime
rate. Trees, they write, can help to increase ‘eyes on the street’ through recreational use, reduce mental the fatigue
which can lead to crime, and offer landscaping opportunities which act as a ‘cue to care’.
Results from our analyses showed that for every 10 percent increase in tree canopy cover there was a 15 percent
decrease in the violent crime rate and a 14 percent decrease the property crime rate. </InfoSection>
    </Section>
    <Section>
      
      <Image><MedicalInformationIcon/></Image>
      <NameSection>Heat Deaths</NameSection>
      <InfoSection>Trees around our region can be scalded by 100+ degree heat and intense sun because they release as much water vapor through their leaves and needles as they can to survive. You can actually feel that cool vapor around a large tree when it’s extremely hot.
“It actually creates a microclimate.”
“It loses water vapor through the leaves in a process called ‘transpiration’ that cools the tree, and it cools the surroundings.”
The transpiration in trees works exactly the same way perspiration does for a person. And in hot weather, trees can release up to 90% of the water they pull up from their roots in vapor though their leaves.
</InfoSection>
    </Section>
    <Section>
      <Image><HomeIcon/></Image>
      <NameSection>Property Value</NameSection>
      <InfoSection>The proximity of healthy, beautiful trees directly affects property value. Good tree cover increased property prices by about 7% in residential areas and 18% for building lots. Quality landscapes with healthy trees can increase retail spending from 9 to 12%.</InfoSection>
    </Section>
    <Section>
      <Image><WaterIcon/></Image>
      <NameSection>Storm Water and Water</NameSection>
      <InfoSection>Trees and forests mitigate stormwater runoff which minimizes flood risk, stabilizes soil, reduces sedimentation in
streams and marshland, and absorbs pollutants, thus improving water quality and habitats.
• On average, each acre of tree canopy in Bellevue absorbs 40,000 gallons of water. This benefit of avoided runoff is valued at roughly $360 per acre/per year. Extrapolated citywide, this means that Bellevue’s existing tree
canopy provides more than $2.8 million in stormwater runoff benefits.</InfoSection>
    </Section>
    <Section>
      <Image><ThermostatIcon/></Image>
      <NameSection>Temperature</NameSection>
      <InfoSection>The net cooling effect of a young, healthy tree is equivalent to ten room-size air conditioners operating 20 hours a day. 
If you plant a tree today on the west side of your home, in 5 years your energy bills should be 3% less. In 15 years the savings will be nearly 12%
A mature tree can often have an appraised value of between $1,000 and $10,000. 
Having large trees in yards along streets increases a home’s value from 3 percent to 15 percent. Wolf, Kathleen L, PhD, University of Washington (2007) City Trees and Property Values. Arborist News. 16, 4:34-36.
Planting trees in cities can reduce land surface temperatures by up to 12 degrees Celsius (21.6 F) during the summer</InfoSection>
    </Section>
    </InfoPage>
  )
}

// Styling
const InfoPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
`
const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoSection = styled.p`
  width: 70%;
  text-align: left;
`

const NameSection = styled.p`
  margin: 0;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  width: 150px;
`
