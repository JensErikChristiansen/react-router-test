import { useLoaderData, useRouteLoaderData, useMatches } from 'react-router';

export default function Profile() {
  // const { countries } = useLoaderData();
  const { countries } = useRouteLoaderData('settings');
  const matches = useMatches();

  console.log(matches);

  return (
    <div>
      {countries.map((c) => (
        <div>{c}</div>
      ))}
    </div>
  );
}
