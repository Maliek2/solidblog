import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
  return (
    <main>
      <h1>Heyy To World War</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://blog.adball.online" target="_blank">
          Subscribe
        </a>{" "}
        to learn how to build AMP apps. 
        
      </p>
     
    </main>
  );
}
