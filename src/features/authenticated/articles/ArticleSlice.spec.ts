import { configureStore } from "@reduxjs/toolkit";
import { ArticleServices } from "./ArticleServices";
import { articleSlice, getArticle } from "./ArticleSlice";

const response = {
  abstract: "More reader reaction on restaurant hauteur.",
  source: "The New York Times",
  multimedia: [
    {
      url: "",
    },
  ],
  pub_date: "2007-01-29T22:21:57+0000",
};

describe("Test Login integration", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("should login data fulfilled", async () => {
    jest.spyOn(ArticleServices.prototype, "fetchArticle").mockResolvedValueOnce({
      data: {
        response: {
          docs: [response],
        },
      },
    });
    const store = configureStore({ reducer: articleSlice.reducer });
    await store.dispatch(getArticle(1));
    expect(store.getState().value).toEqual({
      data: {
        response: {
          docs: [response],
        },
      },
    });
  });
});
