import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-block text-center px-6 py-3 rounded-xl border eq font-medium active:scale-105 disabled:border-grey disabled:bg-grey disabled:text-dark/50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "border-dark bg-dark text-white hover:border-dark/90 hover:bg-dark/90",
        outline:
          "border-dark bg-transparent text-dark hover:bg-dark hover:text-white",
        ghost:
          "border-transparent bg-transparent text-dark hover:bg-grey hover:border-grey",
        rose: "border-red bg-red text-white hover:bg-red/90 hover:border-red/90",
        valentine:
          "border-pink bg-pink text-dark hover:bg-pink/90 hover:border-pink/90",
        halloween:
          "border-orange bg-orange text-dark hover:bg-orange/90 hover:border-orange/90",
        success:
          "border-green bg-green text-dark hover:bg-green/90 hover:border-green/90",
        ocean:
          "border-blue bg-blue text-dark hover:bg-blue/90 hover:border-blue/90",
        violet:
          "border-violet bg-violet text-white hover:bg-violet/90 hover:border-violet/90",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
