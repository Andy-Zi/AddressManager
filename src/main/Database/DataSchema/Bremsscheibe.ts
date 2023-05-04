class Bremsscheibe {
  public Innenbelueftet: string;

  public Groeße: string;

  constructor({
    Innenbelueftet = '',
    Groeße = '',
  }: {
    Innenbelueftet?: string;
    Groeße?: string;
  }) {
    this.Innenbelueftet = Innenbelueftet;
    this.Groeße = Groeße;
  }
}

export default Bremsscheibe;
