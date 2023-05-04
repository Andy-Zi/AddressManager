import Termin from '../../../../main/Database/DataSchema/Termin';

describe('Termin', () => {
  it('should initialize with correct values', () => {
    const now = new Date();
    const termin = new Termin({
      id: 'test-id',
      Title: 'Test Title',
      Beschreibung: 'Test Beschreibung',
      Kilometerstand: 1000,
      Datum: now,
    });

    expect(termin.id).toBe('test-id');
    expect(termin.Title).toBe('Test Title');
    expect(termin.Beschreibung).toBe('Test Beschreibung');
    expect(termin.Kilometerstand).toBe(1000);
    expect(termin.Datum).toBe(now);
  });

  it('should initialize with default values', () => {
    const termin = new Termin({});

    expect(typeof termin.id).toBe('string');
    expect(termin.Title).toBe('');
    expect(termin.Beschreibung).toBe('');
    expect(termin.Kilometerstand).toBeNull();
    expect(termin.Datum).toBeNull();
  });
});
