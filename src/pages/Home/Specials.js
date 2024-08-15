import { LinkButton } from "../../components/LinkButton";
import { SpecialsCard } from "./SpecialsCard";

export const Specials = () => {
  let specials = [
    {
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imageURL: "greek salad.jpg",
    },
    {
      title: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      imageURL: "bruchetta.svg",
    },
    {
      title: "Lemon Dessert",
      price: 5.0,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      imageURL: "lemon dessert.jpg",
    },
  ];
  return (
    <section className="specials">
      <div className="specials-container">
        <div className="specials-content">
          <h1 className="black">This weeks specials!</h1>
        </div>
        <div className="specials-content">
          <LinkButton
            to="#"
            text="Online Menu"
            aria-label="On click view online menu"
          />
        </div>
      </div>
      <div className="specials-container">
        {specials.map((special) => (
          <SpecialsCard key={special.title} {...special} />
        ))}
      </div>
    </section>
  );
};
