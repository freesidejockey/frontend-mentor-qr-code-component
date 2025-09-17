import Image from "next/image";

export default function Home() {
  return (
    <article className="h-screen bg-slate-300">
      <div className="mx-auto pb-8"></div>
      <div className="mx-auto max-w-sm">
        <div className="mr-8 mb-8 ml-8 rounded-xl bg-white p-4">
          <picture>
            <img
              className="rounded-xl"
              src="/images/image-qr-code.png"
              alt="QR Code"
            />
          </picture>

          <div className="mx-auto max-w-xs">
            <div className="pt-6 pb-2 text-center text-lg font-extrabold">
              Improve your front-end skills by building projects
            </div>
            <p className="pb-2 text-center text-sm font-thin">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/freesidejockey">FreesideJockey</a>.
      </div>
    </article>
  );
}
