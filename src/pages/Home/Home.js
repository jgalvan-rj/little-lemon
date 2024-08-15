import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { About } from "./About";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};
