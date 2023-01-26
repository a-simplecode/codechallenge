/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArticleResponse, ArticleServices } from "./ArticleServices";

type StatusEnum = "idle" | "loading" | "failed";

export interface ArticleState {
  value: ArticleResponse;
  status: StatusEnum;
  error: string | null;
}

const initialState: ArticleState = {
  value: {
    data: {
      response: {
        docs: [],
      },
    },
  },
  status: "idle",
  error: null,
};

export const getArticle = createAsyncThunk("users/article", async (page: number) => {
  const articleServices = new ArticleServices();
  const { data } = await articleServices.fetchArticle(page);
  return data;
});

export const articleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.data = action?.payload;
      })
      .addCase(getArticle.rejected, (state, action) => {
        if (action.error.message === "401") {
          alert("Not Authorized");
        }
        state.status = "failed";
      });
  },
});

export default articleSlice.reducer;
