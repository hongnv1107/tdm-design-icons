import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Flex from "@tdm/ui/v3.1.0/flex";
import { styled } from "@tdm/ui/v3.1.0/config-provider/styled";
import MessageoutlinedIcon from "@tdm/ui/v3.1.0/icon/icons/MessageOutlinedIcon";
import Input from "@tdm/ui/v3.1.0/input";
import Modal from "@tdm/ui/v3.1.0/modal";
import type { ModalProps } from "@tdm/ui/v3.1.0/modal";
import Typography from "@tdm/ui/v3.1.0/typography";

import TRANSLATE_KEY from "@cms/app/locales";
import useGenValMess from "@cms/app/hooks/useGenValMess";
import useTDMAppStore from "@cms/app/hooks/useTDMAppStore";

import { HelpText } from "../FormItem";

const genIconStyle = (
  token: any,
  type?: "warning" | "info" | "success" | "danger"
) => {
  if (type === "success") {
    return {
      borderColor: token.colorStrokeSuccessWeak,
      background: token.colorFillSuccessWeak,
      color: token.colorTextSuccess,
    };
  }
  if (type === "warning") {
    return {
      borderColor: token.colorStrokeWarningWeak,
      background: token.colorFillWarningWeak,
      color: token.colorTextWarning,
    };
  }

  if (type === "danger") {
    return {
      borderColor: token.colorStrokeErrorWeak,
      background: token.colorFillErrorWeak,
      color: token.colorTextError,
    };
  }
  if (type === "info") {
    return {
      borderColor: token.colorStrokeInformationWeak,
      background: token.colorFillInformationWeak,
      color: token.colorTextInformation,
    };
  }
  return {
    borderColor: token.colorStrokeBrandWeak,
    background: token.colorFillBrandWeak,
    color: token.colorTextBrandPrimary,
  };
};

const AddCommentModalIcon = styled("span")<{
  type?: "warning" | "info" | "success" | "danger";
}>(({ token, type }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "8px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  marginBottom: 16,
  ...genIconStyle(token, type),
}));

export interface AddCommentModalProps
  extends Omit<ModalProps, "closable" | "title" | "onOk"> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  type?: "warning" | "info" | "success" | "danger";
  maxLength: number;
  defaultValue?: string;
  onSubmit: (comment: string) => Promise<void> | void;
  onClose: () => void;
}

function AddCommentModal(props: AddCommentModalProps) {
  const {
    title,
    description,
    icon = <MessageoutlinedIcon />,
    type,
    maxLength,
    defaultValue = "",
    onSubmit,
    onClose,
    ...rest
  } = props;

  const { t } = useTranslation();
  const { modal } = useTDMAppStore();

  const genValidateMessages = useGenValMess();

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting },
  } = useForm<{ comment: string }>({
    defaultValues: {
      comment: defaultValue,
    },
    mode: "all",
    shouldFocusError: false,
  });

  const onSubmitForm = handleSubmit(async (values) => {
    await onSubmit(values.comment);
  });

  const handleCancel = () => {
    if (getValues("comment")) {
      modal.confirm({
        id: "addCommentModal-close",
        title: t(TRANSLATE_KEY.unsave_change),
        content: t(TRANSLATE_KEY.cancel_form_question),
        onOk: () => {
          reset({ comment: "" });
          onClose();
        },
      });
    } else {
      onClose();
    }
  };
  useEffect(() => {
    if (rest.open) {
      reset({ comment: defaultValue });
    }
  }, [rest.open, defaultValue, reset]);

  return (
    <Modal
      closable={false}
      styles={{
        footer: {
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          borderTop: "none",
        },
      }}
      centered
      cancelText={t(TRANSLATE_KEY["common.cancel"])}
      okText={t(TRANSLATE_KEY["freeTrial.comment"])}
      onOk={onSubmitForm}
      okButtonProps={{ style: { width: "100%" } }}
      confirmLoading={isSubmitting}
      cancelButtonProps={{ style: { width: "100%" } }}
      onCancel={handleCancel}
      {...rest}
    >
      <Flex vertical gap={20}>
        <Flex vertical align="center">
          <AddCommentModalIcon type={type}>{icon}</AddCommentModalIcon>
          <Typography.Title level={4} style={{ marginBottom: 0 }}>
            {title}
          </Typography.Title>
          <Typography.Text color="">{description}</Typography.Text>
        </Flex>
        <Controller
          control={control}
          name="comment"
          rules={{ required: true, maxLength }}
          render={({
            field: { onChange, onBlur, value, ...field },
            fieldState: { error },
          }) => {
            const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
              const trimmedValue = e.target.value.trim();
              if (trimmedValue !== e.target.value) {
                onChange(trimmedValue);
              }
              onBlur();
            };

            return (
              <>
                <Input.TextArea
                  {...field}
                  value={value}
                  onBlur={handleBlur}
                  onChange={onChange}
                  placeholder={`${t(TRANSLATE_KEY["common.input"])} ${t(
                    TRANSLATE_KEY["freeTrial.comment"]
                  ).toLowerCase()}`}
                  maxLength={maxLength}
                  count={{
                    max: maxLength,
                    show: true,
                  }}
                  status={error ? "error" : undefined}
                />
                <HelpText>
                  {error &&
                    genValidateMessages({
                      type: error.type,
                      name: t(TRANSLATE_KEY["freeTrial.comment"]),
                      message:
                        typeof error.message === "string" &&
                        error.message in TRANSLATE_KEY
                          ? `${t(
                              TRANSLATE_KEY[
                                error.message as keyof typeof TRANSLATE_KEY
                              ]
                            )}`
                          : error.message,
                    })}
                </HelpText>
              </>
            );
          }}
        />
      </Flex>
    </Modal>
  );
}

export default AddCommentModal;


//
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import qs from "query-string";

import {
  getListMerchant,
  getMerchantProfileConfig,
} from "@cms/app/apis/merchant";
import { useAppSelector } from "@cms/app/context";
import {
  IGetMerchantProfileConfigResponseData,
  IMerchantInfo,
  IMerchantProfileConfig,
} from "@cms/app/types/merchant";
import { isAdmin, omitIsNil } from "@cms/app/utils";
import { EMerchantProfile } from "@cms/app/constants";

interface FilterData {
  p: number;
  r: number;
  name: string;
}

const defaultFilterData: FilterData = {
  p: 1,
  r: 20,
  name: "",
};

const getInitialFilter = (search: string): FilterData => {
  const queryObj = qs.parse(search) as Partial<{
    p: string | number;
    r: string | number;
    name: string;
  }>;

  return {
    p: Number(queryObj.p) || defaultFilterData.p,
    r: Number(queryObj.r) || defaultFilterData.r,
    name: (queryObj.name as string) || defaultFilterData.name,
  };
};

interface QueryContextProps {
  tableData: {
    data: IMerchantInfo[];
    total: number;
  };
  filterData: FilterData;
  loading: boolean;
  merchantProfileConfig: Record<string, IMerchantProfileConfig>;
  setFilterData: (filter: Partial<FilterData>, replace?: boolean) => void;
  refetch: () => void;
}

const QueryContext = createContext<QueryContextProps | undefined>(undefined);

export const QueryContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const user = useAppSelector((s) => s.auth.user);
  const navigate = useNavigate();
  const location = useLocation();

  const [filterData, setFilterDataState] = useState<FilterData>(() =>
    getInitialFilter(location.search)
  );

  const { p, r, name } = filterData;

  // Prepare query for API call
  const apiQuery = useMemo(() => {
    return {
      r: r,
      name: name || undefined,
      p: p,
    };
  }, [r, name, p]);

  // Memoize query function to prevent unnecessary recreations
  const queryFn = useCallback(async () => {
    if (!isAdmin(user) && !user?.uid) {
      return { data: [], total: 0 };
    }

    return new Promise<{ data: IMerchantInfo[]; total: number }>(
      (resolve, reject) => {
        getListMerchant({
          name: "getListMerchant",
          param: {
            uid: user?.uid || "",
          },
          query: apiQuery,
          successHandler: {
            callBack: (resSuccess) => {
              resolve({
                data: resSuccess.data || [],
                total: resSuccess.total || 0,
              });
            },
          },
          errorHandler: {
            callBack: (error) => {
              reject(error);
            },
          },
        });
      }
    );
  }, [user, apiQuery]);

  // React Query hook
  const {
    data: tableData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<{
    data: IMerchantInfo[];
    total: number;
  }>({
    queryKey: ["merchant-list", user?.uid, apiQuery],
    queryFn,
    enabled: !!user && (isAdmin(user) || !!user?.uid),
    staleTime: 30000, // 30 seconds
    placeholderData: keepPreviousData,
  });

  const loading = isLoading || isFetching;

  // Query for merchant profile config (called once on mount, data rarely changes)
  const merchantProfileConfigQueryFn = useCallback(async () => {
    return new Promise<Array<IGetMerchantProfileConfigResponseData>>(
      (resolve, reject) => {
        getMerchantProfileConfig({
          successHandler: {
            callBack: (resSuccess) => {
              resolve(resSuccess.data || []);
            },
          },
          errorHandler: {
            notifyConfig: {
              isShow: false,
            },
            callBack: (error) => {
              reject(error);
            },
          },
        });
      }
    );
  }, []);

  const { data: merchantProfileConfigList = [] } = useQuery<
    Array<IGetMerchantProfileConfigResponseData>
  >({
    queryKey: ["merchant-profile-config"],
    queryFn: merchantProfileConfigQueryFn,
    staleTime: Infinity, // Never refetch automatically - data rarely changes
    gcTime: Infinity, // Keep in cache forever
    retry: 1, // Only retry once on error
  });

  // Transform merchant profile config data
  const merchantProfileConfig = useMemo<
    Record<string, IMerchantProfileConfig>
  >(() => {
    return merchantProfileConfigList.reduce((acc, item) => {
      const { name, ...restMerchantProfileConfig } = item;
      acc[name as EMerchantProfile] = {
        ...restMerchantProfileConfig,
      };
      return acc;
    }, {} as Record<string, IMerchantProfileConfig>);
  }, [merchantProfileConfigList]);

  // Wrapper for setFilterData to update URL
  const handleSetFilterData = useCallback(
    (filter: Partial<FilterData>, replace = false) => {
      const newFilter = {
        p: Number(filter.p) || 1,
        r: Number(filter.r) || 20,
        name: filter.name || "",
      };

      if (replace) {
        setFilterDataState(newFilter);
        const urlParams = omitIsNil(newFilter);
        const newSearch = `?${qs.stringify(urlParams)}`;
        navigate(`${location.pathname}${newSearch}`, { replace: true });
      } else {
        setFilterDataState((prev) => {
          const newState = omitIsNil({
            ...prev,
            ...newFilter,
          });
          const newSearch = `?${qs.stringify(newState)}`;
          navigate(`${location.pathname}${newSearch}`, { replace: true });
          return newState;
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterData]
  );

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      tableData: tableData || { data: [], total: 0 },
      filterData,
      loading,
      merchantProfileConfig,
      setFilterData: handleSetFilterData,
      refetch,
    }),
    [
      tableData,
      filterData,
      loading,
      merchantProfileConfig,
      handleSetFilterData,
      refetch,
    ]
  );

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
};
export const useQueryContext = () => {
  const ctx = useContext(QueryContext);
  if (!ctx) throw new Error("useQueryContext must be used within QueryContext");
  return ctx;
};

// import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';

import Modal from '@tdm/ui/v3.1.0/modal';
import Button from '@tdm/ui/v3.1.0/button';
import Flex from '@tdm/ui/v3.1.0/flex';
import CircleQuestionOutlinedIcon from '@tdm/ui/icon/CircleQuestionOutlinedIcon';
import AlertTriangleOutlinedIcon from '@tdm/ui/icon/AlertTriangleOutlinedIcon';
import CheckCircleOutlinedIcon from '@tdm/ui/icon/CheckCircleOutlinedIcon';
import AlertCircleOutlineIcon from '@tdm/ui/icon/AlertCircleOutlineIcon';

import TRANSLATE_KEY from '@cms/app/locales';

type ModalConfirmType = 'error' | 'warning' | 'info' | 'success';

export interface ModalConfirmProps {
  open: boolean;
  type?: ModalConfirmType;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  question: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  testId?: string;
}

const getDefaultIcon = (type: ModalConfirmType) => {
  switch (type) {
    case 'warning':
      return <AlertTriangleOutlinedIcon />;
    case 'info':
      return <CircleQuestionOutlinedIcon />;
    case 'success':
      return <CheckCircleOutlinedIcon />;
    case 'error':
      return <AlertCircleOutlineIcon />;
    default:
      return <AlertTriangleOutlinedIcon />;
  }
};

const iconContainerStyles = css({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: '8px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    color: 'inherit',
    width: '24px',
    height: '24px',
  },
});

const iconBackground = {
  warning: css({
    borderColor: 'var(--stroke-warning-weak, rgba(224, 114, 0, 0.20))',
    background: 'var(--fill-warning-weak, rgba(224, 114, 0, 0.05))',
    color: 'var(--text-icon-warning, rgba(224, 114, 0, 1))',
  }),
  info: css({
    borderColor: 'var(--stroke-information-weak, rgba(0, 64, 221, 0.2))',
    background: 'var(--fill-information-weak, rgba(0, 64, 221, 0.05))',
    color: 'var(--text-icon-information, rgba(0, 64, 221, 1))',
  }),
  success: css({
    borderColor: 'var(--stroke-success-weak, rgba(36, 138, 61, 0.20))',
    background: 'var(--fill-success-weak, rgba(36, 138, 61, 0.05))',
    color: 'var(--text-icon-success, rgba(36, 138, 61, 1))',
  }),
  error: css({
    borderColor: 'var(--stroke-error-weak, rgba(215, 0, 21, 0.20))',
    background: 'var(--fill-error-weak, rgba(215, 0, 21, 0.05))',
    color: 'var(--text-icon-error, rgba(215, 0, 21, 1))',
  }),
};

const ModalConfirmIcon = ({
  type,
  icon,
}: {
  type: ModalConfirmType;
  icon: React.ReactNode;
}) => {
  return <span css={[iconContainerStyles, iconBackground[type]]}>{icon}</span>;
};

const titleStyle = css({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '28px',
  textAlign: 'center',
  color: 'var(--text-primary)',
});

const questionStyle = css({
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  color: 'var(--text-secondary)',
  wordBreak: 'break-word',
});

/**
 * @deprecated Use modal.confirm from useTDMApp
 */
function ModalConfirm({
  open,
  type = 'warning',
  icon,
  title,
  question,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  loading = false,
  testId,
}: ModalConfirmProps) {
  const { t } = useTranslation();

  const renderIcon = icon || getDefaultIcon(type);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      width={416}
      centered
      closable={false}
      styles={{ footer: { borderTop: 'none' } }}
      footer={
        <Flex
          gap={12}
          justify="flex-end"
          style={{ width: '100%', marginBottom: '12px' }}
        >
          <Button
            variant="outlined"
            onClick={onCancel}
            disabled={loading}
            style={{ flex: 1 }}
            data-testid={
              testId ? `${testId}-modal-confirm-cancel-btn` : undefined
            }
          >
            {cancelButtonText || t(TRANSLATE_KEY.cancel)}
          </Button>
          <Button
            variant="solid"
            color={type === 'error' ? 'danger' : 'primary'}
            onClick={onConfirm}
            loading={loading}
            style={{ flex: 1 }}
            data-testid={
              testId ? `${testId}-modal-confirm-accept-btn` : undefined
            }
          >
            {confirmButtonText || t(TRANSLATE_KEY.confirm)}
          </Button>
        </Flex>
      }
    >
      <Flex vertical align="center" gap={8}>
        <ModalConfirmIcon type={type} icon={renderIcon} />
        <Flex vertical align="center" gap={4}>
          <div
            css={titleStyle}
            data-testid={testId ? `${testId}-modal-confirm-title` : undefined}
          >
            {title || t(TRANSLATE_KEY.confirm)}
          </div>
          <div
            css={questionStyle}
            data-testid={
              testId ? `${testId}-modal-confirm-question` : undefined
            }
          >
            {question}
          </div>
        </Flex>
      </Flex>
    </Modal>
  );
}

export default ModalConfirm;



/// 
import React, { useState, useEffect, forwardRef } from "react";
import styled from "@emotion/styled";
import { SxProps } from "@tdm/ui/theme";

import PlusAddFilledIcon from "@tdm/ui/v3.1.0/icon/icons/PlusAddFilledIcon";
import RemoveMinusOutlinedIcon from "@tdm/ui/v3.1.0/icon/icons/RemoveMinusOutlinedIcon";

type InputNumberOptions = {
  min?: number;
  max?: number;
  step?: number;
  allowDecimal?: boolean;
};

type InputNumberProps = {
  value: number | undefined | null | string;
  onChange: (value: number | string) => void;
  disabled?: boolean;
  options?: InputNumberOptions;
  invalid?: boolean;
  placeholder?: string;
  css?: SxProps;
  testId?: string;
};

const Container = styled.div<{ disabled?: boolean; invalid?: boolean }>`
  display: flex;
  align-items: center;
  border: 1.5px solid
    ${({ invalid, disabled }) =>
      invalid
        ? "var(--Stroke-error-strong)"
        : disabled
        ? "var(--Stroke-weak)"
        : "var(--Stroke-strong)"};
  border-radius: var(--corner-radius-radius-12);
  background: ${({ invalid, disabled }) =>
    disabled ? "var(--Fill-disabled)" : "transparent"};
  cursor: ${({ invalid, disabled }) => (disabled ? `not-allowed` : "pointer")};
  min-width: 44px;
  height: var(--button-height-standard);
  overflow: hidden;
  justify-content: space-between;
  padding: 9.5px 0px;
  /* Keep pointer-events enabled so the cursor style can be applied. */
  pointer-events: auto;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus-within {
    border-color: ${({ invalid }) =>
      invalid ? "var(--Stroke-error-strong)" : "var(--Stroke-strong)"};
    box-shadow: 0 0 0 4px
      ${({ invalid }) =>
        invalid ? "var(--Stroke-error-weak)" : "var(--Stroke-brand-weak)"};
  }
  &:hover {
    background-color: var(--Fill-hover);
  }
`;

const ValueInput = styled.input<{ invalid?: boolean; disabled?: boolean }>`
  flex: 1;
  text-align: center;
  font-size: var(--text-size-text-sm-standard);
  line-height: var(--text-line-height-text-sm-standard);
  color: ${({ invalid, disabled }) =>
    disabled ? "var(--Text-Icon-disabled)" : "var(--Text-Icon-strong)"};
  cursor: ${({ invalid, disabled }) => (disabled ? `not-allowed` : "pointer")};
  border: none;
  font-family: inherit;
  background: transparent;
  outline: none;
  width: 60px;
  height: var(--button-height-standard);
  min-width: 0;
  appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:disabled {
    background: transparent;
    color: var(--Text-Icon-disabled);
  }
  &::placeholder {
    color: var(--Text-Icon-disabled);
  }
`;
const IconButton = styled.button<{
  invalid?: boolean;
  disabled?: boolean;
  side: "left" | "right";
}>`
  width: var(--button-width-standard);
  height: var(--button-height-standard);
  font-size: var(--text-size-text-sm-standard);
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ invalid, disabled }) => (disabled ? `not-allowed` : "pointer")};
  color: ${({ invalid, disabled }) =>
    disabled ? "var(--Text-Icon-disabled)" : "var(--Text-Icon-weak)"};
  border-right: 1px solid
    ${({ invalid, disabled, side }) =>
      side === "left" ? "var(--Stroke-strong)" : "none"};
  border-left: 1px solid
    ${({ invalid, disabled, side }) =>
      side === "right" ? "var(--Stroke-strong)" : "none"};
  &:hover {
    color: ${({ invalid, disabled }) =>
      disabled ? "var(--Text-Icon-disabled)" : "var(--Text-Icon-strong)"};
  }
`;
/**
 * @deprecated Use InputNumber from @tdm/ui/v3.1.0/inputNumber
 */
const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      disabled,
      options = {},
      invalid,
      placeholder,
      css,
      testId,
    } = props;

    const {
      min = -Infinity,
      max = Infinity,
      step = 1,
      allowDecimal = false,
    } = options;

    // Local state để lưu giá trị input dạng string
    const [inputValue, setInputValue] = useState(
      value === null || value === undefined ? "" : String(value)
    );

    // Khi value từ cha thay đổi, đồng bộ lại inputValue
    useEffect(() => {
      if (value === null || value === undefined || isNaN(Number(value))) {
        setInputValue("");
      } else {
        setInputValue(String(value));
      }
    }, [value]);

    const handleDecrease = () => {
      let currentValue = Number(value);
      if (value === "" || isNaN(currentValue))
        currentValue = min > -Infinity ? min : 0;
      let next = currentValue - step;
      if (!allowDecimal) next = Math.round(next);
      if (next > min) onChange(next);
      else onChange(min);
    };
    const handleIncrease = () => {
      if (
        value === "" ||
        value === null ||
        value === undefined ||
        isNaN(Number(value))
      ) {
        onChange(min > -Infinity ? min : 0);
        return;
      }
      const currentValue = Number(value);
      let next = currentValue + step;
      if (!allowDecimal) next = Math.round(next);
      if (next < max) onChange(next);
      else onChange(max);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;
      if (!allowDecimal) val = val.replace(/[^0-9-]/g, "");
      setInputValue(val);
      onChange(val);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === "") {
        setInputValue("");
        onChange("");
        return;
      }
      let num = Number(val);
      if (!allowDecimal) num = Math.round(num);
      if (isNaN(num)) num = min > -Infinity ? min : 0;
      setInputValue(String(num));
      onChange(num);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        (!allowDecimal && (e.key === "." || e.key === ",")) ||
        (min >= 0 && e.key === "-")
      ) {
        e.preventDefault();
      }
    };

    return (
      <Container
        disabled={disabled}
        invalid={invalid}
        css={{ width: "100%", ...(css as object) }}
      >
        <IconButton
          type="button"
          side="left"
          onClick={handleDecrease}
          disabled={disabled || Number(value) <= min}
          aria-label="Decrease"
          data-testid={testId ? `${testId}--decrease-btn` : undefined}
        >
          <RemoveMinusOutlinedIcon width={16} height={16} />
        </IconButton>
        <ValueInput
          type="text"
          data-testid={testId ? `${testId}--input` : undefined}
          inputMode="numeric"
          value={inputValue}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          invalid={invalid}
          ref={ref}
        />
        <IconButton
          type="button"
          side="right"
          onClick={handleIncrease}
          disabled={disabled || Number(value) >= max}
          aria-label="Increase"
          data-testid={testId ? `${testId}--increase-btn` : undefined}
        >
          <PlusAddFilledIcon width={16} height={16} />
        </IconButton>
      </Container>
    );
  }
);

export default InputNumber;

// 
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ChangeEvent,
  type KeyboardEvent,
  useRef,
} from "react";
import Input, { InputRef, type InputProps } from "@tdm/ui/v3.1.0/input";
import SearchOutlinedIcon from "@tdm/ui/v3.1.0/icon/icons/SearchOutlinedIcon";

type DebouncedFn<T extends (...args: any[]) => void> = ((
  ...args: Parameters<T>
) => void) & { cancel: () => void };

const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 500
): DebouncedFn<T> => {
  let timer: ReturnType<typeof setTimeout>;
  const debounced = ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as DebouncedFn<T>;
  debounced.cancel = () => {
    clearTimeout(timer);
  };
  return debounced;
};

interface SearchInputProps
  extends Omit<InputProps, "value" | "defaultValue" | "onChange"> {
  value?: string;
  onSearch: (value: string) => void;
  delay?: number;
}

const SearchInput = ({
  value = "",
  onSearch,
  delay = 500,
  onKeyDown,
  ...restProps
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const debouncedSearch = useMemo(
    () => debounce(onSearch, delay),
    [onSearch, delay]
  );

  useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setInputValue(nextValue);
      debouncedSearch(nextValue);
    },
    [debouncedSearch]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);
      if (event.key === "Enter") {
        debouncedSearch.cancel();
        inputRef.current?.blur();
        onSearch(inputValue);
      }
    },
    [onKeyDown, debouncedSearch, onSearch, inputValue]
  );

  const handleClear = useCallback(() => {
    setInputValue("");
    debouncedSearch.cancel();
    inputRef.current?.blur();
    onSearch("");
  }, [debouncedSearch, onSearch]);

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      ref={inputRef}
      onClear={handleClear}
      prefix={<SearchOutlinedIcon />}
      allowClear
      {...restProps}
    />
  );
};

export default SearchInput;


//
const httpErrorMessages = {
  "200": "Success",
  "201": "Create",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Api not found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "uRI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "419": "Token expired",
  "421": "Misdirected Request",
  "422": "Unprocessable Content ",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Too Early",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "510": "Not Extended",
  "511": "Network Authentication Required",
};
const customErrorMessages = {
  "-1": "Server error",
  "-2": "Duplicate api",
  "-3": "Upload cancelled",
};
const errorMessages = {
  ...httpErrorMessages,
  ...customErrorMessages,
  "0": "OK",
  "1": "Wrong parameter",
  "2": "Merchant ID existed",
  "4": "Email already exist",
  "5": "System error",
  "8": "Not found packager credential",
  "9": "Not found key",
  "10": "Duplicate key",
  "11": "Sigma credential exist",
  "12": "Not found sigma credential",
  "400": "Bad request",
  "401": "Unauthorized",
  "403": "Forbidden",
  "404": "Not found",
  "408": "No permission",
  "419": "Token expired",
  "500": "Internal server error",
  "1001": "User not found",
  "1002": "Wrong password",
  "1003": "Counter existed",
  "1004": "User exists",
  "1005": "Portal exists",
  "1006": "Prefix exists",
  "1007": "Hotline is existed",
  "1009": "Hotline is used",
  "1010": "Workflow does not exist",
  "1011": "User joined portal",
  "1012": "Option group cannot delete",
  "1013": "Group does not exist",
  "1014": "Option schedule cannot delete",
  "1015": "Portal not found",
  "1016": "Member not found",
  "1017": "Invalid workflow nodes",
  "1018": "Invalid contact file",
  "1019": "Required phone number in contact file upload",
  "1020": "Contact phone number existed",
  "1021": "Tts error",
  "1022": "Upload url error",
  "1023": "Upload file error",
  "8000": "Grant role wrong",
  "8001": "Credential name already exists",
  "8002": "Credential not found",
  "9000": "No permission",
  "9001": "File not found",
  "10001": "This category does not exist",
  "10002": "Category name already exists",
  "10003": "Category is currently in use, so it cannot be deleted",
  "10004": "Post already exists",
  "10005": "This post does not exist",
  "10006": "This post is in the waiting status, so it cannot be edited",
  "10007": "This post has been approved, so it cannot be edited",
  "10008":
    "You are not the owner of this post and it is in draft status, so it cannot be edited",
  "10009": "This post is in the waiting status, so it cannot be delete",
  "10010": "This post is in the approved status, so it cannot be delete",
  "10011":
    "You are not the owner of this post and it is in draft status, so it cannot be delete",
  "10012": "Post is in draft, cannot be approve",
  "10013": "Post can only be approved in waiting status",
  "10014": "Post can only be rejected in waiting status",
  "10015": "Post can only be hidden in approved status",
  "11000": "Device does not exist",
  "11001": "Device is in blocked status",
  "11002": "Device is in unblocked status",
  "11003": "Device is in unblocked forever status",
  "11004": "User does not exist",
  "11005": "User is in blocked status",
  "11006": "User is in unblocked status",
  "11007": "User is in unblocked forever status",
  "12000":
    "Your link was used before. Please return to the sign in page and select Forgot password to receive a new email",
  "12001":
    "Your link has expired. To reset your password, please return to the sign in page and select Forgot password to receive a new email",
  "12002":
    "You have exceeded your daily limit to request. Please try again after 24 hours",
  "12003":
    "Your link does not exist. Please return to the sign in page and select Forgot password to receive a new email",
  "12004": "Your link is out of date. Please check the latest email",
  "12005": "New password must be different from your current password",
  "12006": "User is disabled",
  "12007": "Current password is incorrect",
  "12008": "Role already exists",
  "12009": "Role is currently in use, so it cannot be deleted",
  "12010": "Role does not exist",
  "12011": "Can not update scope of credential role",
  "12012": "Roles is required when update scope",
  "12013": "Roles do not exist",
  "12014": "Cannot update your email or scope or roles or active status",
  "12015": "Super merchant user already exists",
  "12016": "Email already exists",
  "12017": "User does not exist",
  "12018": "Password is not correct",
  "12019":
    "Password must be 6-20 characters and must contain at least one number, lowercase letter, uppercase letter and special character (!,@,#,$,&,*)",
  "12020": "Grant scope wrong",
  "12021": "User is disabled. Please contact admin",
  "12022": "Can not change username of user",
  "12023": "AccessToken invalid",
  "12024": "Fail to update user",
  "12025": "Please select merchant",
  "12026": "Email or password incorrect",
  "12027": "Some app are not belong to the merchant",
  "13007": "Can not update key",
  "13008": "Can not delete key",
  "13009":
    "Key rotation is currently disabled. Please update key rotation time value for successful key ingest",
  "13010":
    "Ingest key time is scheduled based on key rotation time. Please wait until the designated time to ingest key",
  "13011":
    "The maximum number of key has been reached. Please check max key rotation in merchant",
  "13012": "Can not disable the last enabled key",
  "13013": "App does not exist",
  "13014": "Merchant is disabled",
  "13015": "App is disabled",
  "13016": "Key ID already exists",
  "13017": "Merchant does not exist",
  "13018":
    "Merchant can only configure Key rotation time (minutes) within the allowed value range. Please contact the administrator to request additional access and try again",
  "13019":
    "Merchant doesn't have permission to configure Root. Please contact the administrator to request access and try again",
  "13020":
    "Merchant doesn't have permission to configure HDCP. Please contact the administrator to request access and try again",
  "13021":
    "Merchant doesn't have permission to configure Securities level within the permitted value range. Please contact the administrator to request additional access and try again",
  "13022":
    "Merchant doesn't have permission to configure Video resolution within the permitted value range. Please contact the administrator to request additional access and try again",
  "13023":
    "Merchant doesn't have permission to configure Limit multi screen within the permitted value range. Please contact the administrator to request additional access and try again",
  "13024":
    "Merchant doesn't have permission to configure Store license. Please contact the administrator to request access and try again",
  "13025":
    "Merchant doesn't have permission to configure Store license time within the permitted value range. Please contact the administrator to request additional access and try again",
  "13026":
    "Merchant can only configure License expire time (minutes) within the allowed value range. Please contact the administrator to request additional access and try again",
  "13027":
    " Merchant doesn’t have permission to configure the Multi DRM configuration. Please contact the administrator to request access and try again",
  "13028":
    "Merchant doesn't have permission to modify the Sigma DRM configuration. Please contact the administrator to request access and try again",
  "13029":
    "The Multi Screen setup for the Asset is only available when the app has Multi Screen enabled. Please enable Multi Screen for the current app or select a different app",
  "14002": "App not found",
  "14003": "Invalid upload file",
  "14004": "Invalid certificate. Fairplay setting not found",
  "14005": "Invalid certificate. App not found",
  "14006": "App name exist",
  "14007": "Invalid app jwt secret key",
  "14008":
    "Merchant doesn’t have permission to configure Allow locations within the permitted value range. Please contact the administrator to request additional access and try again",
  "14009":
    "Merchant doesn’t have permission to configure Verify license by queries. Please contact the administrator to request access and try again",
  "14010":
    "Merchant doesn't have permission to modify the Sigma DRM configuration. Please contact the administrator to request access and try again",
  "14011":
    "Merchant doesn't have permission to modify the Widevine, Playready. Please contact the administrator to request access and try again",
  "14012":
    "Merchant doesn't have permission to modify the Multi Screen configuration. Please contact the administrator to request access and try again",
  "14013":
    "Merchant doesn't have permission to configure Sigma Active Observer. Please contact the administrator to request access and try again",
  "14014":
    "The multi-screen feature of this app is currently disabled. Please enable the multi-screen feature before configuring the screen limit",
  "14015":
    "Merchant doesn’t have permission to modify the Multi DRM configuration. Please contact the administrator to request access and try again",
  "14016":
    "Merchant doesn’t have permission to modify the Sigma DRM configuration. Please contact the administrator to request access and try again",
  "15001": "Merchant trial does not exist",
  "15002": 'Information is in "doing" status',
  "15003": 'Information can only be transferred to done in "doing" status',
  "15004": "Contact us does not exist",
  "15005": "Can not delete merchant",
  "15006": "Merchant name existed",
  "15007": "Merchant ID existed",
  "15008": "Merchant email existed",
  "15009":
    "This SDK build has changed its status. Please check and try again later",
  "15010": "Not found merchant",
  "15011": "POC require start and end time",
  "15012": "Name only include characters, number, _",
  "15013": "Credential not found",
  "15014": "Email address already exists",
  "15015": "BOT API token address already exists",
  "15016": "This channel does not exist",
  "15017": "Credential name already exists",
  "16001": "Title already exists",
  "16002": "News does not exist",
  "16003": "Notification does not exist",
};
const forensicDetectionTran = {
  forensic_detection_title: "First, provide the required information",
  forensic_detection_title_form_url_title_1: "Paste video URL to detect",
  forensic_detection_title_form_url_title_2:
    "The URL only supports HLS and DASH streams, using the HTTP or HTTPS protocols.",
  forensic_detection_segment_duration_mess: "from 1 to 6 seconds",
  forensic_detection_title_form_file_title: "Then upload a video to detect",
  forensic_detection_title_form_file_rule_1:
    "Only MP4 format is supported and files up to 2 GB accepted.",
  forensic_detection_title_form_file_rule_2:
    "Resolution full HD and maximum 22 minutes long.",
  forensic_detection_start_detection_successfully:
    "The request has been sent successfully. Please check the status of the video in History.",
  forensic_detection_not_active:
    "Forensic Watermarking is disabled. Please Contact admin for access",
  forensic_detection_upload_and_detect: "Upload and Detect",
  forensic_detection_detect: "Detect",
  forensic_detection_uploading: "Uploading",
  forensic_detection_uploading_note:
    "Please do not leave this page. You will be automatically redirected to the processing",
  forensic_detection_error: "Detect fail",
  forensic_detection_mismatched_video_id:
    "Mismatched video ID. Please choose another videos",
  forensic_detection_server_error: "Server error. Please try again!",
  forensic_detection_merchant_id_required: "Merchant ID is required!",
  forensic_detection_file_invalid: "File invalid !",
};
const blogCategoryTran = {
  edit_category: "Edit category",
  category_name: "Category name",
  description: "Description",
  approve_question: "Do you want to approve",
  notify_merchant: "Notify merchant",
  approved_successfully: "Approved successfully",
  rejected_successfully: "Rejected successfully",
  post: "Post",
  post_reject_warning: "will not be displayed on your website",
  hidden_successfully: "Hidden successfully",
  do_you_want_to_hidden: "Do you want to hidden",
  this_content_has_been_deleted_or_is_unavailable:
    "This content has been deleted or is unavailable",
  go_to_list_post: "Go to list post",
  status_history: "Status history",
  table_of_contents: "Table of contents",
};
const notificationTran = {
  news: "news",
  title: "Title",
  full_description: "Full description",
};
const profileTran = {
  profile: "Profile",
  merchant_information: "Merchant information",
  update_profile: "Update profile",
  please_change_information_to_update: "Please change information to update",
  update_profile_success: "Update profile success!",
  user_does_not_exist: "User does not exist",
  current_password: "Current password",
  new_password: "New password",
  confirm_new_password: "Confirm new password",
  update_password: "Update password",
  please_enter_current_password: "Please enter current password",
  please_enter_new_password: "Please enter new password",
  please_enter_confirm_new_password: "Please enter confirm new password",
  personal_information: "Personal information",
  please_refresh_and_try_again: "Please refresh and try again",
  failed_to_update_profile: "Failed to update profile",
  please_try_again_later: "Please try again later",
  update_password_success: "Password updated successfully!",
  failed_to_update_password: "Failed to update password",
  invalid_email_address: "Invalid email address",
  enter_email: "Enter email",
  enter_scope: "Enter scope",
  enter_first_name: "Enter first name",
  enter_last_name: "Enter last name",
  phone: "Phone",
  enter_phone: "Enter phone",
  change_password: "Change password",
  enter_current_password: "Enter current password",
  password_must_be_at_least_6_characters:
    "must be 6-20 characters and must contain at least one number, lowercase letter, uppercase letter and special character (!,@,#,$,&,*)",
  enter_new_password: "Enter new password",
  passwords_do_not_match: "and new password that you entered do not match",
  enter_confirm_new_password: "Enter confirm new password",
  user_information_not_available: "User information not available",
  failed_to_fetch_merchant_information: "Failed to fetch merchant information",
  players: "Players",
  packager: "Packager",
  drm_scheme: "DRM scheme",
  streaming_format: "Streaming format",
  streaming_usecase: "Streaming usecase",
  max_key_rotation: "Max key rotation",
  website: "Website",
  display_name: "Display name",
  merchant_name: "Merchant name",
  company: "Company",
  loading_merchant_information: "Loading merchant information...",
};
const appTran = {
  app_config_limit_multi_screen_warning:
    "Please enable Multi Screen to configure screen limits for all assets",
  app_config_limit_multi_screen_des:
    "This setting will be applied to all assets of the application",
  app_limit_multi_screen_val_mess: "is integer from 1 to",
  app_name_val_mess:
    "is a string consisting of the characters [.A-Za-z0-9_-] with a maximum length of 50 and does not start or end with characters [.-]",
  app_jwt_secret_key_text_mess:
    "is a utf8 string of length {{length}} characters",
  app_jwt_secret_key_hex_mess:
    "is a hex string of length {{length}} characters",
  app_jwt_secret_key_base_64_mess:
    "is a base64 string of length {{length}} characters",
  app_callback_url_invalid_mess:
    "can include protocol, subdomain, domain and port",
  app_callback_data_json_mess: "is JSON string",
  app_drm_setting_certificate_mess:
    "only .cer files are allowed and maximum 1MB",
  app_drm_setting_private_key_mess:
    "only .pem files are allowed and maximum 1MB",
  app_go_to_drm_setting_question: "Do you want to adjust DRM setting for app",
  app_advance_setting_base_url_mess:
    "can include protocol, subdomain, domain and port",
  app_advance_setting_platform: "Platform",
  app_advance_setting_platform_des: "Whitelist encrypt license for platform",
  app_advance_setting_domain: "Domain (website)",
  app_advance_setting_domain_des: "Website's domain name. Ex: sigmadrm.com",
  app_advance_setting_domain_mess: "is not valid",
  app_advance_setting_package_identifier: "Package identifier (android)",
  app_advance_setting_package_identifier_des:
    "Every Android app has a unique application ID that looks like a Java package name, such as com.example.your app",
  app_advance_setting_package_identifier_mess:
    "We recommend using a reverse-domain string (com.domainname.appname). It cannot contain an asterisk (*)",
  app_advance_setting_signature: "Signature (android)",
  app_advance_setting_signature_des:
    "Application have signature after sign with a keystore",
  app_advance_setting_application_identifier:
    "Application identifier (WebOS & Tizen)",
  app_advance_setting_application_identifier_des:
    "Every SmartTV app has a unique application ID that looks like a Java package name, such as com.example.yourapp",
  app_advance_setting_signature_mess:
    "is a hex string of characters with a maximum length of length 40",
  app_advance_setting_application_identifier_mess:
    "We recommend using a reverse-domain string (com.domainname.appname). It cannot contain an asterisk (*)",
};
const assetTran = {
  asset_update_asset_config_multi_screen_for_app_off_multi_screen_warning:
    "This feature is only available for apps with Multi Screen enabled. Please enable Multi Screen for the current app",
  asset_ingest_key_config_multi_screen_for_app_off_multi_screen_warning:
    "This feature is only available for apps with Multi Screen enabled. Please enable Multi Screen for the current app or select a different app",
  key_rotation_time_val_mess: "is integer from",
  license_expire_time_val_mess: "is integer from",
  limit_multi_screen_val_mess: "is integer from 1 to",
  store_license_time_val_mess: "is integer from 1 to",
  asset_ingest_key_asset_id_mess:
    "must not start or end with a space character and less than 50 characters",
  asset_ingest_key_iv_description: "Input IV when using FairPlay",
  asset_key_rotation_time_description: "Please contact admin to open",
  asset_key_expire_time_description: "Please contact admin to open",
  asset_ingest_key_iv_val_mess:
    "must be 32 characters in length and contain characters [0-9a-z]",
  ingest_key_successfully: "Add key successfully",
  asset_ingest_key_key_id_mess: "does not match pattern UUID v4",
  asset_ingest_key_key_text_mess: "is a utf8 string of length 16 characters",
  asset_ingest_key_key_hex_mess: "is a hex string of length 32 characters",
  asset_ingest_key_key_base_64_mess:
    "is a base64 string of length 24 characters",
  asset_ingest_key_key_seed_text_mess:
    "is a utf8 string of length 24 characters",
  asset_ingest_key_key_seed_hex_mess: "is a hex string of length 48 characters",
  asset_ingest_key_key_seed_base_64_mess:
    "is a base64 string of length 32 characters",
  asset_key_management_disable_key_question: "Do you want to disable key",
  asset_key_management_enable_key_question: "Do you want to enable key",
  asset_update_key_iv_description: "Input IV when using FairPlay",
  asset_update_key_question:
    "Updating the key will affect the data you are using",
  convert_error_key_hex_format: "Value not valid HEX format",
  convert_error_key_text_format: "Value not valid TEXT format",
  convert_error_key_base64_format: "Value not valid BASE64 format",
  convert_error_key_cannot_convert_from_text_to_hex:
    "Cannot convert from TEXT to HEX",
  convert_error_key_cannot_convert_from_text_to_base64:
    "Cannot convert from TEXT to BASE64",
  convert_error_key_cannot_convert_from_hex_to_text:
    "Cannot convert from HEX to TEXT",
  convert_error_key_cannot_convert_from_hex_to_base64:
    "Cannot convert from HEX to BASE64",
  convert_error_key_cannot_convert_from_base64_to_text:
    "Cannot convert from BASE64 to TEXT",
  convert_error_key_cannot_convert_from_base64_to_hex:
    "Cannot convert from BASE64 to HEX",
};
const merchantTran = {
  merchant_config_poc_start_mess: "must be before POC end",
  merchant_config_poc_end_mess: "must be after POC start",
  merchant_id_mess:
    "includes only alphanumeric, underscores and must be less than 50 characters!",
  merchant_name_mess: "must be less than 50 characters!",
  merchant_create_max_key_rotation_mess: "or 1 or number divisible by 5",
  merchant_create_license_expire_time_range_email_mess_1:
    "value must be between",
  merchant_create_license_expire_time_range_email_mess_2:
    '"From" value must be less than or equal to "To" value',
  merchant_create_company_email_mess: "is not valid",
  merchant_create_website_mess: "is not valid",
  merchant_key_rotation_time_val_mess: "is integer from 0 to 43200",
  merchant_license_expire_time_val_mess: "is integer from",
  merchant_log_time_val_mess: "is integer from 1 to 36",
  merchant_store_license_time_val_mess: "is integer from 1 to 4294967295",
  merchant_warning_down_profile_mes:
    "You’ve just changed the package. The system has suggested the most suitable 'Securities level' value to ensure compatibility with the selected package",
  merchant_limit_multi_screen_val_mess: "is integer from",
  merchant_license_expire_time_range_from_greater_than_min:
    '"From" value cannot be lower than',
};
const freeTrialTran = {
  confirm_doing_question:
    "Do you want to transfer this information to the 'Doing' status?",
  done_status: "Done status",
  done_status_des:
    "This information will be transferred to 'Done' status and displayed in the information list",
  add_comment: "Add comment",
  doing: "Doing",
};
const freeTrialChannelTran = {
  free_trial_channel_create_email_mess: "is not valid",
  free_trial_channel_create_bot_token_mess:
    "is a character string with length from 6 to 460",
  free_trial_channel_create_chat_id_mess: "must be an INT64",
  channel_enable_question: "Do you want to enable this channel?",
  channel_disable_question: "Do you want to disable this channel?",
  channel_delete_question: "Do you want to delete this channel?",
  change_to_doing_question:
    "Do you want to transfer this information to the 'Doing' status?",
};
const notificationDisplayTran = {
  is_waiting: "is waiting",
  has_been: "has been",
  all: "All",
  unread: "Unread",
  notification: "Notification",
  a_new_post: "A new post",
  published: "published",
  display_notification_whats_news_end_of_list_message:
    "That's all your notifications.",
  display_notification_whats_news_loading_message: "Loading news...",
  display_notification_whats_news_empty_message:
    "You don't have notifications.",
  display_notification_read_all_whats_news_end_of_list_message:
    "You've read all your notifications.",
  display_notification_posts_end_of_list_message:
    "That's all your notifications from the last 30 days.",
  display_notification_posts_loading_message: "Loading posts...",
  display_notification_posts_empty_message:
    "You don't have notifications from the last 30 days.",
  display_notification_read_all_posts_end_of_list_message:
    "You've read all your notifications from the last 30 days.",
  posts: "Posts",
  whats_news: "What's news",
  display_notification_mark_all_as_read: "Mark all as read",
  display_notification_mark_as_read: "Mark as read",
  display_notification_mark_as_unread: "Mark as unread",
  display_notification_loading_more_message: "Loading more",
  recent: "Recent",
  minute: "minute",
  minutes: "minutes",
  hour: "hour",
  hours: "hours",
  last: "Last",
  yesterday: "Yesterday",
  view_more: "View more",
  view_less: "View less",
  waiting: "Waiting",
  draft: "Draft",
  approved: "Approve",
  rejected: "Reject",
  hidden: "Hidden",
  approval: "Approval",
};
const forensicHistoryTran = {
  forensic_history_request_detect: "Request detect",
  content_title: "Content title",
  model: "Model",
  watermark_ID: "Watermark ID",
  registered_time: "Registered time",
  completed_time: "Completed time",
};
const commonTran = {
  has_been: "has been",
  copied: "Copied",
  copy: "Copy",
  delete_channel_question: "Do you want to delete this channel?",
  invalid_url: "Invalid",
  error: "Error",
  upload: "Upload",
  or_drag_drop: "or drag drop",
  success: "Success",
  disable: "Disable",
  enable: "Enable",
  email_or_password_incorrect: "Email or password incorrect",
  blocked: "Blocked",
  unblocked: "Unblocked",
  "unblocked-forever": "Unblocked forever",
  block: "Block",
  unblock: "Unblock",
  unblock_forever: "Unblock forever",
  is_no_more_longer_than: "is no more longer than",
  characters: "characters",
  and: "and",
  should_not_begin_or_end_with_a_space: "should not begin or end with a space",
  create_successfully: "Created successfully",
  with_token: "with token",
  copy_to_clipboard: "Copy to clipboard",
  save_file: "Save file",
  warning: "Warning",
  form_not_changed: "Please perform edits or select cancel to exit!",
  update_successfully: "Updated successfully",
  config_successfully: "Config successfully",
  item_id: "Item ID",
  status: "Status",
  timestamp: "Timestamp",
  action: "Action",
  content_mode: "Content mode",
  period: "Period",
  message: "Message",
  other: "Other",
  from: "From",
  to: "To",
  all_mode: "All Mode",
  select_content_mode: "Select content mode",
  select_period: "Select period",
  merchant: "Merchant",
  user: "User",
  credential: "Credential",
  roles: "Roles",
  filters: "Filters",
  reset: "Reset",
  apply: "Apply",
  block_type: "Block type",
  filter: "Filter",
  select: "Select",
  search: "Search",
  license_type: "License type",
  license_expire: "License expire",
  report_by_day: "Report by day",
  export_reports: "Export reports",
  today: "Today",
  older: "Older",
  this_month: "This month",
  last_week: "Last week",
  last_month: "Last month",
  last_3_months: "Last 3 months",
  last_6_months: "Last 6 months",
  last_year: "Last year",
  all_time: "All time",
  succeeded: "Succeeded",
  denied: "Denied",
  failed: "Failed",
  total: "Total",
  date: "Date",
  users: "Users",
  devices: "Devices",
  ip_address: "IP address",
  license_per_drm_scheme: "License per DRM scheme",
  create: "Create",
  scope: "Scope",
  updated: "Updated",
  created: "Created",
  updated_by: "Updated by",
  updated_at: "Updated at",
  created_at: "Created at",
  name: "Name",
  by: "by",
  id: "ID",
  delivery_date: "Delivery date",
  user_id: "User ID",
  drm: "DRM",
  asset_id: "Asset ID",
  key_id: "Key ID",
  device_id: "Device ID",
  continue: "Continue",
  forgot_password: "Forgot password?",
  session_id: "Session ID",
  region: "Region",
  user_agent: "User agent",
  variant_id: "Variant ID",
  request_id: "Request ID",
  type: "Type",
  access_token: "Access token",
  reason: "Reason",
  role: "Role",
  add: "Add",
  cancel: "Cancel",
  input: "Input",
  cancel_form_question: "All your edit will be canceled. Do you want to exit?",
  yes: "Yes",
  no: "No",
  confirm: "Confirm",
  do_you_want_to_delete: "Do you want to delete",
  delete: "Delete",
  is_required: "is required",
  validation_error: "Validation error",
  delete_successfully: "Deleted successfully!",
  successfully: "successfully",
  device_information: "Device information",
  history: "History",
  data_invalid: "Data invalid",
  file_invalid: "File invalid",
  data_supported_json: "Only JSON file format is supported!",
  please_select_a_file_to_import: "Please select a file to import",
  add_successfully: "Add successfully!",
  create_by: "Create by",
  last_login: "Last login",
  email: "Email",
  entity: "Entity",
  update: "Update",
  permission: "Permission",
  unsave_change: "Unsaved changes",
  do_you_want_to_reset_password_for: "Do you want to reset password for",
  reset_password: "Reset password",
  reset_password_successfully: "Reset password successfully",
  youve_reset_successfully: "You've reset successfully",
  password_copy_new_password_below: "password! Copy the new password below.",
  copied_successfully: "Copied successfully",
  copy_failed: "Copy failed",
  item: "Item",
  config_permission: "Config permission",
  screen_setting: "Screen setting",
  update_failed: "Update failed",
  config_resource: "Config resource",
  delete_failed: "Delete failed",
  change: "Change",
  do_you_want_to_change_status_for: "Do you want to change status for",
  active: "Active",
  inactive: "Inactive",
  is: "is",
  invalid: "invalid",
  edit: "Edit",
  save: "Save",
  user_information: "User information",
  do_you_want_to: "Do you want to",
  close: "Close",
  method: "Method",
  path: "Path",
  create_resource: "Create resource",
  resource: "Resource",
  password: "Password",
  phone_number: "Phone number",
  first_name: "First name",
  last_name: "Last name",
  active_status: "Active status",
  the_following_roles_do_not_exist: "The following roles do not exist",
  super_merchant_already_exist_question:
    "This merchant already exists a Super Merchant. Do you want to change its Super Merchant?",
  password_description:
    "Password must be 6-20 characters and must contain at least one number, lowercase letter, uppercase letter and special character (!,@,#,$,&,*)",
  is_invalid: "is invalid",
  delivery_detail: "Delivery detail",
  comment: "Comment",
  done: "Done",
  service: "Service",
  add_channel: "Add channel",
  bot_api_token: "Bot API token",
  chat_id: "Chat ID",
  log_details: "Log details",
  bot_api_token_msg_err: "must be 6–460 characters",
  chat_id_msg_err: "must be an INT64",
  must_be_base64: "must be Base64",
  must_be_between_0_and_255: "must be between 0 and 255",
  platform: "Platform",
  export_delivery: "Export delivery",
  detail_history: "Detail history",
  view: "View",
  config: "Config",
  add_device: "Add device",
  approve: "Approve",
  reject: "Reject",
  hidden: "Hidden",
  select_all: "Select all",
  profile: "Profile",
  sign_out: "Sign out",
  edit_permission: "Edit permission",
  change_status: "Change status",
  update_asset: "Update asset",
  ingest_key: "Ingest key",
  update_key: "Update key",
  request_detect: "Request detect",
  saved_successfully: "Saved successfully",
  domain: "Domain",
  smart_tv_app_id: "Smart TV AppId",
  signature: "Signature",
  or: "or",
  blacklist: "Blacklist",
  package_identifier: "Package identifier",
  selected: "Selected",
  language: "Language",
  delete_question: "Do you want to delete",
  no_data: "It looks like you haven't recorded any data yet",
  start: "Start",
  no_status_change_history: "No status change history",
  no_table_of_contents: "No table of contents",
  submit: "Submit",
  go_back: "Go back",
  draft_post_will_be_deleted: "Draft post will be deleted after",
  days: "days",
  day: "day",
  hours: "hours",
  details: "Details",
  column_settings: "Column settings",
  more_actions: "More actions",
  invalid_value: "Invalid value",
  the_merchant_does_not_have_permission_to_configure_feat_des_1:
    "The merchant does not have permission to configure",
  the_merchant_does_not_have_permission_to_configure_feat_des_2: "Please",
  the_merchant_does_not_have_permission_to_configure_feat_des_3:
    "contact the administrator",
  the_merchant_does_not_have_permission_to_configure_feat_des_4:
    "to request access and try again",

  the_merchant_does_not_have_permission_to_configure_conf_des_1:
    "Merchant can only configure",
  the_merchant_does_not_have_permission_to_configure_conf_des_2:
    "within the allowed value range",
  the_merchant_does_not_have_permission_to_configure_conf_des_3:
    "Please adjust your settings or",
  the_merchant_does_not_have_permission_to_configure_conf_des_4:
    "contact the administrator",
  the_merchant_does_not_have_permission_to_configure_conf_des_5:
    "to request additional access and try again",
  apps: "Apps",
  all_apps: "All apps",
  all_locations: "All locations",
  app: "App",
};
const blockTran = {
  block_device: "Block device",
  unblock_device: "Unblock device",
  unblock_device_forever: "Unblock device forever",
  block_user: "Block user",
  unblock_user: "Unblock user",
  unblock_user_forever: "Unblock user forever",
  block_device_description:
    "This device will be blocked and the license cannot be obtained",
  unblock_device_description:
    "This device will be unblocked and the license can be obtained",
  unblock_device_forever_description:
    "This device will be unblocked and the license can be obtained forever",
  block_user_description:
    "This user will be blocked and the license cannot be obtained",
  unblock_user_description: "This user will be unblocked and receive a license",
  unblock_user_forever_description:
    "This user will be unblocked and receive a license forever",
};
const psshBoxGeneratorTran = {
  system_id: "System ID",
  key_ids: "Key IDs",
  input_key_ids_placeholder:
    "Input key IDs, putting each key ID (UUID, e.g. '09D7CB20-8FFD-44BE-9FED-EDAA282D66CC') on its own line...",
  input_base64_data_placeholder:
    "Input Base64-encoded content protection system specific data...",
  result: "Result",
  data: "Data",
  pssh_box: "PSSH Box",
  license_request: "License request",
  decode: "Decode",
  pssh_data: "PSSH Data",
  pssh_data_type: "PSSH data type",
  license_response: "License response",
  details: "details",
  decode_error: "Decode error",
  time: "Time",
  category: "Category",
  generate: "Generate",
  version: "Version",
  record_type: "Record type",
};
const widevineFormTran = {
  protection_scheme: "Protection Scheme",
  crypto_period_index: "Crypto Period Index",
  show_not_recommended_fields: "Show not recommended and deprecated fields.",
  hide_not_recommended_fields: "Hide not recommended and deprecated fields.",
  algorithm: "Algorithm",
  provider: "Provider",
  input_provider_placeholder: "Input the name of a content provider...",
  content_id: "Content ID",
  value_type: "Value type",
  input_base64_content_id_placeholder: "Input the Base64-encoded content ID...",
  input_content_id_placeholder: "Input the content ID...",
  policy: "Policy",
  input_policy_placeholder: "Input the name of a policy...",
  smart_tv: "Smart TV",
};
const playReadyFormTran = {
  // PlayReady Form
  value: "Value",
  input_record_base_64_value_placeholder:
    "Input the Base64 value of a record and specify its encoding...",
  input_record_xml_value_placeholder:
    "Input the XML value of a record and specify its encoding...",
  create_new_record: "Create new record",
};

const drmConfigurationTran = {
  max_difference_time: "Max difference time",
  please_input_max_difference_time: "Please input max difference time",
  max_difference_time_val_mess:
    "The time should be in (d, h, m, s) format and must not exceed 365 days",
  drm_configuration_confirm_cancel_edit:
    "All your edit will be canceled. Do you want to exit",
  drm_configuration_confirm_update: "Do you want to save this change",
  please_check_and_try_again: "Please check and try again",
  version_val_mess: "must be in MAJOR.MINOR.PATCH format without whitespace",
  supported_from_version: "Supported from version",
  deprecated_versions: "Deprecated versions",
  supported_version: "Supported version",
  device_restriction: "Device restriction",
  model_name: "Model name",
  manufacture: "Manufacture",
  drm_configuration_confirm_delete: "Do you want to delete this item from the",
  drm_configuration_confirm_delete_multi1: "Do you want to delete",
  drm_configuration_confirm_delete_multi2: "items from the",
  whitelist: "Whitelist",
  blacklist: "Blacklist",
  platform_version: "Platform version",
  platform_version_description:
    "Please enter the app version in MAJOR.MINOR.PATCH format (e.g., 1.0.0, 2.5.3).",
  client_server_time_difference: "Client-Server Time Difference",
  max_difference_time_description:
    "Specify the maximum allowed time difference between the client and the server (e.g., 1h1m1s).",
  domain_smart_tv_app_id_description:
    "A domain (e.g., example.com) or a Smart TV AppId (e.g., com.company.app).",
  signature_description: "An Android app signature (SHA-1 or SHA-256 format).",
};

const loginTran = {
  you_do_not_have_permission_to_access_this_system:
    "You do not have permission to access this system. Please contact admin!",
};

const forgotPasswordTran = {
  confirm_password: "Confirm password",
  forgot_password_successfully: "Forgot password successfully",
  forgot_password_description:
    "Use your email to continue with Sigma Media Ecosystem",
  reset_password_description:
    "You’ll use this password to sign in to Sigma DRM",
  send_email: "Send email",
  set_password: "Set password",
  forgot_token_incorrect:
    'Your link does not exist. Please return to the sign in page and select "Forgot password" to receive a new email',
  forgot_token_expired:
    'Your link has expired. To reset your password, please return to the sign in page and select "Forgot password" to receive a new email',
  forgot_token_is_used:
    'Your link was used before. Please return to the sign in page and select "Forgot password" to receive a new email',
  old_forgot_token: "Your link is out of date. Please check the latest email",
  back_to_sign_in: "Back to sign in",
  did_you_remembered_your_password: "Did you remembered your password?",
  sign_in: "Sign in",
  message_response_forgot_password_1:
    "If you don’t find the email in your inbox, check your spam folder",
  message_response_forgot_password_2:
    "Sigma DRM does not offer self-registration. Please contact us if you need support via:",
  and_new_password_that_you_entered_do_not_match:
    "and new password that you entered do not match",
};

const roleTran = {
  edit_role: "Edit role",
  delete_role: "Delete role",
};

const blogTran = {
  tags: "Tags",
  tag: "Tag",
  blog_tag_description:
    "Tag is string characters [A-Za-z0-9_-] and no more than 30 characters in length",
  short_description: "Short description",
  thumbnail: "Thumbnail",
  categories: "Categories",
  post_name: "Post name",
  draft_saved_successfully: "Draft saved successfully",
  the_following_categories_do_not_exist:
    "The following categories do not exist:",
  save_as_draft: "Save as draft",
  content: "Content",
};
const pageTitle = {
  DASHBOARD_TITLE: "Dashboard",
  REPORTS_TITLE: "Reports",
  RESTRICTIONS_TITLE: "Restrictions",
  RESTRICTIONS_USERS_TITLE: "User Restrictions",
  RESTRICTIONS_DEVICES_TITLE: "Device Restrictions",
  DELIVERIES_TITLE: "Deliveries",
  FORENSIC_TITLE: "Forensic Watermarking",
  HISTORY_TITLE: "History",
  FORENSIC_DETECTION_TITLE: "Detection",
  FORENSIC_HISTORY_TITLE: "History",
  ASSETS_TITLE: "Assets",
  CREDENTIALS_TITLE: "Credentials",
  APPS_TITLE: "Apps",
  USER_MANAGEMENT_TITLE: "User Management",
  USER_MANAGEMENT_MERCHANT_TITLE: "Merchant",
  USER_MANAGEMENT_MERCHANT_MANAGEMENT_TITLE: "Merchant",
  USER_MANAGEMENT_MERCHANT_FREE_TRIAL_TITLE: "Free Trial",
  USER_MANAGEMENT_MERCHANT_FREE_TRIAL_CHANNEL_TITLE: "Free Trial Channel",
  USER_MANAGEMENT_USERS_TITLE: "Users",
  USER_MANAGEMENT_ROLES_TITLE: "Roles",
  USER_MANAGEMENT_PERMISSIONS_TITLE: "Permissions",
  DRM_CONFIGURATION_TITLE: "DRM Configuration",
  DRM_CONFIGURATION_WIDEVINE_TITLE: "Widevine",
  DRM_CONFIGURATION_PLAYREADY_TITLE: "PlayReady",
  FORENSIC_WATERMARKING_TITLE: "Forensic Watermarking",
  FORENSIC_WATERMARKING_DETECTION_TITLE: "Detection",
  FORENSIC_WATERMARKING_HISTORY_TITLE: "History",
  TOOLS_TITLE: "Tools",
  TOOLS_PLAYER_TITLE: "Player",
  TOOLS_DECODERS_TITLE: "Decoders",
  TOOLS_DECODERS_CODECS_STRING_TITLE: "Codecs String",
  TOOLS_DECODERS_PSSH_BOX_TITLE: "PSSH Box",
  TOOLS_DECODERS_PSSH_DATA_TITLE: "PSSH Data",
  TOOLS_DECODERS_LICENSE_REQUEST_TITLE: "License Request",
  TOOLS_DECODERS_LICENSE_RESPONSE_TITLE: "License Response",
  TOOL_GENERATORS_TITLE: "Generators",
  CONTACT_TITLE: "Contacts",
  CONTACT_CUSTOMERS_TITLE: "Customers",
  CONTACT_CONFIG_CHANNEL_TITLE: "Config Channel",
  NOTIFICATION_TITLE: "Send Notification",
  BLOG_TITLE: "Blog",
  BLOG_POSTS_TITLE: "Posts",
  BLOG_POSTS_WAITING_TITLE: "Waiting posts",
  BLOG_POSTS_OTHER_TITLE: "Other posts",
  BLOG_POSTS_CREATE_TITLE: "Create Post",
  BLOG_POSTS_DETAIL_TITLE: "Post Detail",
  BLOG_POSTS_EDIT_TITLE: "Edit Post",
  BLOG_CATEGORIES_TITLE: "Categories",
  LOGS_TITLE: "Logs",
  DOCUMENTATIONS_TITLE: "Documentations",
  PROFILE_TITLE: "Profile",
  LOGIN_TITLE: "Login",
  FORGOT_PASSWORD_TITLE: "Forgot Password",
  NOT_FOUND_TITLE: "Page Not Found",
};

// Documents
const documentsTran = {
  doc_introduction: "Introduction",
  doc_documents: "Documents",
  doc_users_guide: "User Guide",
  doc_users_guide_dashboard: "Dashboard",
  doc_users_guide_app_manager: "App Manager",
  doc_users_guide_asset_manager: "Asset Manager",
  doc_users_guide_report: "Report",
  doc_users_guide_license_detail: "License Detail",
  doc_users_guide_packager_test: "Packager Test",
  doc_integration: "Integration",
};

// SDK SmartTV
const SDKSmartTVTran = {
  key: "Key",
  version_is_required: "Version is required",
  sdk_version_not_found: "SDK version not found",
  the_system_will_start_building_the_smarttv_sdk_for_merchant:
    "The system will start building the SmartTV SDK for merchant {{merchantName}}",
  update_successfully: "Update successfully",
};
const en = {
  ...errorMessages,
  ...pageTitle,
  //app
  ...appTran,
  //asset
  ...assetTran,
  //merchant
  ...merchantTran,
  //freeTrial
  ...freeTrialTran,
  //freeTrial channel
  ...freeTrialChannelTran,
  // forensic_history
  ...forensicHistoryTran,
  // forensic_detection
  ...forensicDetectionTran,
  // blog_categories
  ...blogCategoryTran,
  // Notification
  ...notificationTran,
  // profile
  ...profileTran,
  // Notification display
  ...notificationDisplayTran,
  //block
  ...blockTran,
  // pssh box generator
  ...psshBoxGeneratorTran,
  // Widevine Form
  ...widevineFormTran,
  // PlayReady Form
  ...playReadyFormTran,
  // role
  ...roleTran,
  // drm configuration
  ...drmConfigurationTran,
  // login
  ...loginTran,
  // forgot password
  ...forgotPasswordTran,
  // blog
  ...blogTran,
  // common
  ...commonTran,
  // documents
  ...documentsTran,
  // SDK SmartTV
  ...SDKSmartTVTran,

  // common
  "common.enter": "Enter",
  "common.create": "Create",
  "common.cancel": "Cancel",
  "common.select": "Select",
  "common.input": "Input",
  "common.update": "Update",
  "common.delete": "Delete",
  "common.search": "Search",
  "common.by": "by",
  "common.actions": "Actions",
  "common.setting": "Setting",
  "common.error": "Error",
  "common.config": "Config",
  "common.packager": "Packager",
  "common.client": "Client",
  "common.for": "for",
  "common.information": "Information",
  "common.no_data_recorded_yet": "No data recorded yet",
  "common.please_select_merchant": "Please select merchant",
  "common.id": "ID",
  "common.user": "user",
  "common.do_you_want_to_delete": "Do you want to delete",
  "common.close": "Close",
  "common.confirm": "Confirm",
  "common.active_input": "Active status",
  "common.add": "Add",
  "common.import": "Import",
  "common.minutes": "minutes",
  "common.months": "months",
  "common.all": "All",

  // dashboard
  "dashboard.overview": "Overview",
  "dashboard.last_updated": "Last updated",
  "dashboard.refresh": "Refresh",
  "dashboard.today": "Today",
  "dashboard.refresh_every": "Refresh every",
  "dashboard.license_deliveries": "License Deliveries",
  "dashboard.total_license_request": "Total License Request",
  "dashboard.average_latency_by_drm": "Average Latency By DRM",
  "dashboard.top_10_assets_by_license_request":
    "Top 10 Assets By License Request",
  "dashboard.license": "License",
  "dashboard.license_per_drm_scheme": "License Per DRM Scheme",
  "dashboard.average_transactions_per_second":
    "Average Transactions per second",
  "dashboard.latency_analysis": "Latency Analysis",
  "dashboard.location_ranking": "Location Ranking",
  "dashboard.latencyAnalysis.authentication":
    "Authentication time: Processing time of the partner system",
  // report
  "report.transactions_per_second": "Transactions per second",
  "report.latency_analysis": "Latency Analysis",
  //Restrictions - users
  "restrictions.users.user_id": "User ID",
  "restrictions.users.merchant_name": "Merchant name",
  "restrictions.users.status": "Status",
  "restrictions.users.time_stamp": "Time stamp",
  "restrictions.users.history": "History",
  "restrictions.users.reason": "Reason",
  "restrictions.users.actions": "Actions",
  //Restrictions - devices
  "restrictions.device": "Device",
  "restrictions.search_device_id": "deviceID",
  "restrictions.devices.item_id": "Device ID",
  "restrictions.devices.merchant_name": "Merchant name",
  "restrictions.devices.status": "Status",
  "restrictions.devices.time_stamp": "Time stamp",
  "restrictions.devices.block_type": "Block type",
  "restrictions.devices.history": "History",
  "restrictions.devices.reason": "Reason",
  "restrictions.devices.actions": "Actions",
  "restrictions.devices.device_information": "Device information",
  "restrictions.reason": "Reason",

  //deliveries
  "deliveries.date": "Deliveries date",
  "deliveries.status": "Status",
  "deliveries.message": "Message",
  "deliveries.license_type": "License type",
  "deliveries.user_id": "UserID",
  "deliveries.key_id": "KeyID",
  "deliveries.device_id": "DeviceID",
  "deliveries.asset_id": "AssetID",
  "deliveries.session_id": "SessionID",
  "deliveries.drm_scheme": "DRM Scheme",
  "deliveries.region": "Region",
  "deliveries.ip_address": "IP Address",
  "deliveries.user_agent": "User agent",
  "deliveries.variant_id": "VariantID",
  "deliveries.request_id": "RequestID",
  "deliveries.type": "Type",
  "deliveries.access_token": "Access token",
  "delivery.detail": "Delivery information",
  // assets
  "asset.asset": "Asset",
  "asset.asset_id": "Asset ID",
  "asset.mode": "Mode",
  "asset.app_name": "App name",
  "asset.profile": "Profile",
  "asset.quality": "Quality",
  "asset.hdcp": "HDCP",
  "asset.key_rotation": "Key rotation",
  "asset.license_expire": "License expire",
  "asset.root": "Root",
  "asset.multi_screen": "Multi screen",
  "asset.keys": "Keys",
  "asset.ingest_key": "Ingest key",
  "asset.merchant": "Merchant",
  "asset.key_rotation_time": "Key rotation time",
  "asset.key_type": "Key type",
  "asset.license_expire_time": "License expire time",
  "asset.minutes": "minutes",
  "asset.screen_limit": "Screen limit",
  "asset.key": "Key",
  "asset.iv": "IV",
  "asset.key_id": "Key ID",
  "asset.drm_scheme": "DRM scheme",
  "asset.app": "App",
  "asset.securities_level": "Securities level",
  "asset.invalid_value": "Invalid value",
  "asset.key_rotation_time_val_mess": "is integer from",
  "asset.license_expire_time_val_mess": "is integer from",
  "asset.limit_multi_screen_val_mess": "is integer from 1 to",
  "asset.store_license": "Store license",
  "asset.store_license_time": "Store license time",
  "asset.store_license_time_val_mess": "is integer from 1 to",
  "asset.update_asset_config_multi_screen_for_app_off_multi_screen_warning":
    "This feature is only available for apps with Multi Screen enabled. Please enable Multi Screen for the current app",
  // credentials
  "credentials.credentials": "Credentials name",
  "credentials.roles": "Roles",
  "credentials.actions": "Actions",
  "credentials.credential": "credential",
  // apps
  app: "app",
  "app.app": "App name",
  "app.status": "Status",
  "app.appid": "App ID",
  "app.merchantid": "MerchantID",
  "app.authorization": "Authorization",
  "app.allow": "Allow locations",
  "app.actions": "Actions",
  "app.create_title": "Create new app",
  "app.create_button": "Create",
  "app.merchant_input": "Merchant",
  "app.location_input": "Allow locations",
  "app.active_input": "Active status",
  "app.verify_license": "Verify license by queries",
  "app.multi_screen": "Multi screen",
  "app.drm_setting": "DRM setting",
  "app.advanced_setting": "Advanced setting",
  "app.config_screen_limit": "Config screen limit",
  "app.integrated_information": "Integrated information",
  "app.app_config_limit_multi_screen_title":
    "Config screen limit for all asset",
  "app.app_drm_setting": "DRM setting",
  "app.app_advanced_setting": "Advanced setting",
  "app.jwt_secret_key_input": "JWT Secret Key",
  // merchant
  "merchant.merchant": "Merchant",
  "merchant.uuid": "Uuid",
  "merchant.company": "Company",
  "merchant.region": "Region",
  "merchant.merchant_id": "Merchant ID",
  "merchant.profile": "Profile",
  "merchant.allow_locations": "Allow locations",
  "merchant.created": "Created",
  "merchant.actions": "Actions",
  "merchant.sao_smart_tv_sdk": "SAO SmartTV SDK",
  "merchant.configuration": "Configuration",
  "merchant.information": "Information",
  "merchant.estimation": "Estimation",
  "merchant.merchant_name": "Merchant name",
  "merchant.merchant_name_mess": "must be less than 50 characters",
  "merchant.merchant_id_mess":
    "includes only alphanumeric, underscores and must be less than 50 characters",
  "merchant.status": "Status",
  "merchant.poc_start": "POC start",
  "merchant.poc_end": "POC end",
  "merchant.config_poc_start_mess": "must be before POC end",
  "merchant.config_poc_end_mess": "must be after POC start",
  "merchant.drm_scheme": "DRM scheme",
  "merchant.allow_root": "Allow root",
  "merchant.securities_level": "Securities level",
  "merchant.max_key_rotation": "Max key rotation",
  "merchant.min_key_rotation_time": "Min key rotation time",
  "merchant.key_rotation_time_val_mess": "is integer from 0 to 43200",
  "merchant.license_expire_time_range": "License expire time range",
  "merchant.min_license_expire_time": "Min license expire time",
  "merchant.license_expire_time_val_mess": "is integer from",
  "merchant.logs_time": "Logs time",
  "merchant.logs_time_val_mess": "is integer from 0 to 36",
  "merchant.store_license": "Store license",
  "merchant.store_license_time": "Store license time",
  "merchant.store_license_time_val_mess": "is integer from 1 to 4294967295",
  "merchant.create_max_key_rotation_mess": "or 1 or number divisible by 5",
  "merchant.from": "From",
  "merchant.to": "To",
  "merchant.first_name": "First name",
  "merchant.last_name": "Last name",
  "merchant.company_email": "Company email",
  "merchant.website": "Website",
  "merchant.create_website_mess": "is invalid",
  "merchant.country": "Country",
  "merchant.expected_monthly_users": "Expected monthly users",
  "merchant.streaming_formats_you_use": "Streaming formats you use",
  "merchant.streaming_use_case": "Streaming use case",
  "merchant.encoders_packagers_you_use": "Encoders/packagers you use",
  "merchant.video_players_you_use": "Video players you use",
  "merchant.comment": "Comment",
  "merchant.hdcp": "HDCP",
  "merchant.verify_license_by_queries": "Verify license by queries",
  "merchant.sigma_active_observer": "Sigma Active Observer",
  "merchant.multi_screen": "Multi-screen",
  "merchant.fingerprint": "Fingerprint",
  "merchant.forensic_watermarking": "Forensic Watermarking",
  "merchant.limit_multi_screen": "Limit multi-screen",
  "merchant.limit_multi_screen_val_mess": "is integer from 1 to 10",
  "merchant.search_by_merchant_id": "Search by merchant ID",
  // free trial
  "freeTrial.company": "Company",
  "freeTrial.contact": "Contact",
  "freeTrial.expected": "Expected",
  "freeTrial.status": "Status",
  "freeTrial.comment": "Comment",
  "freeTrial.updated": "Updated",
  "freeTrial.actions": "Actions",
  "freeTrial.doing": "Doing",
  "freeTrial.done": "Done",
  "freeTrial.add_comment": "Add comment",
  "freeTrial.detail_history": "Detail history",
  "freeTrial.open_website": "Open website",
  // free trial channel
  "freeTrialChannel.service": "Service",
  "freeTrialChannel.detail": "Detail",
  "freeTrialChannel.createAt": "Create At",
  "freeTrialChannel.status": "Status",
  "freeTrialChannel.actions": "Actions",
  "freeTrialChannel.add_channel": "Add channel",
  // User
  "user.id": "UserID",
  "user.detail": "Detail",
  "user.user": "Users",
  "user.scope": "Scope",
  "user.status": "Status",
  "user.role": "Role",
  "user.app": "App",
  "user.created_at": "Created",
  "user.ip": "IP",
  "user.last_login": "Last login",
  "user.actions": "Actions",
  "user.reset_password": "Reset Password",
  "user.delete_user": "Delete User",
  "user.create_user": "Create User",
  "user.update_user": "Update User",
  "user.search_by_email": "Search by email",
  "user.email": "Email",
  "user.password": "Password",
  "user.confirm_password": "Confirm Password",
  "user.create": "Create",
  "user.update": "Update",
  // Roles
  "roles.name": "Name",
  "roles.scope": "Scope",
  "roles.roles": "Roles",
  "roles.description": "Description",
  "roles.updated_at": "Updated at",
  "roles.created_by": "Created by",
  "roles.type": "Type",
  "roles.status": "Status",
  "roles.actions": "Actions",
  "roles.config_permission": "Config permission",
  "roles.screen_setting": "Screen setting",
  // Permissions
  "permissions.permissions": "Permissions",
  "permissions.name": "Name",
  "permissions.entity": "Entity",
  "permissions.updated_by": "Updated by",
  "permissions.created_at": "Created at",
  "permissions.actions": "Actions",
  "permissions.config_resource": "Config resource",
  "permissions.create_resource": "Create resource",
  "permissions.resource_name": "Name",
  "permissions.path": "Path",
  "permissions.resource_method": "Method",
  "permissions.create_another_resource": "Create another resource",

  // forensic watermarking
  "forensic_watermarking.merchant": "Merchant",
  "forensic_watermarking.content_title": "Content title",
  "forensic_watermarking.model": "Model",
  "forensic_watermarking.watermark_id": "Watermark ID",
  "forensic_watermarking.status": "Status",
  "forensic_watermarking.description": "Description",
  "forensic_watermarking.registered_time": "Registered time",
  "forensic_watermarking.completed_time": "Completed time",
  "forensic_watermarking.detect": "Detect",
  // Contact - customers
  "contact.customers.name": "Name",
  "contact.customers.phone": "Phone number",
  "contact.customers.description": "Description",
  "contact.customers.status": "Status",
  "contact.customers.comment": "Comment",
  "contact.customers.add_comment": "Add comment",
  "contact.customers.add_your_comment": "Add your comment",
  "contact.customers.add_comment_des":
    "Leave your comments to let relevant people know the latest updates",
  "contact.customers.input_your_comment": "Input your comment",
  "contact.customers.updateBy": "Updated by",
  "contact.customers.actions": "Actions",
  "contact.customers.change_status": "Change status",
  "contact.customers.history": "History",
  "contact.customers.done": "Done",
  "contact.customers.doing": "Doing",
  "contact.customers.add_successfully": "Add successfully!",
  "contact.customers.update_successfully": "Update successfully!",
  "contact.customers.cancel": "Cancel",
  "contact.customers.close": "Close",
  "contact.customers.add": "Add",
  "contact.customers.input": "Input",
  "contact.customers.unsave_change": "Unsave change",
  "contact.customers.cancel_form_question":
    "Are you sure you want to cancel the form?",
  "contact.customers.done_status": "Change status to Done",
  "contact.customers.done_status_des":
    'This information will be transferred to "Done" status and displayed in the information list',
  "contact.customers.time": "Time",
  "contact.customers.updated_by": "Updated by",
  "contact.customers.search": "Search",
  "contact.customers.select": "Select",
  "contact.customers.change_to_doing_question":
    'Are you sure you want to change the status to "Doing"?',
  // Contact - config channel
  "contact.config.service": "Service",
  "contact.config.detail": "Detail",
  "contact.config.createAt": "Create At",
  "contact.config.status": "Status",
  "contact.config.actions": "Actions",
  "contact.config.change_status": "Change status",
  "contact.config.delete": "Delete",
  "contact.config.add_channel": "Add channel",
  "contact.config.select": "Select",
  "contact.config.create_successfully": "Add successfully!",
  "contact.config.cancel": "Cancel",
  "contact.config.add": "Add",
  "contact.config.is_invalid": "is invalid",
  "contact.config.input": "Input",
  "contact.config.email": "Email",
  "contact.config.bot_api_token": "Bot API Token",
  "contact.config.bot_api_token_msg_err": "must be 6–460 characters",
  "contact.config.chat_id": "Chat ID",
  "contact.config.chat_id_msg_err": "must be an INT64",
  "contact.config.unsave_change": "Unsave change",
  "contact.config.cancel_form_question":
    "Are you sure you want to cancel the form?",
  "contact.config.delete_successfully": "Delete successfully!",
  "contact.config.update_successfully": "Update successfully!",
  "contact.config.channel_delete_question":
    "Do you want to delete this channel?",
  "contact.config.channel_disable_question":
    "Do you want to disable this channel?",
  "contact.config.channel_enable_question":
    "Do you want to enable this channel?",
  "contact.config.disable": "Disable",
  "contact.config.enable": "Enable",

  // Notification
  "notification.notification": "Notification",
  "notification.title": "Title",
  "notification.description": "Description",
  "notification.created_at": "Created at",
  "notification.actions": "Actions",

  // Blog - Categories
  "blog.categories.delete_successfully": "Delete successfully!",
  "blog.categories.update_successfully": "Update successfully!",
  "blog.categories.create_successfully": "Create successfully!",
  "blog.categories.confirm": "Confirm",
  "blog.categories.do_you_want_to_delete": "Do you want to delete",
  "blog.categories.category": "Category",
  "blog.categories.delete": "Delete",
  "blog.categories.name": "Name",
  "blog.categories.description": "Description",
  "blog.categories.created_at": "Created at",
  "blog.categories.updated_at": "Updated at",
  "blog.categories.actions": "Actions",
  "blog.categories.search": "Search",
  "blog.categories.by": "by",
  "blog.categories.category_name": "Category name",
  "blog.categories.create": "Create",
  "blog.categories.unsave_change": "Unsave change",
  "blog.categories.cancel_form_question":
    "Are you sure you want to cancel the form?",
  "blog.categories.form_not_changed":
    "Please perform edits or select cancel to exit!",
  "blog.categories.update": "Update",
  "blog.categories.cancel": "Cancel",
  "blog.categories.input": "Input",
  "blog.categories.action": "Action",
} as const;

export default en;
// 
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import { DATE_FORMAT, ETaskStatus } from "@cms/app/constants";
import TimelineHistoryModal, {
  type TimelineFieldMapping,
} from "@cms/app/components/v3.1.0/TimelineHistory";
import { getListFreeTrialHistory } from "@cms/app/apis/freeTrial";

import FreeTrialStatus from "../FreeTrialStatus";
import { EModalType, useModalContext } from "../../contexts/ModalContext";
import { IFreeTrialHistory } from "@cms/app/types/freeTrial";

// ============================== Field Mapping ==============================
const fieldMapping: TimelineFieldMapping<IFreeTrialHistory> = {
  getTime: (item) => {
    return dayjs(item.createdAt).format(DATE_FORMAT.DD_MM_YYYY_HH_MM_SS);
  },
  getStatus: (item) => String(item.status),
  getUserName: (item) => item.author?.name || "",
  getDescription: (item) => item.comment,
  getId: (item, index) => `${item.createdAt}-${index}`,
};

// ==============================  Main Component ==============================

function CommentHistory() {
  const { type, data, closeModal } = useModalContext();
  const open = useMemo(() => type === EModalType.HISTORY, [type]);

  const { data: historyData, isFetching } = useQuery<IFreeTrialHistory[]>({
    queryKey: ["free-trial-history", data?.uuid],
    enabled: open && !!data?.uuid,
    queryFn: async () => {
      return new Promise((resolve, reject) => {
        if (data?.uuid) {
          getListFreeTrialHistory({
            param: { uuid: data.uuid },
            query: { p: 1, r: Number.MAX_SAFE_INTEGER },
            successHandler: {
              callBack: (res) => resolve(res.data || []),
            },
            errorHandler: {
              notifyConfig: { isShow: false },
              callBack: (err) => reject(err),
            },
          });
        }
      });
    },
    refetchOnWindowFocus: false,
  });

  return (
    <TimelineHistoryModal<IFreeTrialHistory>
      open={open}
      title="History"
      onClose={closeModal}
      loading={isFetching}
      data={historyData?.reverse() || null}
      fieldMapping={fieldMapping}
      renderStatus={(status) => (
        <FreeTrialStatus status={Number(status) as ETaskStatus} />
      )}
    />
  );
}

export default CommentHistory;

// import { useTranslation } from 'react-i18next';
import PlusAddOutlinedIcon from '@tdm/ui/v3.1.0/icon/icons/PlusAddOutlinedIcon';

import ProtectedButton from '@cms/app/components/v3.1.0/ProtectedUI/ProtectedButton';
import TRANSLATE_KEY from '@cms/app/locales';

import { EModalType, useModalContext } from '../../contexts/ModalContext';

function ActionBar() {
  const { t } = useTranslation();
  const { openModal } = useModalContext();
  return (
    <ProtectedButton
      type="primary"
      icon={<PlusAddOutlinedIcon />}
      title="Create"
      onClick={() => {
        openModal(EModalType.CREATE, null);
      }}
      nodeId={{
        isTab: true,
        action: 'create',
      }}
    >
      {t(TRANSLATE_KEY['common.create'])}
    </ProtectedButton>
  );
}

export default ActionBar;

//
import { useCallback } from "react";
import Box from "@tdm/ui/box";
import Flex from "@tdm/ui/flex";
import SearchInput from "@cms/app/components/v3.1.0/SearchInput";
import { useQueryContext } from "../../contexts/QueryContext";
import TRANSLATE_KEY from "@cms/app/locales";
import { useTranslation } from "react-i18next";

function SearchSection() {
  const { t } = useTranslation();
  const { setFilterData, filterData } = useQueryContext();

  const handleSearch = useCallback(
    (value: string) => {
      console.log("value", value);
      setFilterData({ name: value || "" });
    },
    [setFilterData]
  );

  return (
    <Flex sx={{ gap: "8px" }}>
      <Box>
        <SearchInput
          value={filterData.name}
          onSearch={handleSearch}
          placeholder={t(TRANSLATE_KEY["merchant.search_by_merchant_id"])}
        />
      </Box>
    </Flex>
  );
}

export default SearchSection;

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import qs from "query-string";

import {
  getListMerchant,
  getMerchantProfileConfig,
} from "@cms/app/apis/merchant";
import { useAppSelector } from "@cms/app/context";
import {
  IGetMerchantProfileConfigResponseData,
  IMerchantInfo,
  IMerchantProfileConfig,
} from "@cms/app/types/merchant";
import { isAdmin, omitIsNil } from "@cms/app/utils";
import { EMerchantProfile } from "@cms/app/constants";

interface FilterData {
  p: number;
  r: number;
  name: string;
}

const defaultFilterData: FilterData = {
  p: 1,
  r: 20,
  name: "",
};

const getInitialFilter = (search: string): FilterData => {
  const queryObj = qs.parse(search) as Partial<{
    p: string | number;
    r: string | number;
    name: string;
  }>;

  return {
    p: Number(queryObj.p) || defaultFilterData.p,
    r: Number(queryObj.r) || defaultFilterData.r,
    name: (queryObj.name as string) || defaultFilterData.name,
  };
};

interface QueryContextProps {
  tableData: {
    data: IMerchantInfo[];
    total: number;
  };
  filterData: FilterData;
  loading: boolean;
  merchantProfileConfig: Record<string, IMerchantProfileConfig>;
  setFilterData: (filter: Partial<FilterData>, replace?: boolean) => void;
  refetch: () => void;
}

const QueryContext = createContext<QueryContextProps | undefined>(undefined);

export const QueryContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const user = useAppSelector((s) => s.auth.user);
  const navigate = useNavigate();
  const location = useLocation();

  const [filterData, setFilterDataState] = useState<FilterData>(() =>
    getInitialFilter(location.search)
  );

  const { p, r, name } = filterData;

  // Prepare query for API call
  const apiQuery = useMemo(() => {
    return {
      r: r,
      name: name || undefined,
      p: p,
    };
  }, [r, name, p]);

  // Memoize query function to prevent unnecessary recreations
  const queryFn = useCallback(async () => {
    if (!isAdmin(user) && !user?.uid) {
      return { data: [], total: 0 };
    }

    return new Promise<{ data: IMerchantInfo[]; total: number }>(
      (resolve, reject) => {
        getListMerchant({
          name: "getListMerchant",
          param: {
            uid: user?.uid || "",
          },
          query: apiQuery,
          successHandler: {
            callBack: (resSuccess) => {
              resolve({
                data: resSuccess.data || [],
                total: resSuccess.total || 0,
              });
            },
          },
          errorHandler: {
            callBack: (error) => {
              reject(error);
            },
          },
        });
      }
    );
  }, [user, apiQuery]);

  // React Query hook
  const {
    data: tableData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<{
    data: IMerchantInfo[];
    total: number;
  }>({
    queryKey: ["merchant-list", user?.uid, apiQuery],
    queryFn,
    enabled: !!user && (isAdmin(user) || !!user?.uid),
    staleTime: 30000, // 30 seconds
    placeholderData: keepPreviousData,
  });

  const loading = isLoading || isFetching;

  // Query for merchant profile config (called once on mount, data rarely changes)
  const merchantProfileConfigQueryFn = useCallback(async () => {
    return new Promise<Array<IGetMerchantProfileConfigResponseData>>(
      (resolve, reject) => {
        getMerchantProfileConfig({
          successHandler: {
            callBack: (resSuccess) => {
              resolve(resSuccess.data || []);
            },
          },
          errorHandler: {
            notifyConfig: {
              isShow: false,
            },
            callBack: (error) => {
              reject(error);
            },
          },
        });
      }
    );
  }, []);

  const { data: merchantProfileConfigList = [] } = useQuery<
    Array<IGetMerchantProfileConfigResponseData>
  >({
    queryKey: ["merchant-profile-config"],
    queryFn: merchantProfileConfigQueryFn,
    staleTime: Infinity, // Never refetch automatically - data rarely changes
    gcTime: Infinity, // Keep in cache forever
    retry: 1, // Only retry once on error
  });

  // Transform merchant profile config data
  const merchantProfileConfig = useMemo<
    Record<string, IMerchantProfileConfig>
  >(() => {
    return merchantProfileConfigList.reduce((acc, item) => {
      const { name, ...restMerchantProfileConfig } = item;
      acc[name as EMerchantProfile] = {
        ...restMerchantProfileConfig,
      };
      return acc;
    }, {} as Record<string, IMerchantProfileConfig>);
  }, [merchantProfileConfigList]);

  // Wrapper for setFilterData to update URL
  const handleSetFilterData = useCallback(
    (filter: Partial<FilterData>, replace = false) => {
      const newFilter = {
        p: Number(filter.p) || 1,
        r: Number(filter.r) || 20,
        name: filter.name || "",
      };

      if (replace) {
        setFilterDataState(newFilter);
        const urlParams = omitIsNil(newFilter);
        const newSearch = `?${qs.stringify(urlParams)}`;
        navigate(`${location.pathname}${newSearch}`, { replace: true });
      } else {
        setFilterDataState((prev) => {
          const newState = omitIsNil({
            ...prev,
            ...newFilter,
          });
          const newSearch = `?${qs.stringify(newState)}`;
          navigate(`${location.pathname}${newSearch}`, { replace: true });
          return newState;
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterData]
  );

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      tableData: tableData || { data: [], total: 0 },
      filterData,
      loading,
      merchantProfileConfig,
      setFilterData: handleSetFilterData,
      refetch,
    }),
    [
      tableData,
      filterData,
      loading,
      merchantProfileConfig,
      handleSetFilterData,
      refetch,
    ]
  );

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
};
export const useQueryContext = () => {
  const ctx = useContext(QueryContext);
  if (!ctx) throw new Error("useQueryContext must be used within QueryContext");
  return ctx;
};
