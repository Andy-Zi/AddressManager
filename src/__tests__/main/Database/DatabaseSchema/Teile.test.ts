import Teil from '../../../../main/Database/DataSchema/Teil';
import Teile from '../../../../main/Database/DataSchema/Teile';

describe('Teile', () => {
  it('should initialize with correct values', () => {
    const teil = new Teil({
      Bezeichnung: 'Test Bezeichnung',
      Teilenummer: '12345',
      Notizen: 'Test Notizen',
    });

    const teile = new Teile({
      oelmenge: '1.5',
      oelbezeichnung: 'Test Oel',
      TeilListe: [teil],
    });

    expect(teile.oelmenge).toBe('1.5');
    expect(teile.oelbezeichnung).toBe('Test Oel');
    expect(teile.TeilListe).toHaveLength(1);
    expect(teile.TeilListe[0].Bezeichnung).toBe('Test Bezeichnung');
    expect(teile.TeilListe[0].Teilenummer).toBe('12345');
    expect(teile.TeilListe[0].Notizen).toBe('Test Notizen');
  });

  it('should initialize with default values', () => {
    const teile = new Teile({});

    expect(teile.oelmenge).toBe('');
    expect(teile.oelbezeichnung).toBe('');
    expect(teile.TeilListe).toHaveLength(0);
  });
});
