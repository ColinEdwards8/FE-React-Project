import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';
import { HelloWorld } from '../components/HelloWorld';

describe('main page functionality', () => {
    test('number of results show from rearch', () => {
        render(<MainPage />)
        const heading = screen.getByText('Find Your Favorite pictures')
        expect(heading).toBeInTheDocument()
    })
    test('component show prop state', () => {
        render(<HelloWorld searchResults={'cats'} />)
        const results = screen.getByText(/cats/i)
        expect(results).toBeInTheDocument()
        expect(screen.queryByText('dogs')).not.toBeInTheDocument()
    })
})