const fetchData = async (route : string , option ?: RequestInit) => {
  const siteUrl = process.env.SITE_URL;

  if (!siteUrl) {
    throw new Error("SITE_URL is not configured");
  }

  const response = await fetch(
    new URL(route , siteUrl),
    option,
  );

  if (!response.ok) {
    // throw new Error(`Failed to fetch , status : ${response.status}`);
    throw new Error(
    `GET failed: ${response.status} ${response.statusText}`,
  );
  }

  const data = await response.json();

  return data;
};

export default fetchData;
