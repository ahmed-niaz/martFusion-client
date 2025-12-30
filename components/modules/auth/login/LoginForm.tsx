"use client";
import { Button } from "@/components/ui/button";
import logo from "@/public/assets/MartFusion.png";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./login.validation";
import { reCaptchaTokenVerification, userLogin } from "@/services/authService";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [reCaptchaStatus, setReCaptchaStatus] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  // handle reCaptcha
  const handleReCaptcha = async (value: string | null) => {
    try {
      const res = await reCaptchaTokenVerification(value!);
      if (res?.success) {
        setReCaptchaStatus(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await userLogin(data);

      if (res.success) {
        toast.success(res.message);
        router.push("/");
      } else {
        toast.error(res.error);
      }
    } catch (e) {
      console.log(e);
    }
    // console.log("client", data);
  };
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
      <div className="w-full max-w-lg lg:max-w-xl">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className=" rounded-xl p-4 shadow-2xs cursor-pointer">
            <Image
              src={logo}
              alt="MartFusion"
              width={80}
              height={80}
              className="drop-shadow-md"
            />
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white shadow-2xl rounded-3xl border-2 border-orange-500/20 overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-1">Welcome Back</h1>
            <p className="text-orange-100 text-sm">
              Sign in to continue shopping
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg py-5 transition-all duration-200"
                          placeholder="Enter your email"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="text-gray-700 font-semibold text-sm">
                          Password
                        </FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-xs text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                        >
                          Forgot?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          className="border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg py-5 transition-all duration-200"
                          placeholder="Enter your password"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* ReCAPTCHA */}
                <div className="flex justify-center py-3">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
                    onChange={handleReCaptcha}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  disabled={!reCaptchaStatus || form.formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  type="submit"
                >
                  {form.formState.isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Logging in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      New to MartFusion?
                    </span>
                  </div>
                </div>

                {/* Register Link */}
                <div className="text-center">
                  <Link
                    href="/register"
                    className="inline-block text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200 hover:underline"
                  >
                    Create an account
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-8">
          © 2024 MartFusion. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
