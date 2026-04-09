import Hello from "../components/hello";

export default function Home() {
  return (
    <main>
      <div className = "flex flex-col items-center justify-center min-h-screen py-16">
        <h1 className = "text-4xl font-bold mb-8">Hello from the other side!</h1>
         <Hello/>
      </div>
      
     

    </main>

  );
}
