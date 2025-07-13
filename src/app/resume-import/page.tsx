"use client";
import { getHasUsedAppBefore } from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ImportResume() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);

  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#000000] via-[#0e0e0e] to-[#1c1c1c] px-4 py-16 font-['Inter']">
      <div className="w-full max-w-3xl rounded-2xl bg-[#1a1a1f]/90 backdrop-blur-lg p-10 shadow-lg ring-1 ring-[#4feeff]/30 border border-[#4feeff]/40">

        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-center text-3xl font-bold font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-[#4feeff] to-[#8a4fff]">
              Import your existing resume
            </h1>
            <ResumeDropzone onFileUrlChange={onFileUrlChange} className="mt-6" />
            {!hasAddedResume && (
              <>
                <OrDivider />
                <SectionWithHeadingAndCreateButton
                  heading="Don't have a resume yet?"
                  buttonText="Create from scratch"
                />
              </>
            )}
          </>
        ) : (
          <>
            {!hasAddedResume && (
              <>
                <SectionWithHeadingAndCreateButton
                  heading="You have data saved from before"
                  buttonText="Continue where I left off"
                />
                <OrDivider />
              </>
            )}
            <h1 className="text-center text-2xl font-bold font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-[#4feeff] to-[#8a4fff]">
              Override with a new resume
            </h1>
            <ResumeDropzone onFileUrlChange={onFileUrlChange} className="mt-6" />
          </>
        )}
      </div>
    </main>
  );
}

const OrDivider = () => (
  <div className="flex items-center py-6" aria-hidden="true">
    <div className="flex-grow border-t border-white/20" />
    <span className="mx-4 text-sm text-white/40 font-light uppercase">OR</span>
    <div className="flex-grow border-t border-white/20" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
}: {
  heading: string;
  buttonText: string;
}) => {
  return (
    <>
      <p className="text-center text-lg font-semibold text-white">{heading}</p>
      <div className="mt-4 flex justify-center">
        <Link
          href="/resume-builder"
          className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:from-sky-500 hover:to-cyan-600"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
