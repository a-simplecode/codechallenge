import { EmailPasswordInputProps, EmailPasswordOutput } from "molecules/emailPasswordInput/EmailPasswordInput.types";

interface LoginTemplateProps {
  preFilledEmail?: string | string[] | undefined;
  isLoading?: boolean | undefined;
  createAccountPressed: () => void;
  loginPressed: () => void;
  extractValues?: (output: EmailPasswordOutput) => void;
  emailPasswordInputRef: React.Ref<EmailPasswordInputProps>;
}

export type { LoginTemplateProps };
