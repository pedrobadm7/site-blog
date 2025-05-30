import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <h2 className="text-4xl font-bold text-red-500">Title</h2>
      <Button variant="outline">Click me</Button>
    </div>
  );
}
