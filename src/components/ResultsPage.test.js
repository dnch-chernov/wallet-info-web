import { render, screen, within } from '@testing-library/react';
import { ResultsPage } from './ResultsPage';

const address = '0x300045c41b5334772C25196ac0035bCDD511a821'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        token: '',
        address: ''
    })
}));

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: () => ([address, jest.fn()])
}))

describe('Results page', () => {
    test('correct balance', () => {
        render(<ResultsPage />);
        expect(screen.getByTestId('header-value')).toHaveTextContent(address)

    })
});