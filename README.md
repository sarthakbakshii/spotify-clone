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

3) When ever you are fetching a data from bucket, it will return domain of its own, You have to add that in `next.config.js`.

   ```
      const nextConfig = {
        images: {
          domains: ["jqbtmabwrkontiohutdp.supabase.co"],
        },
      };


## Stripe payment intigration
1) Create an account on <a href="https://stripe.com/in?utm_campaign=IN_EN_Search_Brand_Stripe_EXA-19968032780&utm_medium=cpc&utm_source=google&ad_content=654755077645&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=Cj0KCQjwmICoBhDxARIsABXkXlKGWj3zymfPsS40X26cF7LDObrWYG8bTZF4p3Lz4dCq8kKoWoZCwKUaAoMWEALw_wcB"> Stripe </a> and reacte a project in it, in my case its `spotify_clone`.
2) Go on its DashBoard. your selected project and always on Developer Mode.
3) You can take `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` from `API KEY` option for setup.
4) Write all your code for Webhooks and supabase-stripe data fetching.
5) For useing and testing payment in local machine, you have to download the cli version. <a href="https://dashboard.stripe.com/test/webhooks/create"> click on Web Hook and get full info </a>. OR


    step 1 : <a href="https://stripe.com/docs/stripe-cli"> Download the CLI </a>  and log in with your Stripe account.\
    step 2 : ``.\stripe login`` after onpening in cmd ( windows ).\
    step 3 : Forward events to your webhook, ``stripe listen --forward-to localhost:4242/webhook``.\
             in my case it is : ``.\stripe listen --forward-to loaclhost:3000/api/webhooks``.\
    step 4 : for testing payments : `` stripe trigger payment_intent.succeeded ``.

   NOTE : always keep step 3 on , so that youy supabse and strip will be in sync in local host testing
          


<hr />
   
bd password : U*vQ4s-W$RkwWwL
