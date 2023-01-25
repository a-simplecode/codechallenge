import <FTName | camelcase>Reducer, { <FTName | pascalcase>State, increment, decrement, incrementByAmount } from "./<FTName | pascalcase>Slice";

describe("<FTName | camelcase> reducer", () => {
  const initialState: <FTName | pascalcase>State = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(<FTName | camelcase>Reducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = <FTName | camelcase>Reducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = <FTName | camelcase>Reducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = <FTName | camelcase>Reducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
