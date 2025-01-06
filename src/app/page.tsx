import ApiKeyForm from "@/components/ApiKeyForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          API Key Configuration
        </h1>
        <ApiKeyForm />
      </div>
    </main>
  );
}