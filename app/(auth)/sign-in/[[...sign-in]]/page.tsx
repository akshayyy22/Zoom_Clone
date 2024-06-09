import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
      <div className="absolute bottom-0 right-0 m-6 px-4 py-2 bg-slate-800 rounded-full text-slate-400 text-sm font-medium">Created by Akshay Esackimuthu</div>
    </main>
  );
}