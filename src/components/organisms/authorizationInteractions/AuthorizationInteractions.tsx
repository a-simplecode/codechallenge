/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { View } from "react-native";
import { AuthorizationInteractionsProps } from "./AuthorizationInteractions.types";
import defaultStyles from "./AuthorizationInteractions.styles";
import EmailPasswordInput from "molecules/emailPasswordInput/EmailPasswordInput";
import { AppText } from "eurisko-platform-common-ui-react-native";
import PrimaryButton from "atoms/primaryButton/PrimaryButton";
import { FormErrorMessages } from "molecules/emailPasswordInput/EmailPasswordInput.types";
import strings from "localization/index";

const AuthorizationInteractions: React.FC<AuthorizationInteractionsProps> = ({
  createAccountPressed,
  loginPressed,
  extractValues,
  emailPasswordInputRef,
  isLoading,
}) => {
  const formErrorMessages = (): FormErrorMessages => {
    return { emptyField: { ar: "This is empty field in arabic", en: "This is empty field in english" } };
  };
  return (
    <View style={defaultStyles.container}>
      <EmailPasswordInput
        ref={emailPasswordInputRef}
        extractValues={extractValues}
        formErrorMessages={formErrorMessages()}
      />
      <View style={defaultStyles.loginButtonContainer}>
        <PrimaryButton
          isLoading={isLoading}
          text={strings.labels.login}
          onPress={() => {
            loginPressed();
          }}
        />
      </View>
      <AppText style={defaultStyles.orLabel}>---- Or ----</AppText>
      <View style={defaultStyles.createAccountButtonContainer}>
        <PrimaryButton
          text={strings.labels.createAccount}
          onPress={() => {
            createAccountPressed();
          }}
        />
      </View>
    </View>
  );
};
export default AuthorizationInteractions;
