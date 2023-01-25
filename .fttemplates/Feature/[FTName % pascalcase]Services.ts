/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

// Model
export type <FTName | pascalcase>Response = {
  accessToken: string;
};
// Model
export type <FTName | pascalcase>Request = {
  email: string;
  password: string;
};

/**
 * This service is written as class in order to confirm to the UnitTest property 'prototype'
 */
export class <FTName | pascalcase>Services {
  async fakeHttpRequest(request: <FTName | pascalcase>Request): Promise<<FTName | pascalcase>Response> {
    return new Promise((resolve) =>
      setTimeout(() => {
        return resolve({ accessToken: `AccessToken for ${request.email}` });
      }, 500),
    );
  }
}
