"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function ConsultationForm({
  onSubmit,
}: {
  onSubmit: (name: string, email: string) => void;
}) {
  const [consultName, setConsultName] = React.useState("");
  const [consultEmail, setConsultEmail] = React.useState("");
  const isValid = consultName.trim() && consultEmail.trim();
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid) onSubmit(consultName, consultEmail);
      }}
    >
      <Input
        placeholder="Full Name"
        value={consultName}
        onChange={(e) => setConsultName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={consultEmail}
        onChange={(e) => setConsultEmail(e.target.value)}
        required
      />
      <div className="mb-6"></div>
      <Button className="w-full" disabled={!isValid} type="submit">
        Request a Consultation Meeting
      </Button>
    </form>
  );
}

export default function Payment() {
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState("");

  // Book a Consultant state
  const [consultLoading, setConsultLoading] = useState(false);
  const [consultSuccess, setConsultSuccess] = useState(false);
  const [consultError, setConsultError] = useState("");

  // On mount, prefill from localStorage
  React.useEffect(() => {
    const savedName = localStorage.getItem("contact_name");
    const savedEmail = localStorage.getItem("contact_email");
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  // State for showing consultation form modal
  const [showConsultForm, setShowConsultForm] = useState(false);

  // Handle contact form submit
  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactLoading(true);
    setContactError("");
    setContactSuccess(false);
    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setContactSuccess(true);
        localStorage.setItem("contact_name", name);
        localStorage.setItem("contact_email", email);
        setMessage("");
      } else {
        setContactError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setContactError("Network error. Please try again.");
    } finally {
      setContactLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Message Section */}
      <div className="bg-[#23272a] rounded-xl shadow p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Message Us</h2>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="min-h-[95px]"
            required
          />
          <Button type="submit" disabled={contactLoading} className="w-full">
            {contactLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {contactLoading && (
          <div className="flex justify-center items-center mt-4">
            <span className="inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></span>
          </div>
        )}
        {contactSuccess && (
          <div className="mt-4 text-green-600 font-medium">
            Message sent! We'll be in touch soon.
          </div>
        )}
        {contactError && (
          <div className="mt-4 text-red-600 font-medium">{contactError}</div>
        )}
      </div>

      {/* Book a Consultant Section (Stripe) */}
      <div className="bg-[#23272a] rounded-xl shadow p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-8">Book a Consultation</h2>
        <div className="text-gray-500 mb-4">
          Book a 1-hour consultation for $25.
        </div>
        <div className="mb-8"></div>
        <ConsultationForm
          onSubmit={(consultName, consultEmail) => {
            // Call API to send consultation emails
            setConsultLoading(true);
            setConsultError("");
            setConsultSuccess(false);
            fetch("/api/sendConsultationEmail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: consultName,
                email: consultEmail,
              }),
            })
              .then(async (res) => {
                const data = await res.json();
                if (res.ok) {
                  setConsultSuccess(true);
                } else {
                  setConsultError(
                    data.message || "Failed to send consultation email."
                  );
                }
              })
              .catch(() => setConsultError("Network error. Please try again."))
              .finally(() => setConsultLoading(false));
          }}
        />
        {consultLoading && (
          <div className="flex justify-center items-center mt-4">
            <span className="inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></span>
          </div>
        )}
        {consultSuccess && (
          <div className="mt-4 text-green-600 font-medium">
            Consultation request sent! Please check your email for payment
            instructions.
          </div>
        )}
        {consultError && (
          <div className="mt-4 text-red-600 font-medium">{consultError}</div>
        )}
      </div>
    </div>
  );
}
