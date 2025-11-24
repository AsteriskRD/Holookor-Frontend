"use client";

import { useSearchParams, useRouter } from "next/navigation";
import NavBar from "@/components/navigation/NavBar";
import { Video, ArrowLeft } from "lucide-react";

export default function LiveSessionPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("sessionId");

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 pb-8">
      <NavBar />

      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <div className="text-sm text-gray-500">
              Live session:{" "}
              <span className="font-medium text-gray-900">
                {sessionId || "—"}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-full bg-gray-100 rounded-md h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Video className="mx-auto w-10 h-10 mb-3 text-gray-400" />
                <div className="text-lg font-medium">
                  Live classroom placeholder
                </div>
                <div className="text-sm">
                  Video / live stream will appear here. Integrate your meeting
                  provider or WebRTC here.
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
                Join Session
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg">
                View Resources
              </button>
            </div>

            <div className="w-full text-xs text-gray-500">
              TODO: Replace this placeholder with your video/meeting integration
              and session controls (mic, camera, screen share).
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
