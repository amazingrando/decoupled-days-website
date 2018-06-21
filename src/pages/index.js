import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section/section'
import Sponsors from '../components/sponsors/sponsors'

const IndexPage = ({ data }) => {
  const sections = data.allSectionsJson.edges

  return (
    <div className="main">
      <h2>Decoupled Drupal Days gathers technologists, marketers and content professionals who build and use Drupal as a Content Service -- for decoupled front ends, content APIs, IoT, and more.</h2>
      <div className="about">
        <p>In its second year after a successful debut in 2017, Decoupled Drupal Days (D3) is a conference for architects, developers, and businesspeople involved in implementing decoupled Drupal architectures. The 2018 edition is scheduled for August 17–19, 2017 in New York City.</p>
        <p>Decoupled Drupal is the use of Drupal as a content service for other non-Drupal applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.</p>
      </div>
      <div>
        {sections.map((section, i) => <Section data={section.node} key={i} />)}
      </div>
      <div>

        <Sponsors level="Diamond" sponsors={data.diamondSponsors.edges} />
        <Sponsors level="Gold" sponsors={data.goldSponsors.edges} />
        <Sponsors level="Silver" sponsors={data.silverSponsors.edges} />
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allSectionsJson {
      edges {
        node {
          title
          content
          link {
            url
            external
            title
          }
          childImageSharp {
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }

    diamondSponsors: allSponsorsJson(filter: {level: {eq:"Diamond"}}) {
      edges {
        node {
          name
          link
          childImageSharp {
            sizes(maxWidth: 200) {
              src
            }
          }
        }
      }
    }

    goldSponsors: allSponsorsJson(filter: {level: {eq:"Gold"}}) {
      edges {
        node {
          name
          link
          childImageSharp {
            sizes(maxWidth: 200) {
              src
            }
          }
        }
      }
    }
    silverSponsors: allSponsorsJson(filter: {level: {eq:"Silver"}}) {
      edges {
        node {
          name
          link
          childImageSharp {
            sizes(maxWidth: 150) {
              src
            }
          }
        }
      }
    }
  }
`
