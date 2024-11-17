export default function Login() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-4xl font-bold">Login</h1>
      {/* <Form action="/search"> */}
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <button type="submit">Submit</button>
      {/* </Form> */}
    </main>
  );
}
