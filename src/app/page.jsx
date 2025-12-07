import Logo from "@/components/Logo";
import Button from "@/components/ui/button";
import { ExternalLink, UserCheck, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header / Hero */}
        <header className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="mb-4">
              <Logo />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f622e] leading-tight">
              Learn smarter, faster — with Holookor
            </h1>
            <p className="mt-4 text-[var(--color-muted-foreground)] max-w-xl">
              Personalized sessions, verified tutors, and progress tools to keep
              you accountable. Start your learning journey today.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard">
                <Button className="flex items-center gap-2 bg-[var(--color-primary-600)] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  <span>Go to Dashboard</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/tutors">
                <Button className="flex items-center gap-2 bg-white  border border-[var(--color-primary-600)] px-6 py-3 rounded-lg hover:bg-green-700 transition-colors] transition-colors ">
                  <span className="text-[var(--color-muted-foreground)] hover:text-white">Find Tutors</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Your snapshot</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">91%</p>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Average Score
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Certificates
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </header>

        {/* Features */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-start gap-4">
            <UserCheck className="w-6 h-6 text-[var(--color-primary-600)]" />
            <h4 className="font-semibold">Verified Tutors</h4>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Browse screened educators for every subject.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-start gap-4">
            <BookOpen className="w-6 h-6 text-[var(--color-primary-600)]" />
            <h4 className="font-semibold">Personalized Sessions</h4>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Tailored lessons that match your pace and goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-start gap-4">
            <Star className="w-6 h-6 text-[var(--color-primary-600)]" />
            <h4 className="font-semibold">Track Progress</h4>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Visualize performance and celebrate milestones.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">What learners say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm text-[var(--color-muted-foreground)]">
                “Holookor helped me focus and improve my grades within weeks.”
              </p>
              <p className="mt-4 font-semibold">— Alex</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm text-[var(--color-muted-foreground)]">
                “The tutors are top-notch and the platform is super easy to
                use.”
              </p>
              <p className="mt-4 font-semibold">— Maya</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm text-[var(--color-muted-foreground)]">
                “I love the progress dashboard — it keeps me motivated.”
              </p>
              <p className="mt-4 font-semibold">— Daniel</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
