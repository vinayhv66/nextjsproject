import Hello from "./components/hello";

export default function Home() {
  console.log('what am i -- SERVER/CLIENT?');
  return (
    <>
      <h1>welcome to next.js</h1>
      <Hello />
    </>
  );
}
 