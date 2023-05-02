import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Navbar from '../../../renderer/components/Navbar';

describe('Navbar', () => {
  // const clientNames = [
  //   'Alice',
  //   'Bob',
  //   'Charlie',
  //   'David',
  //   'Eve',
  //   'Frank',
  //   'Grace',
  //   'Heidi',
  //   'Ivan',
  //   'Judy',
  // ];

  // const { searchTerm, setSearchTerm, suggestions } = Autocomplete(clientNames);

  test('renders the Navbar with links and search box', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Clients')).toBeInTheDocument();
    expect(screen.getByText('ListView')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('displays suggestions when typing in the search box', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'a' } });

    const suggestionElements = screen.getAllByRole('listitem');
    expect(suggestionElements.length).toBeGreaterThan(0);
  });

  test('navigates to correct routes on link click', async () => {
    render(
      <MemoryRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/clients" element={<div>ClientsPage</div>} />
          <Route path="/listView" element={<div>ListViewPage</div>} />
          <Route path="/settings" element={<div>SettingsPage</div>} />
        </Routes>
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const clientsLink = screen.getByText('Clients');
    const listViewLink = screen.getByText('ListView');
    const settingsLink = screen.getByText('Settings');

    userEvent.click(homeLink);
    expect(await screen.findByText('HomePage')).toBeInTheDocument();

    userEvent.click(clientsLink);
    expect(await screen.findByText('ClientsPage')).toBeInTheDocument();

    userEvent.click(listViewLink);
    expect(await screen.findByText('ListViewPage')).toBeInTheDocument();

    userEvent.click(settingsLink);
    expect(await screen.findByText('SettingsPage')).toBeInTheDocument();
  });
});
