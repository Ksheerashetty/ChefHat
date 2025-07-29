import chefImage from "/src/assets/robo.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={chefImage} alt="Chef Hat Logo" />
        <h1>Welcome to ChefHat</h1>
      </header>
    </>
  );
}
