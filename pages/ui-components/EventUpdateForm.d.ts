/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Event } from "../models";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventUpdateFormInputValues = {
  name?: string;
  description?: string;
  data?: string;
  location?: string;
};
export declare type EventUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
  data?: ValidationFunction<string>;
  location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type EventUpdateFormOverridesProps = {
  EventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  data?: PrimitiveOverrideProps<TextFieldProps>;
  location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: EventUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    event?: Event;
    onSubmit?: (
      fields: EventUpdateFormInputValues
    ) => EventUpdateFormInputValues;
    onSuccess?: (fields: EventUpdateFormInputValues) => void;
    onError?: (
      fields: EventUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: EventUpdateFormInputValues
    ) => EventUpdateFormInputValues;
    onValidate?: EventUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function EventUpdateForm(
  props: EventUpdateFormProps
): React.ReactElement;
