import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  let testimonials = [
    {
      rating: 5,
      name: "Jane Doe",
      testimonial:
        "I love the food at Little Lemon, the staff are always friendly and the atmosphere is great.",
      profileSrc: "/person1.jpg",
    },
    {
      rating: 4,
      name: "John Doe",
      testimonial:
        "I have been coming to Little Lemon for years, the food is always amazing and the service is second to none.",
      profileSrc: "/person2.jpg",
    },
    {
      rating: 5,
      name: "Jane Smith",
      testimonial:
        "I have never had a bad meal at Little Lemon, the food is always fresh and delicious.",
      profileSrc: "/person3.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
