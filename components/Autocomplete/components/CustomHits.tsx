import { StateResultsProvided } from "react-instantsearch-core";
import { connectStateResults } from "react-instantsearch-dom";

function Hits({ allSearchResults, searchState }: StateResultsProvided) {
  console.log(allSearchResults);
  if (searchState.query === "") return <></>;
  return (
    <ul className="absolute bg-white">
      {allSearchResults?.hits.map((poster) => (
        <li key={poster.name}>
          <a>
            <article>
              <h2>{poster.name}</h2>
            </article>
          </a>
        </li>
      ))}
    </ul>
  );
}

export const CustomHits = connectStateResults(Hits);
