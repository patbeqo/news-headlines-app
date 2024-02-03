"use client";

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: IErrorProps) {
  console.error(error);

  return (
    <div className="text-center ">
      <h2 className="m-2">Something went wrong!</h2>
      <button
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
