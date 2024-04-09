import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, asChild = false,children, ...props }, ref) => {
    
      return (
        <button className={"bg-primary1 p-3" + className} {...props}>
            {children}
        </button>
      );
    }
  );
  Button.displayName = "Button";
  
  export default Button
  