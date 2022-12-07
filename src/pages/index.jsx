import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Validador from './validador'

export default function Home() {
  return (
    <>
      <Head>
        <title>RISER - Rig Service & Engineering</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Faqs />
        {/* <Validador/> */}
      </main>
      <Footer />
    </>
  )
}
