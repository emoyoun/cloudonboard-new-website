"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { engagementModels, inquirySchema, type InquiryInput } from "@/lib/inquiry";
import { submitInquiry } from "@/lib/submit-inquiry";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-foam outline-none transition-colors placeholder:text-steel/70 focus:border-brand-bright";

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [done, setDone] = useState<InquiryInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", model: "", scope: "" },
  });

  async function onSubmit(values: InquiryInput) {
    setServerMessage(null);
    const result = await submitInquiry(values);
    if (!result.ok) {
      setServerMessage(result.message);
      return;
    }
    setDone(values);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-line bg-panel p-6 sm:p-8" role="status">
        <p className="font-mono text-xs tracking-[0.18em] text-brand-bright uppercase">
          Sent
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-foam">
          Request received.
        </h3>
        <p className="mt-3 text-sm leading-6 text-steel">
          Your notes are on their way. We will reply at {done.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-line bg-panel p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} id="name">
          <input
            id="name"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>
        <Field label="Company email" error={errors.email?.message} id="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Engagement model" error={errors.model?.message} id="model">
          <select
            id="model"
            className={fieldClass}
            defaultValue=""
            aria-invalid={errors.model ? true : undefined}
            aria-describedby={errors.model ? "model-error" : undefined}
            {...register("model")}
          >
            <option value="" disabled>
              Select a model
            </option>
            {engagementModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project scope" error={errors.scope?.message} id="scope">
          <textarea
            id="scope"
            rows={6}
            className={fieldClass}
            placeholder="System context, the constraint, and what a useful review would decide."
            aria-invalid={errors.scope ? true : undefined}
            aria-describedby={errors.scope ? "scope-error" : undefined}
            {...register("scope")}
          />
        </Field>
      </div>

      {serverMessage ? (
        <p className="mt-4 text-sm text-red-300" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a62c0] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
      >
        {isSubmitting ? "Checking…" : "Submit for review"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foam">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
