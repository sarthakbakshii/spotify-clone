# Sotify Clone



## Learning and error fased while development
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

With this you dont have to directly go and do assign all props, it will fetch it from its HTML element extended from.\
      For full code, visit : `component/Button.tsx` and `component/Input.tsx`

2) I wasnt awair of this. this is used in a page level so that, data on the page do not get cashed and alwayes get up to dated. \
   `export const revalidate = 0;`

3) When ever you are fetching a data from bucket, it will return domain of its own, You have to add that in `next.config.js`\

```
   const nextConfig = {
     images: {
       domains: ["jqbtmabwrkontiohutdp.supabase.co"],
     },
   };


   
bd password : U*vQ4s-W$RkwWwL
