import NavBarLink from "../NavBarLink/NavBarLink";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center space-x-6 absolute top-0 left-0 right-0 z-50 px-20 py-6">
      <NavBarLink href="#home">Inicio</NavBarLink>
      <NavBarLink href="#about">Sobre mí</NavBarLink>
      <NavBarLink href="#experience">Experiencia</NavBarLink>
      <NavBarLink href="#contact">Contacto</NavBarLink>
    </nav>
  )
}