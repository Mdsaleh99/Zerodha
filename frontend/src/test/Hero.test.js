import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HeroSection from '../landing_page/home/HeroSection.jsx'


// test suite
describe('hero component', () => {
    test('renders hero image', () => {
        render(<HeroSection />)
        const heroImage = screen.getByAltText("Hero Image")
        expect(heroImage).toBeInTheDocument()
        expect(heroImage).toHaveAttribute("src", "assets/images/homeHero.png")
    });
});