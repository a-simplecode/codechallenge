/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { EmailPasswordInputProps, EmailPasswordOutput } from "molecules/emailPasswordInput/EmailPasswordInput.types";
import React from "react";

interface AuthorizationInteractionsProps {
  createAccountPressed: () => void;
  loginPressed: () => void;
  extractValues?: (output: EmailPasswordOutput) => void;
  isLoading?: boolean;
  emailPasswordInputRef: React.Ref<EmailPasswordInputProps>;
}

export type { AuthorizationInteractionsProps };
