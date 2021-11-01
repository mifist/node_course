import { GenerateData } from '../../src/generateData';

test('adds 1 + 2 to equal 3', () => {
  
});
describe('Check GenerateData function', () => {
  let arr: Array<object>;

  beforeEach(() => {
      jest.clearAllMocks();
  });

  it('Check GenerateData generate 5 product', async () => {
    expect.assertions(1);
    arr = GenerateData(1);
    const expectedResponse: Array<object> = [
      {
        name: `Product Name 0`,
        price: `100 $`
      },
      {
        name: `Product Name 1`,
        price: `101 $`
      }
    ];
    console.log(expectedResponse);
    expect(arr).toEqual(expectedResponse);
  });

  it('Check GenerateData get 50 product', async () => {
    expect.assertions(1);
    arr = GenerateData(50);
    const expectedResponse: object = {
      name: `Product Name 50`,
      price: `150 $`
    };
    console.log(expectedResponse);
    expect(arr[50]).toEqual(expectedResponse);
  });

});