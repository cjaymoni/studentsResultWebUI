export const enum PrimeNgAlerts {
  SUCCESS = 'Success',
  INFO = 'Info',
  ERROR = 'Error',
  WARNING = 'Warn',
  UNOBSTRUSIVE = 'Unobstrusive',
  ACTION = 'action',
}

export enum DialogPosition {
  LEFT = 'left',
  RIGHT = 'right',
  TOP_RIGHT = 'top-right',
  TOP_LEFT = 'top-left',
  TOP = 'top',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM = 'bottom',
  CENTER = 'center',
}

export const ERROR_MESSAGES_MAPPING = {
  errors: {
    useValue: {
      required: 'This field is required',
      minlength: ({ requiredLength, actualLength }: any) =>
        `Please enter ${requiredLength} or more characters. Current count: ${actualLength}`,
      maxlength: ({ requiredLength, actualLength }: any) =>
        `Please enter  ${requiredLength} or less characters. Current count: ${actualLength}`,
      email: () => `Please enter a valid email`,
      notEquivalent: 'Password does not match',
    },
  },
};
export const anchorErrorComponentFn = (
  hostElement: Element,
  errorElement: Element
) => {
  let errorNode: Element | null | undefined = hostElement?.querySelector(
    'custom-control-error'
  );

  const isInputGroup =
    hostElement?.parentElement?.classList.contains('p-float-label');

  if (isInputGroup) {
    hostElement?.parentElement?.insertAdjacentElement('afterend', errorElement);
    errorNode = hostElement?.parentElement?.querySelector(
      'custom-control-error'
    );
  } else {
    hostElement?.insertAdjacentElement('afterend', errorElement);
  }

  return () => {
    if (errorNode) {
      errorNode.remove();
    }
  };
};

export const capitalizeFirstLetter = (string: any) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

