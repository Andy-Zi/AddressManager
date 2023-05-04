import Bremsscheibe from '../../../../main/Database/DataSchema/Bremsscheibe';

describe('Bremsscheibe', () => {
  it('should initialize with correct values', () => {
    const bremsscheibe = new Bremsscheibe({
      Innenbelueftet: 'Yes',
      Groeße: '123mm',
    });

    expect(bremsscheibe.Innenbelueftet).toBe('Yes');
    expect(bremsscheibe.Groeße).toBe('123mm');
  });

  it('should initialize with default values', () => {
    const bremsscheibe = new Bremsscheibe({});

    expect(bremsscheibe.Innenbelueftet).toBe('');
    expect(bremsscheibe.Groeße).toBe('');
  });
});
