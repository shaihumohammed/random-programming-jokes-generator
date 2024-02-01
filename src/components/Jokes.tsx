import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";
export default function Jokes() {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["jokes"],
    queryFn: () =>
      fetch("https://v2.jokeapi.dev/joke/Programming?type=single").then((res) =>
        res.json()
      ),
  });
  if (isPending) return <Loading />;
  if (error) return <Error error={error.message} />;
  return (
    <main>
      <div className="joke">
        <p>{data.joke}</p>
        <button type="button" onClick={() => refetch()}>
          Next Joke
        </button>
      </div>
    </main>
  );
}
