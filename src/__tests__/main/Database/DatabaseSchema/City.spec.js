import City from '../../../../main/Database/DataSchema/City';

describe('City', () => {
  it('should initialize with correct values', () => {
    const city = new City({
      id: 'test-id',
      PLZ: '12345',
      Ort: 'Test City',
      Ortsteil: 'Test Suburb',
    });

    expect(city.id).toBe('test-id');
    expect(city.PLZ).toBe('12345');
    expect(city.Ort).toBe('Test City');
    expect(city.Ortsteil).toBe('Test Suburb');
  });

  it('should initialize without Ortsteil', () => {
    const city = new City({
      PLZ: '12345',
      Ort: 'Test City',
    });

    expect(typeof city.id).toBe('string');
    expect(city.PLZ).toBe('12345');
    expect(city.Ort).toBe('Test City');
    expect(city.Ortsteil).toBeUndefined();
  });
});
