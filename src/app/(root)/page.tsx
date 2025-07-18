import Container from "@/components/container";
import Hero from "@/components/hero/hero";
import CallToAction from "@/components/home/call-to-action";
import Faq from "@/components/home/faq";
import HomeBlogs from "@/components/home/home-blogs";
import HomeWork from "@/components/home/home-work";

export const metadata = {
  title: "Hello",
};

export default function Home() {
  return (
    <Container>
      <Hero />
      <HomeWork />
      <Faq />
      <HomeBlogs />
      <CallToAction />
    </Container>
  );
}
