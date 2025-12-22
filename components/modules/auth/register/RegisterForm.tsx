"use client";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./register.validation";
import Image from "next/image";
import logo from "@/public/assets/MartFusion.png";
import { registerUser } from "@/services/authService";
import { toast } from "sonner";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.error);
      }
    } catch (e) {
      console.log(e);
    }
    console.log("client", data);
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

        {/* Register Card */}
        <div className="bg-white shadow-2xl rounded-3xl border-2 border-orange-500/20 overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-1">
              Create Account
            </h1>
            <p className="text-orange-100 text-sm">
              Join us today & start your journey
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg py-5 transition-all duration-200"
                          placeholder="Enter your full name"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500 text-xs" />
                    </FormItem>
                  )}
                />

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
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg py-5 transition-all duration-200"
                          placeholder="Create a strong password"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="passwordConfirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg py-5 transition-all duration-200"
                          placeholder="Confirm your password"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
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
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Already have an account?
                    </span>
                  </div>
                </div>

                {/* Login Link */}
                <div className="text-center">
                  <Link
                    href="/login"
                    className="inline-block text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200 hover:underline"
                  >
                    Sign in instead
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

export default RegisterForm;
