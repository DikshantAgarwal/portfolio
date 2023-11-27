export async function getLatestRepos(token: string | undefined) {
  try {
    if (token) {
      const response = await fetch(
        "https://api.github.com/users/DikshantAgarwal/repos?sort=updated",
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      const data = await response.json();
      if (!data.message) {
        return data.splice(0, 6);
      } else {
        return [];
      }
    }
  } catch (error) {
    console.error(error);
  }
}
