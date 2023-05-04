import Teil from '../../../../main/Database/DataSchema/Teil';

describe('Teil', () => {
  it('should initialize with correct values', () => {
    const teil = new Teil({
      Bezeichnung: 'Test Bezeichnung',
      Teilenummer: '12345',
      Notizen: 'Test Notizen',
    });

    expect(teil.Bezeichnung).toBe('Test Bezeichnung');
    expect(teil.Teilenummer).toBe('12345');
    expect(teil.Notizen).toBe('Test Notizen');
  });

  it('should initialize with default values', () => {
    const teil = new Teil({
      Bezeichnung: 'Test Bezeichnung',
    });

    expect(teil.Bezeichnung).toBe('Test Bezeichnung');
    expect(teil.Teilenummer).toBe('');
    expect(teil.Notizen).toBe('');
  });
});
