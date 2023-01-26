/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { instance } from "../../../http/HttpRequest";

export interface ArticleModel {
  abstract: string;
  source: string;
  multimedia: { url: string }[];
  pub_date: string;
}

export type ArticleProps = ArticleModel;

export type ArticleResponse = {
  data: {
    response: {
      docs: ArticleProps[];
    };
  };
};

export type payload = {
  data: {
    payload: {
      status: string;
      copyright: string;
      response: {
        docs: ArticleProps[];
      };
    };
  };
};

/**
 * This service is written as class in order to confirm to the UnitTest property 'prototype'
 */
export class ArticleServices {
  async fetchArticle(page: number): Promise<ArticleResponse> {
    return new Promise((resolve) => {
      return resolve(instance.get("/articles", { params: { page: page } }));
    });
  }
}
