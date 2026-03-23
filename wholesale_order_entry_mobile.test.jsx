// wholesale_order_entry_mobile.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import WholesaleOrderEntryMobile from './WholesaleOrderEntryMobile';

// Sample test for WholesaleOrderEntryMobile component

describe('WholesaleOrderEntryMobile component', () => {
    test('renders without crashing', () => {
        render(<WholesaleOrderEntryMobile />);
        const linkElement = screen.getByText(/Wholesale Order Entry/i);
        expect(linkElement).toBeInTheDocument();
    });
});