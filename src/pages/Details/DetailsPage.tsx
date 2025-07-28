import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{details.name}</h1>
      <div>
        <h2 className="text-lg font-semibold">Description</h2>
        <div className="p-3 bg-gray-200 rounded">{details.description}</div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Licence</h2>
        <div className="p-3 bg-gray-200 rounded">{details.license}</div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Author</h2>
        <div className="p-3 bg-gray-200 rounded">{details.author?.name}</div>
      </div>
    </div>
  );
}
