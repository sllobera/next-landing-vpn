import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Expert Outsourcing" />
      <Layout>
        <Hero />
        <Feature />
      </Layout>
    </>
  );
}
