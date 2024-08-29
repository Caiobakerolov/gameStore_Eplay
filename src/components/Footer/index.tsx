import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link
              title="Click here to access games about RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Click here to access games about Action"
              to="/categories#action"
            >
              Action
            </Link>
          </li>
          <li>
            <Link
              title="Click here to access games about Sports"
              to="/categories#sport"
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              title="Click here to access games about Simulation"
              to="/categories#simulation"
            >
              Simulation
            </Link>
          </li>
          <li>
            <Link
              title="Click here to access games about Fight"
              to="/categories#fight"
            >
              Fight
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Quick access</SectionTitle>
        <Links>
          <li>
            <Link
              title="Click here to access games about Promotion"
              to="/#on-sale"
            >
              Promotion
            </Link>
          </li>
          <li>
            <Link
              title="Click here to access games about Soon"
              to="/#coming-soon"
            >
              Soon
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>&copy; All rights reserved by Mr. Baker {currentYear}</p>
    </div>
  </Container>
)

export default Footer
