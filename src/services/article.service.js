export const fetchArticlesApi = async () => {
  const response = await (
    await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=http://medium.com/feed/@yasmikash"
    )
  ).json();
  return response;
};
