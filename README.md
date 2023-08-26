bd password : U*vQ4s-W$RkwWwL

## Learning
1) Insted of directly creating a HTML element custom component, the new and better way i learned :
   ```
    import React, { forwardRef } from "react";
    
    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
   
    const Button = forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, children, disabled, type = "button", ...props }, ref) => {
        return (
          <button
            type={type}
            className={className}
            disabled={disabled}
            ref={ref}
            {...props}
          >
            {children}
          </button>
        );
      }
    );
    
    Button.displayName = "Button";
    
    export default Button;
```
With this you dont have to directly go and do assign all props, it will fetch it from its HTML element extended from.

For full code, visit : `component/Button.tsx` and `Input.tsx`
