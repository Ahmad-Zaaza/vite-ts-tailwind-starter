import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";
import clsx from "classnames";
import { IconType } from "react-icons";

interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  variant?: "small" | "regular" | "large";
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      label,
      error,
      startIcon: StartIcon,
      variant = "regular",
      endIcon: EndIcon,
      ...props
    },
    ref
  ) => {
    const sizes = useMemo(
      () => ({
        "px-2 py-1": variant === "small",
        "px-3 py-2": variant === "regular",
        "px-4 py-2": variant === "large"
      }),
      [variant]
    );
    const inputClasses = useMemo(
      () =>
        clsx(
          "w-full bg-paper focus:outline-primary focus-within:outline-primary",
          sizes,
          className
        ),
      [sizes]
    );

    const iconContainerClasses = useMemo(
      () => clsx("inline-block", sizes),
      [sizes]
    );
    const iconSize = useMemo(
      () => (variant === "regular" ? 20 : variant === "large" ? 25 : 18),
      [variant]
    );
    return (
      <div>
        {label ? (
          <label className="input-label" htmlFor={props.id}>
            {label}
          </label>
        ) : null}
        <div className="flex items-center border rounded bg-paper">
          {StartIcon && (
            <span className={iconContainerClasses}>
              <StartIcon size={iconSize} />
            </span>
          )}
          <input className={inputClasses} {...props} ref={ref} />
          {EndIcon && (
            <span className={iconContainerClasses}>
              <EndIcon size={iconSize} />
            </span>
          )}
          {error && (
            <span className="text-sm font-semibold text-red-700">{error}</span>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
