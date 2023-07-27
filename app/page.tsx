"use client"
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '@/components/pricing';


export default function Home(){
    return (
        <>
        <HeroSection/>
        <Features/>
        <Pricing/>
        <Testimonials/>
        </>
    )
}

