import Auto from '../../../../main/Database/DataSchema/Auto';
import Bremsscheibe from '../../../../main/Database/DataSchema/Bremsscheibe';
import Teile from '../../../../main/Database/DataSchema/Teile';
import Termin from '../../../../main/Database/DataSchema/Termin';

describe('Auto', () => {
  it('should initialize with correct values', () => {
    const bremsscheibeVorne = new Bremsscheibe({
      Innenbelueftet: 'Yes',
      Groeße: '123mm',
    });
    const bremsscheibeHinten = new Bremsscheibe({
      Innenbelueftet: 'No',
      Groeße: '120mm',
    });
    const autoTeile = new Teile({ oelmenge: '5L', oelbezeichnung: 'Motoröl' });
    const termine = [
      new Termin({ Title: 'Service', Beschreibung: 'Yearly Service' }),
    ];

    const auto = new Auto({
      Kennzeichen: 'ABC-123',
      Verkauft: false,
      Hersteller: 'BMW',
      Modell: '3 Series',
      BremsscheibeVorne: bremsscheibeVorne,
      BremsscheibeHinten: bremsscheibeHinten,
      AutoTeile: autoTeile,
      Termine: termine,
      // Add other property values if needed.
    });

    expect(auto.Kennzeichen).toBe('ABC-123');
    expect(auto.Verkauft).toBe(false);
    expect(auto.Hersteller).toBe('BMW');
    expect(auto.Modell).toBe('3 Series');
    expect(auto.BremsscheibeVorne).toBe(bremsscheibeVorne);
    expect(auto.BremsscheibeHinten).toBe(bremsscheibeHinten);
    expect(auto.AutoTeile).toBe(autoTeile);
    expect(auto.Termine).toBe(termine);
    // Add other property expectations if needed.
  });

  it('should initialize with default values', () => {
    const auto = new Auto({});

    expect(auto.Kennzeichen).toBe('');
    expect(auto.Verkauft).toBeNull();
    expect(auto.Hersteller).toBe('');
    expect(auto.Modell).toBe('');
    // Add other property expectations if needed.
  });
});
