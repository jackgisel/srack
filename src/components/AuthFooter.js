import React from "react";
import Link from "next/link";

function AuthFooter(props) {
  return (
    <div className="px-3 mt-6 text-sm ">
      {props.type === "signup" && (
        <>
          {props.showAgreement && (
            <div className="mb-3 font-extrabold">
              By signing up, you are agreeing to our{" "}
              <Link href={props.termsPath}>
                <a className="text-blue-600 font-extrabold">Terms of Service</a>
              </Link>{" "}
              and{" "}
              <Link href={props.privacyPolicyPath}>
                <a className="text-blue-600 font-extrabold">Privacy Policy</a>
              </Link>
              .
            </div>
          )}

          <div className="font-extrabold">
            {props.signinText}
            <Link href={props.signinPath}>
              <a className="ml-3 text-blue-600">{props.signinAction}</a>
            </Link>
          </div>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link href={props.signupPath}>
            <a className="text-blue-600 font-extrabold">{props.signupAction}</a>
          </Link>

          {props.forgotPassAction && (
            <Link href={props.forgotPassPath}>
              <a className="ml-4 text-blue-600 font-extrabold">
                {props.forgotPassAction}
              </a>
            </Link>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <Link href={props.signinPath}>
            <a className="ml-3 text-blue-600 font-extrabold">
              {props.signinAction}
            </a>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
