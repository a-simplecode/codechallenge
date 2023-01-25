/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { EmailPasswordInputProps, EmailPasswordOutput } from "./EmailPasswordInput.types";
import { FormContainer } from "eurisko-react-native-dynamic-forms";
import { FormFieldPropsType } from "eurisko-react-native-dynamic-forms/lib/types";
import * as yup from "yup";
import "yup-phone";
import { moderateVerticalScale } from "react-native-size-matters";
import strings from "localization/index";

// Class
const EmailPasswordInput = forwardRef(({ extractValues, formErrorMessages }: EmailPasswordInputProps, ref) => {
  /**
   * References
   */
  const formReference = useRef<typeof FormContainer | null>(null);

  /**
   * Validation schema
   */
  const signupValidationSchema = yup.object().shape({
    email: yup.string().email(strings.validation.email).required(formErrorMessages.emptyField.en),
    password: yup
      .string()
      .min(
        8,
        ({ min }) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          `${strings.validation.passwordMustBe} ${min} ${strings.validation.characters}`,
      )
      .required(strings.validation.passwordRequired),
  });

  /**
   * Setup ref functions
   */
  useImperativeHandle(ref, () => ({
    // each key is connected to `ref` as a method name
    // they can execute code directly, or call a local method
    inputValuesAreValid: () => {
      // TODO: - Fix this within eurisko-react-native-dynamic-forms
      // const possibleErrors = formReference.current?.returnErrors() as EmailPasswordOutput;
      // No errors should exists for the below fields, when it equals to undefined it means it contains no errors.
      // const isValid = possibleErrors.email === undefined && possibleErrors.password === undefined;
      return true;
    },
  }));

  /**
   * Current form fields
   */
  const fields = (): FormFieldPropsType[] => {
    return [
      {
        handleInputChange(value) {
          // eslint-disable-next-line no-console
          console.log("handleInputChange", value);
        },
        autoCapitalize: "none",
        autoCorrect: false,
        name: "email",
        fieldType: "email",
        label: strings.labels.email,
        placeholder: strings.placeholders.email,
        style: {
          height: moderateVerticalScale(25),
          padding: 0,
          color: "#000",
          textAlign: "left",
        },
        labelStyle: {
          marginTop: moderateVerticalScale(20),
          color: "#000",
          textAlign: "left",
        },
        errorStyle: { textAlign: "left" },
      },
      {
        handleInputChange(value) {
          // eslint-disable-next-line no-console
          console.log("handleInputChange", value);
        },
        name: "password",
        autoCapitalize: "none",
        autoCorrect: false,
        fieldType: "text",
        label: strings.labels.password,
        placeholder: strings.placeholders.password,
        style: {
          height: moderateVerticalScale(25),
          padding: 0,
          color: "#000",
          textAlign: "left",
        },
        labelStyle: {
          marginTop: moderateVerticalScale(20),
          color: "#000",
          textAlign: "left",
        },
        errorStyle: { textAlign: "left" },
      },
    ];
  };

  /**
   * Render UI
   */
  return (
    <FormContainer
      hideButton={true}
      returnValues={(values) => {
        const { email, password } = values as EmailPasswordOutput;
        if (extractValues) {
          extractValues({ email, password });
        }
      }}
      ref={formReference}
      showLoadingIndicator={false}
      buttonText={strings.labels.login}
      returnFormikValues={(values) => {
        // eslint-disable-next-line no-console
        console.log("returnFormikValues", values);
      }}
      handleBlur={(values) => {
        // eslint-disable-next-line no-console
        console.log("handleBlur", values);
      }}
      formValidationSchema={signupValidationSchema}
      fields={fields()}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log("onSubmit", values);
      }}
      handleChange={(values) => {
        // eslint-disable-next-line no-console
        console.log("handleChange", values);
      }}
    />
  );
});
EmailPasswordInput.displayName = "EmailPasswordInput";
export default EmailPasswordInput;
