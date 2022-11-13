import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { StartPage } from './StartPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('Start page', () => {

    test('find button disabled by default', () => {
        render(<StartPage />);
        // screen.debug();
        expect(screen.getByTestId('header-wallet-info')).toBeInTheDocument();
        expect(screen.getByTestId('dropdown-token')).toBeInTheDocument();
        expect(screen.getByTestId('input-address')).toBeInTheDocument();
        expect(screen.getByTestId('button-find')).toBeDisabled();
    });

    test('find button disabled if address field is empty', async () => {
        const user = userEvent.setup()
        render(<StartPage />);
        expect(screen.getByRole('alert')).toHaveTextContent('Token')
        const dropdown = screen.getByTestId('dropdown-token')
        await user.click(dropdown)
        const options = within(screen.getByTestId('dropdown-token')).getAllByRole('option')
        await user.click(options[0]);
        expect(screen.getByRole('alert')).toHaveTextContent('ETH')
        expect(screen.getByTestId('button-find')).toBeDisabled();
        await user.click(dropdown)
        await user.click(options[1]);
        expect(screen.getByRole('alert')).toHaveTextContent('USDC')
        expect(screen.getByTestId('button-find')).toBeDisabled();
    });

    test('find button disabled if token is not selected', async () => {
        const user = userEvent.setup()
        const address = '0x300045c41b5334772C25196ac0035bCDD511a821'
        render(<StartPage />);
        const input = screen.getByPlaceholderText('Address')
        await user.type(input, address)
        expect(input).toHaveValue(address)
        expect(screen.getByTestId('button-find')).toBeDisabled();
    })

    test('find button enabled when token is selected and address spacified', async () => {
        const user = userEvent.setup()
        const address = '0x300045c41b5334772C25196ac0035bCDD511a821'
        render(<StartPage />);
        const input = screen.getByPlaceholderText('Address')
        await user.type(input, address)
        const dropdown = screen.getByTestId('dropdown-token')
        await user.click(dropdown)
        const options = within(screen.getByTestId('dropdown-token')).getAllByRole('option')
        await user.click(options[0]);
        expect(screen.getByTestId('button-find')).toBeEnabled();
    })
});
