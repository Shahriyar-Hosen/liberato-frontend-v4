export async function fetcher(url: string, options = {}) {
  try {
    let response;
    if (!options) {
      response = await fetch(url);
    } else {
      response = await fetch(url, options);
    }
    return await response.json();
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
