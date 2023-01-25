/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

type EmailPasswordOutput = {
  email: string;
  password: string;
};
type FormErrorMessages = {
  emptyField: LocalizedField;
};

type LocalizedField = {
  en?: string;
  ar?: string;
};

interface EmailPasswordInputProps {
  inputValuesAreValid?: () => boolean;
  extractValues?: (output: EmailPasswordOutput) => void;
  formErrorMessages: FormErrorMessages;
}

export type { EmailPasswordInputProps, EmailPasswordOutput, FormErrorMessages };
