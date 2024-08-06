import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Action</Link>
          </li>
          <li>
            <Link to="/categories#sport">Sports</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulation</Link>
          </li>
          <li>
            <Link to="/categories#fight">Fight</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Quick access</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promotion</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Soon</Link>
          </li>
        </Links>
      </FooterSection>
      <p>&copy; All rights reserved by Mr. Baker {currentYear}</p>
    </div>
  </Container>
)

export default Footer
