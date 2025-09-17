import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-amber-100">
      {/* Background */}
      <div className="max-w-md mx-auto bg-white">
        {/* Card*/}
        <div className="relative w-full h-64">
          {" "}
          {/* Make container relative with desired height */}
          <Image
            src="/images/image-qr-code.png"
            alt="QR Code"
            fill
            className="object-contain" // or object-cover depending on your needs
          />
        </div>
        {/* Card Image or Header */}
        <div>
          {/* Card Body */}
          <p>
            {/* Main Text */}
            Improve your front-end skills by building projects
          </p>
          <p>
            {/* Sub Text */}
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>{" "}
    </div>
  );
}
