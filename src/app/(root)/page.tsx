import Container from "@/components/container";
import Hero from "@/components/hero/hero";
import CallToAction from "@/components/home/call-to-action";
import HomeBlogs from "@/components/home/home-blogs";

export default function Home() {
  return (
    <Container>
      <Hero />
      <HomeBlogs />
      <CallToAction />
    </Container>
  );
}
