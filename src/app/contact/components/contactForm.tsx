"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { contactSchema } from "@/schema/contact";
import { CustomButton } from "@/components/shared/customButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingOverlay } from "@/components/shared/loadingOverlay";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setLoading(true);

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.status === "success") {
        console.log("Service request successfully sent:", data.message);

        form.reset();

        sessionStorage.setItem("consultationSuccess", "true");
        router.replace("/contact/success");
      } else {
        console.error("Error submitting form:", data.message);

        toast(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);

      toast("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {loading && <LoadingOverlay />}

      <section className="shadow-2xl bg-base-white py-6 px-5 md:py-9 md:px-8 flex flex-col space-y-5 justify-center ">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-[36px] leading-[42px] font-medium max-w-[95%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%]">
            Send us a message
          </h3>
          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[45%]">
            Thank you for your interest in KAVOD Engineering Services. Use the
            form below to direct your inquiries, consultations, or service
            requests.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div>
                        Name<span className="text-required">*</span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="h-[48px] border-gray-100 focus-visible:border-brand-900 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div>
                        Email address<span className="text-required">*</span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email address"
                        {...field}
                        className="h-[48px] border-gray-100 focus-visible:border-brand-900 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter contact number"
                        {...field}
                        className="h-[48px] border-gray-100 focus-visible:border-brand-900 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div>
                        Subject<span className="text-required">*</span>
                      </div>
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger className="!h-[48px] border-gray-100 focus-visible:border-brand-900 focus-visible:ring-0">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="Quality Assurance Inspection">
                          Quality Assurance Inspection
                        </SelectItem>

                        <SelectItem value="Non-Destructive Testing">
                          Non-Destructive Testing
                        </SelectItem>

                        <SelectItem value="Coatings Inspection">
                          Coatings Inspection
                        </SelectItem>

                        <SelectItem value="CWI Training">
                          CWI Training
                        </SelectItem>

                        <SelectItem value="Engineering Consulting">
                          Engineering Consulting
                        </SelectItem>

                        <SelectItem value="WPS, PQR, and WQTR/WPQ Preparation">
                          WPS, PQR, and WQTR/WPQ Preparation
                        </SelectItem>

                        <SelectItem value="Other Inquiries">
                          Other Inquiries
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div>
                      Message<span className="text-required">*</span>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter message"
                      {...field}
                      className="h-[180px] border-gray-100 focus-visible:border-brand-900 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </Form>
      </section>
    </div>
  );
}
