import Kunde from '../../../../main/Database/DataSchema/Kunde';
import City from '../../../../main/Database/DataSchema/City';
import Auto from '../../../../main/Database/DataSchema/Auto';

describe('Kunde', () => {
  it('should initialize with correct values', () => {
    const city = new City({ PLZ: '12345', Ort: 'Test City' });
    const autos = [
      new Auto({
        Kennzeichen: 'ABC-123',
        Hersteller: 'BMW',
        Modell: '3 Series',
      }),
    ];

    const kunde = new Kunde({
      Kundennummer: '1234',
      ErstelltAm: new Date('2023-05-03T00:00:00Z'),
      Name: ['John', 'Doe'],
      Ort: city,
      Straße: 'Test Street 1',
      Telefon: ['+123456789'],
      Mobile: ['+987654321'],
      Email: ['john.doe@example.com'],
      Autos: autos,
    });

    expect(kunde.Kundennummer).toBe('1234');
    expect(kunde.ErstelltAm).toEqual(new Date('2023-05-03T00:00:00Z'));
    expect(kunde.Name).toEqual(['John', 'Doe']);
    expect(kunde.Ort).toBe(city);
    expect(kunde.Straße).toBe('Test Street 1');
    expect(kunde.Telefon).toEqual(['+123456789']);
    expect(kunde.Mobile).toEqual(['+987654321']);
    expect(kunde.Email).toEqual(['john.doe@example.com']);
    expect(kunde.Autos).toBe(autos);
  });

  it('should initialize with default values', () => {
    const kunde = new Kunde({});

    expect(kunde.Kundennummer).toBe('');
    expect(kunde.Name).toEqual(['']);
    expect(kunde.Straße).toBe('');
    expect(kunde.Telefon).toEqual(['']);
    expect(kunde.Mobile).toEqual(['']);
    expect(kunde.Email).toEqual(['']);
    expect(kunde.Autos).toEqual([]);
  });
});
